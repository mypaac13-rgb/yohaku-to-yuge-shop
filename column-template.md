# 新しい読みものの追加方法

読みものは [store-data.js](/Users/aya/claude/30_shop/homepage/store-data.js) の `window.STORE_COLUMNS` で管理しています。

## 手順

1. 画像を `homepage/` 配下に置く
2. `STORE_COLUMNS` に1件追加する

## テンプレ

```js
{
  slug: 'new-column-slug',
  title: '記事タイトル',
  lead: '一覧や冒頭に出る短い導入。',
  image: '../new-column.jpg',
  image_home: './new-column.jpg',
  excerpt: '一覧カードに出る短い要約。',
  body: [
    '本文1段落目。',
    '本文2段落目。',
    '本文3段落目。'
  ]
}
```

## 自動反映される場所

- ホームの「読みものを見る」から飛ぶ一覧
- 記事詳細ページ
