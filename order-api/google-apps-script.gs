const OWNER_EMAIL = 'mypaac13@gmail.com';
const SPREADSHEET_ID = '15ff1ilHsYVlgmx941q2rzTVyoxBs5vzFCgtP4dzIhH0';
const SHEET_NAME = 'orders';

function doOptions() {
  return createJsonResponse({ ok: true });
}

function doPost(e) {
  try {
    const payload = parsePayload(e);
    const required = ['sku', 'product_name', 'product_price', 'customer_name', 'customer_email', 'customer_zip', 'customer_address'];
    required.forEach((key) => {
      if (!String(payload[key] || '').trim()) {
        throw new Error(`${key} は必須です。`);
      }
    });

    const orderId = createOrderId();
    const bank = payload.bank || {
      bank_name: payload.bank_name || '',
      branch_name: payload.bank_branch || '',
      account_type: payload.bank_account_type || '',
      account_number: payload.bank_account_number || '',
      account_holder: payload.bank_account_holder || ''
    };
    const timestamp = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
    const sheet = getSheet();

    sheet.appendRow([
      timestamp,
      orderId,
      payload.sku,
      payload.product_name,
      payload.product_price,
      payload.category_name || '',
      payload.customer_name,
      payload.customer_email,
      payload.customer_zip,
      payload.customer_address,
      payload.customer_note || ''
    ]);

    const mailText = buildMailText(orderId, payload, bank);
    GmailApp.sendEmail(
      OWNER_EMAIL,
      `【余白と湯気】新規注文 ${orderId} / ${payload.product_name}`,
      mailText
    );
    GmailApp.sendEmail(
      payload.customer_email,
      `【余白と湯気】ご注文控え ${orderId}`,
      `ご注文ありがとうございます。\n以下の内容で承りました。\n\n${mailText}\n\n入金確認後にご案内します。`
    );

    return createJsonResponse({
      order_id: orderId,
      email_status: 'sent',
      bank: bank
    });
  } catch (error) {
    return createJsonResponse({ error: error.message || '注文送信に失敗しました。' }, 400);
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'created_at',
      'order_id',
      'sku',
      'product_name',
      'product_price',
      'category_name',
      'customer_name',
      'customer_email',
      'customer_zip',
      'customer_address',
      'customer_note'
    ]);
  }
  return sheet;
}

function createOrderId() {
  return 'YY' + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyMMddHHmmss');
}

function parsePayload(e) {
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (_) {}
  }
  const params = e.parameter || {};
  return {
    sku: params.sku || '',
    product_name: params.product_name || '',
    product_price: params.product_price || '',
    category_name: params.category_name || '',
    customer_name: params.customer_name || '',
    customer_email: params.customer_email || '',
    customer_zip: params.customer_zip || '',
    customer_address: params.customer_address || '',
    customer_note: params.customer_note || '',
    bank_name: params.bank_name || '',
    bank_branch: params.bank_branch || '',
    bank_account_type: params.bank_account_type || '',
    bank_account_number: params.bank_account_number || '',
    bank_account_holder: params.bank_account_holder || ''
  };
}

function buildMailText(orderId, payload, bank) {
  return [
    '余白と湯気 ご注文内容',
    `注文番号: ${orderId}`,
    `商品名: ${payload.product_name}`,
    `価格: ${payload.product_price}`,
    `カテゴリ: ${payload.category_name || ''}`,
    '',
    `お名前: ${payload.customer_name}`,
    `メールアドレス: ${payload.customer_email}`,
    `郵便番号: ${payload.customer_zip}`,
    `住所: ${payload.customer_address}`,
    `備考: ${payload.customer_note || 'なし'}`,
    '',
    '振込先情報',
    `銀行名: ${bank.bank_name || ''}`,
    `支店名: ${bank.branch_name || ''}`,
    `口座種別: ${bank.account_type || ''}`,
    `口座番号: ${bank.account_number || ''}`,
    `口座名義: ${bank.account_holder || ''}`
  ].join('\n');
}

function createJsonResponse(data, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
