const citiesData = {
  Tokyo: {
    restaurants: [
      { name: "Sushi Zanmai", link: "https://www.supersushi.com.my/" },
      { name: "Ichiran Ramen", link: "https://www.ichiran.com/" },
      { name: "Tempura Kondo", link: "https://tempura-kondo.com/en/" },
    ],
    placesToStay: [
      {
        name: "Park Hyatt Tokyo",
        link: "https://tokyo.park.hyatt.com/en/hotel/home.html",
      },
      {
        name: "Ryokan Asakusa Shigetsu",
        link: "https://www.shigetsu.com/en/index.html",
      },
      {
        name: "Andaz Tokyo Toranomon Hills",
        link: "https://www.hyatt.com/andaz/tyoaz-andaz-tokyo-toranomon-hills",
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
    placesToVisit: [
      { name: "Tokyo Tower", link: "https://en.tokyotower.co.jp/" },
      {
        name: "Senso-ji Temple",
        link: "https://www.japan-guide.com/e/e3001.html",
      },
      {
        name: "Shinjuku Gyoen National Garden",
        link: "https://www.japan-guide.com/e/e3034_001.html",
      },
    ],
  },
  Kyoto: {
    restaurants: [
      { name: "Ganko Sushi", link: "https://www.gankofood.co.jp/en/" },
      {
        name: "Nishiki Market",
        link: "https://www.japan-guide.com/e/e3931.html",
      },
      { name: "Kichi Kichi Omurice", link: "https://kichikichi.com/en/menu/" },
    ],
    placesToStay: [
      { name: "Hotel Granvia Kyoto", link: "https://www.granviakyoto.com/" },
      { name: "Ryokan Ryokufuso", link: "https://ryokufuso.jp/eng/" },
      { name: "Sakura Terrace", link: "https://www.sakuraterrace.jp/en/" },
    ],
    shoppingPlaces: [
      { name: "Teramachi Street", link: "http://www.kyoteramachi.com/en/" },
      {
        name: "Gion Shopping District",
        link: "https://livejapan.com/en/in-kansai/in-pref-kyoto/in-gion_kawaramachi_kiyomizu-dera-temple/article-a2000020/",
      },
      {
        name: "Nishiki Market",
        link: "https://www.japan-guide.com/e/e3931.html",
      },
    ],
    placesToVisit: [
      {
        name: "Kinkaku-ji Temple",
        link: "https://www.japan-guide.com/e/e3908.html",
      },
      {
        name: "Fushimi Inari-taisha Shrine",
        link: "https://www.japan-guide.com/e/e3915.html",
      },
      {
        name: "Arashiyama Bamboo Grove",
        link: "https://www.insidekyoto.com/arashiyama-bamboo-grove",
      },
    ],
  },
  Osaka: {
    restaurants: [
      {
        name: "Ichiran Dotombori",
        link: "https://insideosaka.com/ichiran-dotombori/",
      },
      {
        name: "Kuromon Ichiba Market",
        link: "https://www.japan-guide.com/e/e4031.html",
      },
      {
        name: "Abeno Takoyaki Yamachan",
        link: "https://insideosaka.com/abeno-takoyaki-yamachan/",
      },
    ],
    placesToStay: [
      {
        name: "Hotel New Otani Osaka",
        link: "https://www.newotani.co.jp/en/osaka/",
      },
      {
        name: "Hotel Monterey La Soeur Osaka",
        link: "https://www.hotelmonterey.co.jp/en/lasoeur_osaka/",
      },
      {
        name: "Osaka Marriott Miyako Hotel",
        link: "https://www.marriott.com/en-us/hotels/osamc-osaka-marriott-miyako-hotel/overview/",
      },
    ],
    shoppingPlaces: [
      {
        name: "Shinsaibashi Shopping Street",
        link: "https://insideosaka.com/shinsaibashi-suji-shopping-arcade/",
      },
      {
        name: "Namba Parks",
        link: "https://www.tripadvisor.com/Attraction_Review-g298566-d1189006-Reviews-Namba_Parks-Osaka_Osaka_Prefecture_Kinki.html",
      },
      {
        name: "enjinbashi-suji Shopping Street",
        link: "https://insideosaka.com/tenjinbashi-suji-shopping-street/",
      },
    ],
    placesToVisit: [
      {
        name: "Osaka Castle",
        link: "https://www.japan-guide.com/e/e4000.html",
      },
      {
        name: "Dotonbori",
        link: "https://www.osakastation.com/dotonbori-area-the-bright-heart-of-osaka/",
      },
      {
        name: "Universal Studios Japan",
        link: "https://www.usj.co.jp/web/en/us",
      },
    ],
  },
  Nara: {
    restaurants: [
      {
        name: "Nara Hotel Dining Room",
        link: "https://www.narahotel.co.jp/eng/restaurant/",
      },
      {
        name: "Noborioji Hotel Dining",
        link: "https://www.noborioji.com/en/dining/",
      },
      {
        name: "Ristorante Borgo Konishi",
        link: "https://guide.michelin.com/en/nara-region/nara/restaurant/ristorante-borgo-konishi",
      },
    ],
    placesToStay: [
      { name: "Nara Hotel", link: "https://www.narahotel.co.jp/eng/" },
      {
        name: "Guesthouse Nara Komachi",
        link: "https://www.jp-nara.com/en/property/guesthousekomachi.html",
      },
      {
        name: "The Deer Park Inn",
        link: "https://www.jp-nara.com/en/property/the-deer-park-inn.html",
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
    placesToVisit: [
      {
        name: "Todai-ji Temple",
        link: "https://www.japan-guide.com/e/e4100.html",
      },
      {
        name: "Nara Park",
        link: "hhttps://www.visitnara.jp/destinations/area/nara-park/",
      },
      {
        name: "Kasuga Taisha Shrine",
        link: "https://www.japan-guide.com/e/e4102.html",
      },
    ],
  },
  Hiroshima: {
    restaurants: [
      {
        name: "Okonomiyaki House",
        link: "https://www.tripadvisor.com/Attraction_Review-g298561-d11811641-Reviews-Okonomimura-Hiroshima_Hiroshima_Prefecture_Chugoku.html",
      },
      {
        name: "Soba Noodle Shop",
        link: "https://gurunavi.com/en/y345200/rst/?__ngt__=TT153fcfb5a006ac1e4a59a1lTeLFVCodMPTlATHPrr9BP",
      },
      {
        name: "Hiroshima Shutendoji",
        link: "https://www.tripadvisor.com/Restaurant_Review-g298561-d3208021-Reviews-Hiroshima_Shutendouji-Hiroshima_Hiroshima_Prefecture_Chugoku.html",
      },
    ],
    placesToStay: [
      {
        name: "RIHGA Royal Hotel Hiroshima",
        link: "https://www.rihga.com/hiroshima",
      },
      {
        name: "J-Hoppers Hiroshima Guesthouse",
        link: "https://hiroshima.j-hoppers.com/",
      },
      {
        name: "APA Hotel Hiroshima-Ekimae",
        link: "https://www3.apahotel.com/hotel/chushikoku/hiroshima/hiroshima-ekimae/",
      },
    ],
    shoppingPlaces: [
      { name: "Hiroshima Hondori", link: "https://www.hondori.or.jp/en/" },
      {
        name: "Hiroshima Marina Hop",
        link: "https://dive-hiroshima.com/en/explore/76/",
      },
      {
        name: "Hiroshima Orizuru Tower",
        link: "https://www.orizurutower.jp/en/",
      },
    ],
    placesToVisit: [
      {
        name: "Hiroshima Peace Memorial Park",
        link: "https://www.japan-guide.com/e/e3400.html",
      },
      {
        name: "Itsukushima Shrine",
        link: "https://www.japan-guide.com/e/e3450.html",
      },
      {
        name: "Shukkeien Garden",
        link: "https://www.japan-guide.com/e/e3403.html",
      },
    ],
  },
  Yokohama: {
    restaurants: [
      { name: "Yokohama Iekei Ramen", link: "https://yokohamaiekei.net/" },
      {
        name: "Yokohama Bay Quater",
        link: "https://www.yokohama-bayquarter.com/en/",
      },
      {
        name: "Saiko Shinkan",
        link: "https://www.tripadvisor.com/Restaurant_Review-g298173-d1382596-Reviews-Saiko_Shinkan-Yokohama_Kanagawa_Prefecture_Kanto.html",
      },
    ],
    placesToStay: [
      { name: "Yokohama Bay Hotel Tokyu", link: "https://ybht.co.jp/en/" },
      {
        name: "Hotel New Grand",
        link: "https://www.hotel-newgrand.co.jp/english/",
      },
      {
        name: "The Yokohama Bay Sheraton Hotel & Towers",
        link: "https://www.marriott.com/en-us/hotels/tyoys-yokohama-bay-sheraton-hotel-and-towers/overview/",
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
    placesToVisit: [
      {
        name: "Yokohama Chinatown",
        link: "https://www.japan-guide.com/e/e3201.html",
      },
      {
        name: "Minato Mirai 21",
        link: "https://www.japan-guide.com/e/e3200.html",
      },
      {
        name: "Yamashita Park",
        link: "https://www.japan-guide.com/e/e3204.html",
      },
    ],
  },
};
