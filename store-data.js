// 商品を増やすときは、まず画像を `homepage/` 配下に置き、
// 次に `window.STORE_PRODUCTS` に下のテンプレ形式で1件追加します。
//
// {
//   sku: 'new_item_slug',
//   name: '商品名',
//   image: '../new-item.jpg',
//   image_home: './new-item.jpg',
//   price: '¥9,999',
//   category: 'drinkware',
//   short_description: '一覧や注文ページに出る短い説明。',
//   detail_sections: [
//     { title: '見出し1', text: '商品詳細ページに出す本文。' },
//     { title: '見出し2', text: '補足の説明文。' }
//   ],
//   featured: true
// }
//
// category は次のいずれか:
// - drinkware
// - organizers
// - decor

window.STORE_CATEGORIES = [
  {
    key: 'drinkware',
    name: '飲む道具',
    description: '朝の湯気や冷たいガラスの輪郭のように、手の中の温度を静かに感じるための道具です。'
  },
  {
    key: 'organizers',
    name: '整える道具',
    description: '机の上や棚の端に散らばるものをまとめ、視線と呼吸を少し整えるための道具です。'
  },
  {
    key: 'decor',
    name: '飾る道具',
    description: '生活の動作を増やさず、ただ置くだけで空気の流れや視線の止まり方を少し変える道具です。'
  }
];

window.STORE_SCENES = [
  {
    key: 'morning',
    name: '朝の時間',
    image: '../pexels-little-forest-2150377525-31959144.jpg',
    image_home: './pexels-little-forest-2150377525-31959144.jpg',
    description: '光が入る窓辺と、静かなトレーの上。朝の時間を少しだけ丁寧にする道具たち。'
  },
  {
    key: 'desk',
    name: '机の上を整える',
    image: '../tukue.jpg',
    image_home: './tukue.jpg',
    description: '散らかりやすい小物を、静かにまとめる。机の上が整うと、頭の中も少し整う。'
  },
  {
    key: 'rainy_room',
    name: '雨の日の部屋',
    image: '../ame.jpg',
    image_home: './ame.jpg',
    description: '外に出ない日は、部屋の空気を整える日。キャンドルと布と、小さな花器。'
  },
  {
    key: 'welcome_shelf',
    name: '誰かを迎える棚',
    image: '../tana.jpg',
    image_home: './tana.jpg',
    description: '人が来る日に、何気なく目に入る場所。飾りすぎない、でも空気のある棚をつくる。'
  }
];

window.STORE_COLUMNS = [
  {
    slug: 'nameless-tool-on-a-journey',
    title: '旅先で見つけた、名前のない道具',
    lead: '機能や数字よりも、手に取ったときの空気で選ぶ。その感覚が、この店の品揃えの起点になっています。',
    image: '../pexels-eugenia-remark-5767088-15955862.jpg',
    image_home: './pexels-eugenia-remark-5767088-15955862.jpg',
    excerpt: '旅先の小さな店で見つけた、説明のつかない魅力を持つ道具。その感覚が、余白と湯気の選び方につながっています。',
    body: [
      '旅先の小さな店で、棚の隅にひとつだけ置かれていた。派手ではないし、特別な装飾もない。でも、なぜか目が離せなかった。値札に書かれた説明を読む前に、まず手に取ってみたくなる道具がある。',
      'その道具は、整いすぎていなかった。表面には少しざらつきがあって、輪郭もどこかやわらかい。工業製品のような均一さではなく、手を通って残った微かな揺れがあった。そういう揺れは、不思議と部屋の中で浮かない。むしろ、静かな余白の中に置いたときに、輪郭だけがきれいに残る。',
      '店に並べるものを選ぶとき、わたしたちはまず「便利かどうか」よりも先に、「その物が置かれたときに空気がどう変わるか」を見ています。棚の端に置いたとき、窓辺の光を受けたとき、使っていない時間まで景色として成立するか。その感覚が合うものだけを残しています。',
      '暮らしの道具は、毎回強く主張しなくていいと思っています。使うたびに良さを説明してくるものより、気づけば手が伸びていて、しまわずに出しておけるもののほうが長く残る。そういう道具は、生活を便利にするというより、呼吸の速さを少しだけ整えてくれます。',
      '余白と湯気で扱いたいのは、そういう出会いの延長にあるものです。名前が有名であることや、分かりやすい機能があることではなく、手に取った瞬間に「これなら部屋に置いておける」と思えること。その感覚を信じて、少しずつ集めています。'
    ]
  },
  {
    slug: 'what-makes-a-quiet-desk',
    title: '机の上が静かに見える理由',
    lead: '物を減らすだけではなく、面と余白の作り方を少し変えるだけで、机の景色は落ち着きます。',
    image: '../tukue.jpg',
    image_home: './tukue.jpg',
    excerpt: '散らかりをなくすというより、視線の止まり方を整える。机の上を静かに見せるための小さな考え方。',
    body: [
      '机の上が落ち着いて見えるかどうかは、物の数だけでは決まりません。視線がどこで止まり、どこを抜けるかで、同じ量でも印象は大きく変わります。',
      '細かな物が並ぶときは、トレーや布のような面をひとつ足すだけで、景色が急に整うことがあります。ひとつずつ片づけるよりも、まず小さな面をつくるほうが早い。',
      '白い紙、木のトレー、金属の細い道具。素材が違っていても、高さと余白が揃っていれば、机の上は騒がしくなりません。逆に、良い物だけを置いても、面がばらけると落ち着かない。',
      '整えるとは、きれいに並べることよりも、呼吸を邪魔しない景色に寄せることだと思っています。そのための道具を、余白と湯気では少しずつ集めています。'
    ]
  }
];

window.STORE_PRODUCTS = [
  {
    sku: 'mug',
    name: '陶器のマグ',
    image: '../cup.jpg',
    image_home: './cup.jpg',
    price: '¥3,200',
    category: 'drinkware',
    short_description: '棚にそのまま置いておきたくなる佇まい。少しざらつきのある質感が、使うたび手に馴染む。',
    detail_sections: [
      { title: '手に取ったときの印象', text: '土の気配を残したやわらかな白。縁の厚みと静かな重さが、飲みものの温度をゆっくり受け止めます。' },
      { title: '暮らしの置き場所', text: '朝の机、窓辺、棚の端。使っていない時間も景色を崩しにくいから、しまい込まずに置いておける道具です。' }
    ],
    scenes: ['morning', 'rainy_room'],
    featured: true
  },
  {
    sku: 'glass',
    name: 'シンプルなグラス',
    image: '../grass.jpg',
    image_home: './grass.jpg',
    price: '¥2,400',
    category: 'drinkware',
    short_description: '水にも、アイスコーヒーにも、一輪の花にも。用途を決めすぎないから、毎日手が伸びる。',
    detail_sections: [
      { title: '使い方の余白', text: '薄すぎず、重すぎない。飲みもののためだけではなく、卓上の光を受ける小さな器としてもよく馴染みます。' },
      { title: '置いておいたとき', text: '透明でありながら、輪郭がやわらかいので空間を冷たくしません。窓辺や棚にひとつあるだけで静かな抜けが生まれます。' }
    ],
    scenes: ['morning', 'welcome_shelf'],
    featured: true
  },
  {
    sku: 'tray',
    name: '木製トレー',
    image: '../tray.jpg',
    image_home: './tray.jpg',
    price: '¥4,800',
    category: 'organizers',
    short_description: '好きなものをまとめるトレー。小さなものを並べるだけで、景色が整う。',
    detail_sections: [
      { title: '整えるための面', text: '道具を置くための板ではなく、机の上にもうひとつの静かな面をつくるための道具。湯飲み、鍵、花器が自然にまとまります。' },
      { title: '木の気配', text: '平らな輪郭の中に、木目の揺らぎがやわらかく残ります。無機質な棚や台の上でも温度が少し戻ります。' }
    ],
    scenes: ['morning', 'desk', 'rainy_room', 'welcome_shelf'],
    featured: true
  },
  {
    sku: 'linen_cloth',
    name: 'リネンクロス',
    image: '../pexels-busra-yaman-54874398-23600779.jpg',
    image_home: './pexels-busra-yaman-54874398-23600779.jpg',
    price: '¥2,800',
    category: 'organizers',
    short_description: '敷くだけで空気が変わる。洗うほどやわらかくなるリネンを、机にも棚にも。',
    detail_sections: [
      { title: '布の余白', text: '真っ白ではなく、少しだけ温度を含んだ白。皺も陰影として残るので、きれいに整えすぎなくても風景になります。' },
      { title: '使うほど育つ質感', text: '洗うたびにやわらかくなり、机や棚の硬さを少し和らげます。敷物としても包む布としても使えます。' }
    ],
    scenes: ['morning', 'desk', 'rainy_room', 'welcome_shelf'],
    featured: true
  },
  {
    sku: 'brass_spoon',
    name: '真鍮のスプーン',
    image: '../spoon.jpg',
    image_home: './spoon.jpg',
    price: '¥1,800',
    category: 'organizers',
    short_description: '使い込むほど色が深くなる真鍮。棚の上に置いておくだけで、絵になる。',
    detail_sections: [
      { title: '素材の変化', text: 'はじめは明るく、触れるたび少しずつ深くなる色味。時間が刻まれることで、道具としての表情が落ち着いていきます。' },
      { title: '小さな存在感', text: 'コーヒー豆のそばや陶器の横に置くと、金属の細い光がアクセントになります。使わない時間にも景色を支える道具です。' }
    ],
    scenes: ['desk'],
    featured: true
  },
  {
    sku: 'flower_vase',
    name: '小さな花器',
    image: '../kabin2.jpg',
    image_home: './kabin2.jpg',
    price: '¥3,600',
    category: 'decor',
    short_description: '一輪だけ挿しても成立する、静かな花器。窓辺に置くと、部屋の空気が少しだけ変わる。',
    detail_sections: [
      { title: '余白をつくる器', text: '花を主張させすぎず、机や棚の端に静かな縦の流れをつくります。枝ものや細い一輪がよく似合います。' },
      { title: '小さな景色のために', text: '毎日たくさん飾らなくてもいい。その日拾った枝や、一本だけ残った花を受け止めるための花器です。' }
    ],
    scenes: ['rainy_room', 'welcome_shelf'],
    featured: true
  },
  {
    sku: 'wooden_chair',
    name: '木製の椅子',
    image: '../pexels-cheng-shi-song-427082720-31481784.jpg',
    image_home: './pexels-cheng-shi-song-427082720-31481784.jpg',
    price: '¥12,000',
    category: 'organizers',
    short_description: '壁際や窓辺に置くだけで、空間の重心が静かに整う小ぶりな木製の椅子。',
    detail_sections: [
      { title: '置くための椅子', text: '座るためだけではなく、籠や布、読みかけの本を一時的に受け止めるための道具としても使えます。' },
      { title: '木の輪郭がつくる静けさ', text: '細い背もたれと小さな座面が、部屋の隅に軽い縦線をつくります。家具を増やしすぎずに景色を整えたいときに向いています。' }
    ],
    scenes: ['morning', 'desk', 'rainy_room', 'welcome_shelf'],
    featured: true
  }
];
