

export function getProducts(productId) {
  let similar;

  flashSaleProducts.forEach((flashProduct) => {
    if (productId === flashProduct.id) {
      similar = flashProduct
    }
  });

  topSaleProducts.forEach((topProduct) => {
    if (productId === topProduct.id) {
      similar = topProduct
    }
  });

  return similar;
}


export const awoof = [
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/awoof_220x220.png',
    summary: 'Awoof Deals',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/clearance_220x220.png',
    summary: 'Up to 80% Off',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jumia-delivery_220x220.png',
    summary: 'Send Packages Securely',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BOGOFF.jpg',
    summary: 'Buy 2 Pay for 1',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jforce_220x220.png',
    summary: 'Earn While You Shop',
  },
  {
    image: 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/850.jpg',
    summary: 'Unlock Your Deal',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/banga-deals_220x220.png',
    summary: 'Banger Deals',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/sporting-goods_220x220.png',
    summary: 'Sporting Goods',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/video-games_220x220.png',
    summary: 'Video Games',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/toys-games_220x220.png',
    summary: 'Toy & Games',
  },
  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/groceries_220x220.png',
    summary: 'Groceries',
  },
]

export const flashSaleProducts = [
  {
    id: '17',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/4108073/1.jpg?8614',
    name: 'Skyrun 3 Burners',
    price: 166315,
    oldPrice: 197316,
    itemsLeft: 4,

  },

  {
    id: '18',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/1462612/1.jpg?6990',
    name: 'Lontor 18 Inch Rechargable Fan',
    price: 94374,
    oldPrice: 119500,
    itemsLeft: 80,
  },

  {
    id: '19',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/8620814/1.jpg?8545',
    name: 'MTN Ultrafast Router',
    price: 78400,
    oldPrice: 80000,
    itemsLeft: 19,
  },

  {
    id: '20',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9178004/1.jpg?6304',
    name: 'Hisense 20 Litres Microwave',
    price: 80000,
    oldPrice: '',
    itemsLeft: 80,
  },

  {
    id: '21',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/0757773/1.jpg?4818',
    name: 'Skyrun 70 Litres Double Door Fridge',
    price: 173250,
    oldPrice: 210000,
    itemsLeft: 50,
  },

  {
    id: '22',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/8695353/1.jpg?0023',
    name: 'Skyrun 4 Burners',
    price: 144900,
    oldPrice: 146280,
    itemsLeft: 43,
  },

  {
    id: '23',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/0913104/2.jpg?8226',
    name: 'Aeon 90 Litres Chest Freezer',
    price: 178080,
    oldPrice: 211119,
    itemsLeft: 45,
  },

  {
    id: '24',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/2990004/1.jpg?3765',
    name: 'Skyrun 1.5HP Inverter Split Air-Conditioner',
    price: 425250,
    oldPrice: 441000,
    itemsLeft: 4,
  },

  {
    id: '25',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0913104/1.jpg?3819',
    name: 'Aeon 4 Burner',
    price: 133560,
    oldPrice: 142000,
    itemsLeft: 78,
  },

  {
    id: '26',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/0104011/1.jpg?9948',
    name: 'Haeir 1HP Quantum Air-Conditioner ',
    price: 364970,
    oldPrice: 400145,
    itemsLeft: 5,
  },

  {
    id: '27',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/7903114/1.jpg?1380',
    name: 'Hithium HeroEE 2kwh Power Supply Station',
    price: 680000,
    oldPrice: 1400000,
    itemsLeft: 18,
  },

  {
    id: '28',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/4593011/1.jpg?4864',
    name: 'Haeir Thermocool 93 Litres double Door Fridge',
    price: 215889,
    oldPrice: 252865,
    itemsLeft: 13,
  },

  {
    id: '29',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/4990004/1.jpg?6483',
    name: 'Mora 32" Smart HD TV',
    price: 178500,
    oldPrice: 216300,
    itemsLeft: 7,
  },

  {
    id: '30',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/391977/1.jpg?9343',
    name: 'Hisense 1HP Copper Coil Plit Air-Conditioner',
    price: 318800,
    oldPrice: 366316,
    itemsLeft: 4,
  },

  {
    id: '31',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/7080982/1.jpg?3106',
    name: 'HP Elite Book 840 G6 Touch Screen Laptop',
    price: 575000,
    oldPrice: 996041,
    itemsLeft: 47,
  },

  {
    id: '32',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/3796591/1.jpg?0833',
    name: 'LG 40 Watt Bluetooth Sound Bar',
    price: 79999,
    oldPrice: 102470,
    itemsLeft: 5,
  },


]

export const productsCategory = [
  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/image_4.png',
    name: 'Phones and Tablets'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png',
    name: 'TV & Audio'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png',
    name: 'Beauty Must Have'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png',
    name: 'Appliances'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/generators.jpg',
    name: 'Generators & Inverters'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png',
    name: 'Fashion'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg',
    name: 'Home & Office'
  },

  {
    image: 'https://ng.jumia.is/cms/0-5-brand-festival/2025/Brand-Partners/300x300/nivea.jpg',
    name: 'Nivea Store'
  },

  {
    image: 'https://ng.jumia.is/cms/0-5-brand-festival/2025/Brand-Partners/300x300/xiaomi.jpg',
    name: 'Xiaomi Store'
  },

  {
    image: 'https://ng.jumia.is/cms/0-5-brand-festival/2025/Brand-Partners/300x300/itel.jpg',
    name: 'Itel Store'
  },

  {
    image: 'https://ng.jumia.is/cms/0-5-brand-festival/2025/Brand-Partners/300x300/silver-crest.jpg',
    name: 'Silver Crest Store'
  },

  {
    image: 'https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/computing_300x300.png',
    name: 'Computing'
  },
]

export const topSaleProducts = [
  {
    id: '1',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/5566814/1.jpg?0791',
    name: 'Poco C71, 6.88" 3GB RAM',
    price: 89015,
    oldPrice: 93579,
  },

  {
    id: '2',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/2990004/1.jpg?3013',
    name: 'SkyRun 7kg Semi Aitomatic Washing Machine',
    price: 254000,
    oldPrice: ''
  },

  {
    id: '3',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/9080814/1.jpg?9815',
    name: 'SILVER CREST 2L Industrial Food Crusher',
    price: 24691,
    oldPrice: 27036,
  },

  {
    id: '4',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/4294593/1.jpg?9852',
    name: 'Baileys Original Irish Cream',
    price: 17700,
    oldPrice: 19974,
  },

  {
    id: '5',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3789192/1.jpg?5455',
    name: 'Itel 1.83" Sones Smart Watch',
    price: 14900,
    oldPrice: 22278,
  },

  {
    id: '6',
    image: '	https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/4808404/1.jpg?6687',
    name: 'Nivea UV Sunscreen control Cream',
    price: 15355,
    oldPrice: 21840,
  },

  {
    id: '7',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/1433401/1.jpg?8333',
    name: 'Nivea Radient and Beauty Body Lotion',
    price: 8650,
    oldPrice: 11635,
  },

  {
    id: '8',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/1332231/1.jpg?5621',
    name: 'Haeir Thermocool 200 Litres Chest Freezer',
    price: 368848,
    oldPrice: 432400,
  },

  {
    id: '9',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/1149363/1.jpg?4917',
    name: 'Syinix 2.2 Litres Electric Kettle',
    price: 6369,
    oldPrice: '',
  },

  {
    id: '10',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/4640083/1.jpg?1957',
    name: 'Poco C61, 6.71" 3GB RAM',
    price: 84442,
    oldPrice: 112526,
  },

  {
    id: '11',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/0913104/1.jpg?2087',
    name: 'Aeon 5kg Twin Tube Washing Machine',
    price: 157760,
    oldPrice: '',
  },

  {
    id: '12',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/6514162/1.jpg?5772',
    name: 'ECOFLOW River 2 Pro Power Station ',
    price: 536607,
    oldPrice: '1,578,420',
  },

  {
    id: '13',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5281904/1.jpg?4174',
    name: 'HITHIUM 1kwh Power Station',
    price: 227110,
    oldPrice: 216300,
  },

  {
    id: '14',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/0208404/1.jpg?0143',
    name: 'Solitec 18" Standing Fan',
    price: 17500,
    oldPrice: 20058,
  },

  {
    id: '15',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/7080982/1.jpg?3106',
    name: 'HP Elite Book 840 G6 Touch Screen Laptop',
    price: 575000,
    oldPrice: 996041,
    itemsLeft: 47,
  },

  {
    id: '16',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/681138/1.jpg?7934',
    name: 'Martini Fiero Red Sweet Velvet Apertinv',
    price: 5720,
    oldPrice: 6292,
    itemsLeft: 5,
  },


]

