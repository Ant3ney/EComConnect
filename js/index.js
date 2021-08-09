class Card {
  eComUrl = null;
  title = null;
  imgUrl = null;
  description = null;
  templateClass = null;
  constructor({ eComUrl, title, imgUrl, description, templateClass } = {}) {
    this.eComUrl = eComUrl;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.templateClass = templateClass;
  }
}

/* 
new Card({
    eComUrl: '',
    title: '',
    imgUrl:
      '',
    description:
      '',
  })
 */

let cards = [
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/265222402752?hash=item3dc07cb2c0:g:nRcAAOSwyc5g5j3f',
    title: 'Regidrago',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/regidrago-gx-custom-pokemon-card-silver-foil-355_530x@2x.jpg?v=1592602296',
    description:
      'Regidrago is a Dragon-type Legendary Pokémon introduced in Generation VIII.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.trollandtoad.com/pokemon/xy-breakpoint-singles/gyarados-ex-123-122-secret-rare/1088305',
    title: 'Gyarados EX - 123/122 - Secret Rare',
    imgUrl:
      'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/10/20/6d662536-3fed-4236-8db7-14c16d08e5c0/shiny-gyarados-pokemon-trading-card-game',
    description:
      'XY: Breakpoint was the 67th expansion of the Pokémon TCG. It was released in February of 2016 and consisted of 123* cards total. Noteworthy cards from XY: Breakpoint include Greninja Break, Luxray Break, M Gyarados EX & M Scizor EX.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/265222402752?hash=item3dc07cb2c0:g:nRcAAOSwyc5g5j3f',
    title: 'Regidrago',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/regidrago-gx-custom-pokemon-card-silver-foil-355_530x@2x.jpg?v=1592602296',
    description:
      'Regidrago is a Dragon-type Legendary Pokémon introduced in Generation VIII.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.trollandtoad.com/pokemon/xy-breakpoint-singles/gyarados-ex-123-122-secret-rare/1088305',
    title: 'Gyarados EX - 123/122 - Secret Rare',
    imgUrl:
      'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/10/20/6d662536-3fed-4236-8db7-14c16d08e5c0/shiny-gyarados-pokemon-trading-card-game',
    description:
      'XY: Breakpoint was the 67th expansion of the Pokémon TCG. It was released in February of 2016 and consisted of 123* cards total. Noteworthy cards from XY: Breakpoint include Greninja Break, Luxray Break, M Gyarados EX & M Scizor EX.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/265222402752?hash=item3dc07cb2c0:g:nRcAAOSwyc5g5j3f',
    title: 'Regidrago',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/regidrago-gx-custom-pokemon-card-silver-foil-355_530x@2x.jpg?v=1592602296',
    description:
      'Regidrago is a Dragon-type Legendary Pokémon introduced in Generation VIII.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.trollandtoad.com/pokemon/xy-breakpoint-singles/gyarados-ex-123-122-secret-rare/1088305',
    title: 'Gyarados EX - 123/122 - Secret Rare',
    imgUrl:
      'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/10/20/6d662536-3fed-4236-8db7-14c16d08e5c0/shiny-gyarados-pokemon-trading-card-game',
    description:
      'XY: Breakpoint was the 67th expansion of the Pokémon TCG. It was released in February of 2016 and consisted of 123* cards total. Noteworthy cards from XY: Breakpoint include Greninja Break, Luxray Break, M Gyarados EX & M Scizor EX.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/265222402752?hash=item3dc07cb2c0:g:nRcAAOSwyc5g5j3f',
    title: 'Regidrago',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/regidrago-gx-custom-pokemon-card-silver-foil-355_530x@2x.jpg?v=1592602296',
    description:
      'Regidrago is a Dragon-type Legendary Pokémon introduced in Generation VIII.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
  new Card({
    eComUrl:
      'https://www.trollandtoad.com/pokemon/xy-breakpoint-singles/gyarados-ex-123-122-secret-rare/1088305',
    title: 'Gyarados EX - 123/122 - Secret Rare',
    imgUrl:
      'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/10/20/6d662536-3fed-4236-8db7-14c16d08e5c0/shiny-gyarados-pokemon-trading-card-game',
    description:
      'XY: Breakpoint was the 67th expansion of the Pokémon TCG. It was released in February of 2016 and consisted of 123* cards total. Noteworthy cards from XY: Breakpoint include Greninja Break, Luxray Break, M Gyarados EX & M Scizor EX.',
  }),
  new Card({
    eComUrl:
      'https://www.ebay.com/itm/402799094814?hash=item5dc8b26c1e:g:q1wAAOSwbGBgfI3u',
    title:
      'PIKACHU V SWSH061 Sword Shield Promo Shining Fates Pokemon Card Near Mint',
    imgUrl: 'https://teamcovenant.com/wp-content/uploads/2019/06/pikachu.jpg',
    description:
      'This listing is for the Pokémon trading card detailed in the item title and shown in the photos.',
  }),
  new Card({
    eComUrl:
      'https://zaba.tv/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-pokemon-card',
    title:
      'The Winged Dragon of Ra GX (Pokemon Yu-Gi-Oh! God Card Crossover) Custom Pokemon Card',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1677/4363/products/the-winged-dragon-of-ra-gx-pokemon-yu-gi-oh-god-card-crossover-custom-875_530x@2x.jpg?v=1615450516',
    description:
      'You are paying for the supplies, and labor to create a custom card using a legal, actual Pokemon card as a canvas for custom made art. These cards are not tournament legal but I do my best to make them playable at home within the current TCG meta.',
  }),
];
