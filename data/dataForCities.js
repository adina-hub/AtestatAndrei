const dataForCities = {
  Tokyo: {
    attractions: [
      {
        name: "Tokyo Tower",
        link: "../assets/Tokyo1.jpg",
      },
      {
        name: "Senso-ji Temple",
        link: "../assets/Tokyo2.jpg",
      },
      {
        name: "Shibuya Crossing",
        link: "../assets/Tokyo3.jpg",
      },
    ],
    restaurants: [
      {
        name: "Sushi Zanmai",
        link: "https://www.supersushi.com.my/",
        rating: 4.8,
      },
      {
        name: "Ichiran Ramen",
        link: "https://www.ichiran.com/",
        rating: 4,
      },
      {
        name: "Tempura Kondo",
        link: "https://tempura-kondo.com/en/",
        rating: 4.8,
      },
    ],
    shoppingPlaces: [
      {
        name: "Ginza Shopping District",
        link: "https://www.gotokyo.org/en/spot/451/",
      },
      {
        name: "Takeshita Street (Harajuku)",
        link: "https://www.gotokyo.org/en/spot/48/index.html",
      },
      {
        name: "Akihabara Electronics Market",
        link: "https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-akihabara/article-a0004361/",
      },
    ],
  },
  Kyoto: {
    attractions: [
      {
        name: "Kiyozumi-dera Temple",
        link: "../assets/Kyoto1.jpg",
        description:
          "Kinkaku-ji, officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan.",
        location: "Kyoto",
        openingHours: "9:00 AM - 5:00 PM",
        admissionFee: "¥400",
      },
      {
        name: "Fushimi Inari-taisha Shrine",
        link: "../assets/Kyoto2.jpg",
        description:
          "Fushimi Inari Taisha is the head shrine of the kami Inari, located in Fushimi-ku, Kyoto, Kyoto Prefecture, Japan.",
        location: "Kyoto",
        openingHours: "24 hours",
        admissionFee: "Free",
      },
      {
        name: "Arashiyama Bamboo Grove",
        link: "../assets/Kyoto3.jpg",
        description:
          "The Arashiyama Bamboo Grove is one of Kyoto's top sights and for good reason: standing amid these soaring stalks of bamboo is like being in another world.",
        location: "Kyoto",
        openingHours: "24 hours",
        admissionFee: "Free",
      },
    ],
    restaurants: [
      {
        name: "Ganko Sushi",
        link: "https://www.gankofood.co.jp/en/",
        rating: 4.6,
      },
      {
        name: "Nishiki Market",
        link: "https://www.japan-guide.com/e/e3931.html",
        rating: 4.7,
      },
      {
        name: "Kichi Kichi Omurice",
        link: "https://kichikichi.com/en/menu/",
        rating: 4.9,
      },
    ],
    shoppingPlaces: [
      {
        name: "Nishiki Market",
        link: "https://www.japan-guide.com/e/e3931.html",
      },
      {
        name: "Teramachi Street",
        link: "http://www.kyoteramachi.com/en/",
      },
      {
        name: "Gion Shopping District",
        link: "https://livejapan.com/en/in-kansai/in-pref-kyoto/in-gion_kawaramachi_kiyomizu-dera-temple/article-a2000020/",
      },
    ],
  },
  Osaka: {
    attractions: [
      {
        name: "Osaka Castle",
        link: "../assets/Osaka1.jpg",
      },
      {
        name: "Dotonbori",
        link: "../assets/Osaka2.jpg",
      },
      {
        name: "Shitennoji Temple",
        link: "../assets/Osaka3.jpg",
      },
    ],
    restaurants: [
      {
        name: "Ichiran Dotombori",
        link: "https://insideosaka.com/ichiran-dotombori/",
        rating: 4.8,
      },
      {
        name: "Kuromon Ichiba Market",
        link: "https://www.japan-guide.com/e/e4031.html",
        rating: 4.7,
      },
      {
        name: "Abeno Takoyaki Yamachan",
        link: "https://insideosaka.com/abeno-takoyaki-yamachan/",
        rating: 4.5,
      },
    ],
    shoppingPlaces: [
      {
        name: "Shinsaibashi Shopping Arcade",
        link: "https://insideosaka.com/shinsaibashi-suji-shopping-arcade/",
      },
      {
        name: "Namba Parks",
        link: "https://www.tripadvisor.com/Attraction_Review-g298566-d1189006-Reviews-Namba_Parks-Osaka_Osaka_Prefecture_Kinki.html",
      },
      {
        name: "Tenjinbashi-suji Shopping Street",
        link: "https://insideosaka.com/tenjinbashi-suji-shopping-street/",
      },
    ],
  },
  Nara: {
    attractions: [
      {
        name: "Nara Park",
        link: "../assets/Nara1.jpg",
        description:
          "Nara Park is a public park located in the city of Nara, Japan, at the foot of Mount Wakakusa.",
        location: "Nara",
        openingHours: "24 hours",
        admissionFee: "Free",
      },
      {
        name: "Todai-ji Temple",
        link: "../assets/Nara2.jpg",
        description:
          "Todai-ji is a Buddhist temple complex that houses the world's largest bronze statue of the Buddha Vairocana.",
        location: "Nara",
        openingHours: "8:00 AM - 5:00 PM",
        admissionFee: "¥600",
      },
      {
        name: "Kasuga Taisha Shrine",
        link: "../assets/Nara3.jpg",
        description:
          "Kasuga Grand Shrine is a Shinto shrine in the city of Nara, Japan.",
        location: "Nara",
        openingHours: "6:00 AM - 5:00 PM",
        admissionFee: "¥500",
      },
    ],
    restaurants: [
      {
        name: "Nara Hotel Dining Room",
        link: "https://www.narahotel.co.jp/eng/restaurant/",
        rating: 4.5,
      },
      {
        name: "Noborioji Hotel Dining",
        link: "https://www.noborioji.com/en/dining/",
        rating: 4.8,
      },
      {
        name: "Ristorante Borgo Konishi",
        link: "https://guide.michelin.com/en/nara-region/nara/restaurant/ristorante-borgo-konishi",
        rating: 4.3,
      },
    ],
    shoppingPlaces: [
      {
        name: "Nara-Machi Shopping Street",
        link: "https://www.kanpai-japan.com/nara/naramachi",
      },
      {
        name: "Higashimuki Shopping Street",
        link: "https://www.tripadvisor.com/Attraction_Review-g298198-d7084047-Reviews-Higashimuki_Shopping_Street-Nara_Nara_Prefecture_Kinki.html",
      },
      {
        name: "Sanjo-dori Shopping Mall",
        link: "https://www.gltjp.com/en/directory/item/12307/",
      },
    ],
  },
  Hiroshima: {
    attractions: [
      {
        name: "Hiroshima Castle",
        link: "../assets/Hiroshima1.jpg",
      },
      {
        name: "Itsukushima Shrine",
        link: "../assets/Hiroshima2.jpg",
      },
      {
        name: "Shukkeien Garden",
        link: "../assets/Hiroshima3.jpg",
      },
    ],
    restaurants: [
      {
        name: "Okonomiyaki House",
        link: "https://www.tripadvisor.com/Attraction_Review-g298561-d11811641-Reviews-Okonomimura-Hiroshima_Hiroshima_Prefecture_Chugoku.html",
        rating: 4.7,
      },
      {
        name: "Soba Noodle Shop",
        link: "https://gurunavi.com/en/y345200/rst/?__ngt__=TT153fcfb5a006ac1e4a59a1lTeLFVCodMPTlATHPrr9BP",
        rating: 4.5,
      },
      {
        name: "Hiroshima Shutendoji",
        link: "https://www.tripadvisor.com/Restaurant_Review-g298561-d3208021-Reviews-Hiroshima_Shutendouji-Hiroshima_Hiroshima_Prefecture_Chugoku.html",
        rating: 4.3,
      },
    ],
    shoppingPlaces: [
      {
        name: "Hiroshima Hondori",
        link: "https://www.hondori.or.jp/en/",
      },
      {
        name: "Hiroshima Marina Hop",
        link: "https://dive-hiroshima.com/en/explore/76/",
      },
      {
        name: "Hiroshima Orizuru Tower",
        link: "https://www.orizurutower.jp/en/",
      },
    ],
  },
  Yokohama: {
    attractions: [
      {
        name: "Yokohama Chinatown",
        link: "../assets/Yokohama1.jpg",
        description:
          "Yokohama Chinatown is Japan's largest Chinatown, located in the city of Yokohama.",
        location: "Yokohama",
        openingHours: "24 hours",
        admissionFee: "Free",
      },
      {
        name: "Sankeien Garden",
        link: "../assets/Yokohama2.jpg",
        description:
          "Sankei-en is a traditional Japanese-style garden in Naka Ward, Yokohama, Japan.",
        location: "Yokohama",
        openingHours: "9:00 AM - 5:00 PM",
        admissionFee: "¥700",
      },
      {
        name: "Hakkeijima Sea Paradise",
        link: "../assets/Yokohama3.jpg",
        description:
          "Yokohama Landmark Tower is the second tallest building and 4th tallest structure in Japan.",
        location: "Yokohama",
        openingHours: "10:00 AM - 9:00 PM",
        admissionFee: "Free to enter, observation deck fee: ¥1,000",
      },
    ],
    restaurants: [
      {
        name: "Yokohama Iekei Ramen",
        link: "https://yokohamaiekei.net/",
        rating: 4.6,
      },
      {
        name: "Yokohama Bay Quater",
        link: "https://www.yokohama-bayquarter.com/en/",
        rating: 4.7,
      },
      {
        name: "Saiko Shinkan",
        link: "https://www.tripadvisor.com/Restaurant_Review-g298173-d1382596-Reviews-Saiko_Shinkan-Yokohama_Kanagawa_Prefecture_Kanto.html",
        rating: 4.3,
      },
    ],
    shoppingPlaces: [
      {
        name: "Yokohama Motomachi Shopping Street",
        link: "https://www.yokohamastation.com/yokohama-motomachi-shopping-street/",
      },
      {
        name: "Yokohama Red Brick Warehouse",
        link: "https://www.japan.travel/en/spot/1598/",
      },
      {
        name: "Yokohama Landmark Plaza",
        link: "https://www.yokohamajapan.com/things-to-do/detail.php?bbid=781",
      },
    ],
  },

};
