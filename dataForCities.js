const dataForCities = {
  Tokyo: {
    attractions: [{
        name: 'Senso-ji Temple',
        link: 'https://images.unsplash.com/photo-1710005630555-fcccdf10bafe?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Senso-ji Temple is an ancient Buddhist temple located in Asakusa, Tokyo. It is one of Tokyo\'s most colorful and popular temples.',
        location: 'Asakusa, Tokyo',
        openingHours: '6:00 AM - 5:00 PM',
        admissionFee: 'Free'
      },
      {
        name: 'Tokyo Tower',
        link: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Tokyo Tower is a communications and observation tower located in the Shiba-koen district of Minato, Tokyo, Japan.',
        location: 'Minato, Tokyo',
        openingHours: '9:00 AM - 11:00 PM',
        admissionFee: '¥1,200 (Main Deck), ¥3,000 (Top Deck)'
      },
      {
        name: 'Shibuya Crossing',
        link: 'https://images.unsplash.com/photo-1586963312987-3c96f9ace15a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Shibuya Crossing is one of the busiest pedestrian crossings in the world, located in front of the Shibuya Station Hachiko exit.',
        location: 'Shibuya, Tokyo',
        openingHours: '24 hours',
        admissionFee: 'Free'
      }
    ],
    restaurants: [{
        name: 'Sushi Zanmai',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g1066444-d1688797-Reviews-Sushi_Zanmai_Tsukiji_Main_Shop-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html',
        rating: 4.8
      },
      {
        name: 'Ichiran Ramen',
        link: 'https://www.ichiran.com/',
        rating: 4
      },
      {
        name: 'Tempura Kondo',
        link: 'https://www.temporarykondo.com/',
        rating: 4.8
      }
    ],
    shoppingPlaces: [{
        name: 'Ginza Shopping District',
        link: 'https://www.gotokyo.org/en/spot/451/'
      },
      {
        name: 'Takeshita Street (Harajuku)',
        link: 'https://www.gotokyo.org/en/spot/427/'
      },
      {
        name: 'Akihabara Electronics Market',
        link: 'https://www.gotokyo.org/en/spot/84/'
      }
    ]
  },
  Nara: {
    attractions: [{
        name: 'Todai-ji Temple',
        link: 'https://images.unsplash.com/photo-1700489609859-78d5b80ed26f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Todai-ji is a Buddhist temple complex that houses the world\'s largest bronze statue of the Buddha Vairocana.',
        location: 'Nara',
        openingHours: '8:00 AM - 5:00 PM',
        admissionFee: '¥600'
      },
      {
        name: 'Nara Park',
        link: 'https://images.unsplash.com/photo-1698782000509-7d52a624b4a3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Nara Park is a public park located in the city of Nara, Japan, at the foot of Mount Wakakusa.',
        location: 'Nara',
        openingHours: '24 hours',
        admissionFee: 'Free'
      },
      {
        name: 'Kasuga Taisha Shrine',
        link: './assets/Nara3.jpg',
        description: 'Kasuga Grand Shrine is a Shinto shrine in the city of Nara, Japan.',
        location: 'Nara',
        openingHours: '6:00 AM - 5:00 PM',
        admissionFee: '¥500'
      }
    ],
    restaurants: [{
        name: 'Nara Hotel Dining Room',
        link: 'https://www.narahotel.co.jp/en/dining/index.html',
        rating: 4.5
      },
      {
        name: 'Noborioji Hotel Dining',
        link: 'https://www.noborioji.jp/en/dining/',
        rating: 4.8
      },
      {
        name: 'Ajikura',
        link: 'https://www.tripadvisor.com/Restaurant_Review-g298198-d12206393-Reviews-Ajikura-Nara_Nara_Prefecture_Kinki.html',
        rating: 4.3
      }
    ],
    shoppingPlaces: [{
        name: 'Nara-Machi Shopping Street',
        link: 'https://www.gotokyo.org/en/spot/451/'
      },
      {
        name: 'Higashimuki Shopping Street',
        link: 'https://www.gotokyo.org/en/spot/427/'
      },
      {
        name: 'Sanjo-dori Shopping Street',
        link: 'https://www.gotokyo.org/en/spot/84/'
      }
    ]
  },
  Kyoto: {
    attractions: [{
        name: 'Kinkaku-ji Temple',
        link: './assets/Kyoto1.jpg',
        description: 'Kinkaku-ji, officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan.',
        location: 'Kyoto',
        openingHours: '9:00 AM - 5:00 PM',
        admissionFee: '¥400'
      },
      {
        name: 'Fushimi Inari-taisha Shrine',
        link: './assets/Kyoto2.jpg',
        description: 'Fushimi Inari Taisha is the head shrine of the kami Inari, located in Fushimi-ku, Kyoto, Kyoto Prefecture, Japan.',
        location: 'Kyoto',
        openingHours: '24 hours',
        admissionFee: 'Free'
      },
      {
        name: 'Arashiyama Bamboo Grove',
        link: './assets/Kyoto3.jpg',
        description: 'The Arashiyama Bamboo Grove is one of Kyoto\'s top sights and for good reason: standing amid these soaring stalks of bamboo is like being in another world.',
        location: 'Kyoto',
        openingHours: '24 hours',
        admissionFee: 'Free'
      }
    ],
    restaurants: [{
        name: 'Ganko Sushi',
        link: 'https://gankofood.co.jp/en/brand/ganko/',
        rating: 4.6
      },
      {
        name: 'Nishiki Market',
        link: 'https://www.kyoto-nishiki.or.jp/',
        rating: 4.7
      },
      {
        name: 'Kichi Kichi Omurice',
        link: 'https://kichikichi.com/',
        rating: 4.9
      }
    ],
    shoppingPlaces: [{
        name: 'Nishiki Market',
        link: 'https://www.japan-guide.com/e/e3931.html'
      },
      {
        name: 'Teramachi Street',
        link: 'https://www.japan-guide.com/e/e3942.html'
      },
      {
        name: 'Gion Shopping District',
        link: 'https://www.japan-guide.com/e/e3920.html'
      }
    ]
  },
  Hiroshima: {
    attractions: [{
        name: 'Hiroshima Peace Memorial Park',
        link: './assets/Hiroshima1.jpg',
        description: 'Hiroshima Peace Memorial Park is a memorial park in the center of Hiroshima, Japan.',
        location: 'Hiroshima',
        openingHours: '24 hours',
        admissionFee: 'Free'
      },
      {
        name: 'Itsukushima Shrine',
        link: './assets/Hiroshima2.jpg',
        description: 'Itsukushima Shrine is a Shinto shrine on the island of Itsukushima, best known for its "floating" torii gate.',
        location: 'Hiroshima',
        openingHours: '24 hours',
        admissionFee: '¥300'
      },
      {
        name: 'Shukkeien Garden',
        link: './assets/Hiroshima3.jpg',
        description: 'Shukkeien is a historic Japanese garden located in Hiroshima, Japan.',
        location: 'Hiroshima',
        openingHours: '9:00 AM - 5:00 PM',
        admissionFee: '¥260'
      }
    ],
    restaurants: [{
        name: 'Okonomiyaki House',
        link: 'https://www.japan-guide.com/e/e3928.html',
        rating: 4.7
      },
      {
        name: 'Soba Noodle Shop',
        link: 'https://www.japan-guide.com/e/e3931.html',
        rating: 4.5
      },
      {
        name: 'Izakaya Hiroshima',
        link: 'https://www.japan-guide.com/e/e3942.html',
        rating: 4.3
      }
    ],
    shoppingPlaces: [{
        name: 'Hiroshima Hondori',
        link: 'https://www.japan-guide.com/e/e3920.html'
      },
      {
        name: 'Hiroshima Flea Market',
        link: 'https://www.japan-guide.com/e/e3942.html'
      },
      {
        name: 'Hiroshima Orizuru Tower',
        link: 'https://www.japan-guide.com/e/e3906.html'
      }
    ]
  },
  Yokohama: {
    attractions: [{
        name: 'Yokohama Chinatown',
        link: './assets/Yokohama1.jpg',
        description: 'Yokohama Chinatown is Japan\'s largest Chinatown, located in the city of Yokohama.',
        location: 'Yokohama',
        openingHours: '24 hours',
        admissionFee: 'Free'
      },
      {
        name: 'Sankeien Garden',
        link: './assets/Yokohama2.jpg',
        description: 'Sankei-en is a traditional Japanese-style garden in Naka Ward, Yokohama, Japan.',
        location: 'Yokohama',
        openingHours: '9:00 AM - 5:00 PM',
        admissionFee: '¥700'
      },
      {
        name: 'Yokohama Landmark Tower',
        link: './assets/Yokohama3.jpg',
        description: 'Yokohama Landmark Tower is the second tallest building and 4th tallest structure in Japan.',
        location: 'Yokohama',
        openingHours: '10:00 AM - 9:00 PM',
        admissionFee: 'Free to enter, observation deck fee: ¥1,000'
      }
    ],
    restaurants: [{
        name: 'Yokohama Iekei Ramen',
        link: 'https://www.japan-guide.com/e/e3928.html',
        rating: 4.6
      },
      {
        name: 'Yokohama Bay Quater',
        link: 'https://www.japan-guide.com/e/e3931.html',
        rating: 4.7
      },
      {
        name: 'Yokohama Chinatown Restaurant',
        link: 'https://www.japan-guide.com/e/e3942.html',
        rating: 4.3
      }
    ],
    shoppingPlaces: [{
        name: 'Yokohama Motomachi Shopping Street',
        link: 'https://www.japan-guide.com/e/e3920.html'
      },
      {
        name: 'Yokohama Red Brick Warehouse',
        link: 'https://www.japan-guide.com/e/e3942.html'
      },
      {
        name: 'Yokohama Landmark Plaza',
        link: 'https://www.japan-guide.com/e/e3906.html'
      }
    ]
  },
  Osaka: {
    attractions: [{
        name: 'Osaka Castle',
        link: './assets/Osaka1.jpg',
        description: 'Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan.',
        location: 'Osaka',
        openingHours: '9:00 AM - 5:00 PM',
        admissionFee: '¥600'
      },
      {
        name: 'Dotonbori',
        link: './assets/Osaka2.jpg',
        description: 'Dōtonbori is one of the principal tourist destinations in Osaka, Japan, running along the Dōtonbori canal from Dōtonboribashi Bridge to Nipponbashi Bridge in the Namba district of the city\'s Chūō ward.',
        location: 'Osaka',
        openingHours: '24 hours',
        admissionFee: 'Free'
      },
      {
        name: 'Shitennoji Temple',
        link: './assets/Osaka3.jpg',
        description: 'Shitenno-ji is a Buddhist temple in Osaka, Japan. It is sometimes regarded as the first Buddhist and oldest officially administered temple in Japan.',
        location: 'Osaka',
        openingHours: '8:00 AM - 4:00 PM',
        admissionFee: '¥300'
      }
    ],
    restaurants: [{
        name: 'Ichiran Ramen',
        link: 'https://www.japan-guide.com/e/e3928.html',
        rating: 4.8
      },
      {
        name: 'Kuromon Ichiba Market',
        link: 'https://www.japan-guide.com/e/e3931.html',
        rating: 4.7
      },
      {
        name: 'Dotonbori Street Food',
        link: 'https://www.japan-guide.com/e/e3942.html',
        rating: 4.5
      }
    ],
    shoppingPlaces: [{
        name: 'Shinsaibashi Shopping Arcade',
        link: 'https://www.japan-guide.com/e/e3920.html'
      },
      {
        name: 'Namba Parks',
        link: 'https://www.japan-guide.com/e/e3942.html'
      },
      {
        name: 'Tenjinbashi-suji Shopping Street',
        link: 'https://www.japan-guide.com/e/e3906.html'
      }
    ]
  }
};