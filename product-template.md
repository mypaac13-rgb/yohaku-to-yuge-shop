# 新商品追加テンプレ

今のストアは [store-data.js](/Users/aya/claude/30_shop/homepage/store-data.js) を共通データとして使っています。  
新商品を増やすときは、基本的に次の2ステップだけです。

## 1. 画像を置く

商品画像を `homepage/` 配下に置きます。

例:

```text
/Users/aya/claude/30_shop/homepage/new-item.jpg
```

## 2. `store-data.js` に1件追加する

`window.STORE_PRODUCTS = [ ... ]` の配列の末尾に、次をそのままコピーして使います。

```js
{
  sku: 'new_item_slug',
  name: '商品名',
  image: '../new-item.jpg',
  image_home: './new-item.jpg',
  price: '¥9,999',
  category: 'drinkware',
  short_description: '一覧や注文ページに出る短い説明。',
  detail_sections: [
    { title: '見出し1', text: '商品詳細ページに出す本文。' },
    { title: '見出し2', text: '補足の説明文。' }
  ],
  featured: true
}
```

## category の選び方

- `drinkware`: 飲む道具
- `organizers`: 整える道具
- `decor`: 飾る道具

## 各項目の意味

- `sku`: 商品ID。URLや注文ページで使うので、重複させない
- `name`: 商品名
- `image`: 商品詳細・一覧で使う画像パス
- `image_home`: ホームで使う画像パス
- `price`: 価格表示
- `category`: カテゴリ
- `short_description`: 一覧カード用の短い説明
- `detail_sections`: 商品詳細ページの本文
- `featured`: `true` ならホームのおすすめ商品に出る

## 追加すると自動で反映される場所

- ホームのおすすめ商品
- Online Store 一覧
- カテゴリページ
- 商品詳細ページ
- 銀行振込の注文ページ

## 例

```js
{
  sku: 'wood_coaster',
  name: '木製のコースター',
  image: '../wood-coaster.jpg',
  image_home: './wood-coaster.jpg',
  price: '¥1,600',
  category: 'organizers',
  short_description: '湯呑みやマグの下に敷くだけで、机の上の景色が落ち着く小さな木の面。',
  detail_sections: [
    { title: '小さな面を足す', text: '机の上に直接置かず、一枚木を挟むだけで輪郭が整います。' },
    { title: '使わない時間も景色になる', text: '飲みものがないときにも、そのまま置いておける静かな道具です。' }
  ],
  featured: false
}
```
