# GitHub Pages 用 注文送信設定

この構成は `GitHub Pages + Google Apps Script + Google スプレッドシート` で動かします。

料金:

- 月額料金: `0円`
- 初期費用: `0円`

## 1. スプレッドシートを作る

Google スプレッドシートを1つ作成し、IDを控えます。

## 2. Apps Script を作る

1. スプレッドシートから `拡張機能 > Apps Script`
2. [google-apps-script.gs](/Users/aya/claude/30_shop/homepage/order-api/google-apps-script.gs) の中身を貼る
3. `SPREADSHEET_ID` を実際のIDに差し替える
4. 保存する

## 3. ウェブアプリとしてデプロイ

1. `デプロイ > 新しいデプロイ`
2. 種類: `ウェブアプリ`
3. 実行ユーザー: `自分`
4. アクセスできるユーザー: `全員`
5. デプロイして URL を控える

## 4. フロント側にURLを入れる

[order-config.js](/Users/aya/claude/30_shop/homepage/order/order-config.js) の `endpoint` に、デプロイURLを入れます。

```js
endpoint: 'https://script.google.com/macros/s/XXXX/exec'
```

## 5. GitHub Pages へ公開

これで [order/index.html](/Users/aya/claude/30_shop/homepage/order/index.html) から注文送信できます。

## 送られるもの

- スプレッドシートへ注文保存
- `mypaac13@gmail.com` へ通知メール
- 注文者へ控えメール
- 注文画面に銀行振込先を表示

## 注意

- 初回は Apps Script 側の承認が必要です
- `アクセスできるユーザー` を `全員` にしないと GitHub Pages から送れません
