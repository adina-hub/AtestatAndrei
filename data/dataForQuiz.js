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
        link: "https://asakusashigetsu.com/en/",
      },
      {
        name: "Andaz Tokyo Toranomon Hills",
        link: "https://www.hyatt.com/en-US/hotel/japan/andaz-tokyo-toranomon-hills/tyoaz",
      },
    ],
    shoppingPlaces: [
      {
        name: "Ginza Shopping District",
        link: "https://www.gotokyo.org/en/spot/451/",
      },
      {
        name: "Takeshita Street (Harajuku)",
        link: "https://www.gotokyo.org/en/spot/427/",
      },
      {
        name: "Akihabara Electronics Market",
        link: "https://www.gotokyo.org/en/spot/84/",
      },
    ],
    placesToVisit: [
      { name: "Senso-ji Temple", link: "https://www.gotokyo.org/en/spot/1/" },
      { name: "Tokyo Tower", link: "https://www.tokyotower.co.jp/en.html" },
      {
        name: "Shinjuku Gyoen National Garden",
        link: "https://www.gotokyo.org/en/spot/401/",
      },
    ],
  },
  Kyoto: {
    restaurants: [
      { name: "Kichi Kichi Omurice", link: "https://kichi2.net/" },
      { name: "Kyoto Gogyo Ramen", link: "https://gogyo.co.jp/kyoto/" },
      { name: "Nishiki Market", link: "https://www.kyoto-nishiki.or.jp/" },
    ],
    placesToStay: [
      { name: "Hotel Granvia Kyoto", link: "https://granviakyoto.com/" },
      { name: "Ryokan Ryokufuso", link: "http://www.ryokufuso.co.jp/en/" },
      { name: "Sakura Terrace", link: "https://sakuraterrace.com/" },
    ],
    shoppingPlaces: [
      {
        name: "Teramachi Shopping Arcade",
        link: "https://www.kyoto.travel/en/shopping/kyoto_malls_department_stores/103.html",
      },
      {
        name: "Kyoto Handicraft Center",
        link: "https://www.kyotohandicraftcenter.com/",
      },
      {
        name: "Kawaramachi Shopping Street",
        link: "https://www.kyoto.travel/en/shopping/kyoto_malls_department_stores/110.html",
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
        link: "https://www.japan-guide.com/e/e3912.html",
      },
    ],
  },
  Hiroshima: {
    restaurants: [
      {
        name: "Hiroshima-style Okonomiyaki",
        link: "https://www.hiroshimaokonomi.jp/",
      },
      { name: "Sora Shokudo", link: "http://sora-hiroshima.com/" },
      {
        name: "Hiroshima Ramen",
        link: "https://gastroskitchen.com/post/hirokitchi-ramen/",
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
        link: "https://www.apahotel.com/hotel/kansai/10_hiroshima-ekimae/",
      },
    ],
    shoppingPlaces: [
      {
        name: "Hondori Shopping Arcade",
        link: "https://www.hiroshima-navi.or.jp/en/features/hondori.html",
      },
      { name: "Hiroshima Parco", link: "https://www.parco-hiroshima.co.jp/" },
      {
        name: "Hiroshima Flea Market",
        link: "https://www.gotokyo.org/en/spot/1383/index.html",
      },
    ],
    placesToVisit: [
      {
        name: "Hiroshima Peace Memorial Park",
        link: "https://www.pcf.city.hiroshima.jp/top_e.html",
      },
      {
        name: "Itsukushima Shrine",
        link: "https://www.japan-guide.com/e/e3405.html",
      },
      {
        name: "Shukkeien Garden",
        link: "https://www.japan-guide.com/e/e3402.html",
      },
    ],
  },
  Nara: {
    restaurants: [
      {
        name: "Noborioji Hotel Nara",
        link: "https://www.noboriojihotel.com/en/",
      },
      {
        name: "Yamato Sushi Naramachi",
        link: "https://www.tripadvisor.com/Restaurant_Review-g298198-d729450-Reviews-Yamato_Sushi_Naramachi-Nara_Nara_Prefecture_Kinki.html",
      },
      {
        name: "Tamaru",
        link: "https://tabelog.com/en/nara/A2901/A290103/29010294/",
      },
    ],
    placesToStay: [
      { name: "Nara Hotel", link: "https://www.narahotel.co.jp/english/" },
      {
        name: "Guesthouse Nara Komachi",
        link: "https://www.narakomachi.com/en/",
      },
      { name: "The Deer Park Inn", link: "https://www.thedeerparkinn.com/" },
    ],
    shoppingPlaces: [
      {
        name: "Naramachi Koshi-no-Ie",
        link: "http://www.kosinoie-naramachi.com/",
      },
      {
        name: "Higashimuki Shopping Street",
        link: "https://www.visitnara.jp/venues/A00202/",
      },
      {
        name: "Sanjo-dori Shopping Street",
        link: "https://www.visitnara.jp/venues/A00203/",
      },
    ],
    placesToVisit: [
      {
        name: "Todai-ji Temple",
        link: "https://www.japan-guide.com/e/e4100.html",
      },
      { name: "Nara Park", link: "https://www.japan-guide.com/e/e4103.html" },
      {
        name: "Kasuga Taisha Shrine",
        link: "https://www.japan-guide.com/e/e4102.html",
      },
    ],
  },
  Yokohama: {
    restaurants: [
      {
        name: "Shin-Yokohama Ramen Museum",
        link: "https://www.yokohamaramenmuseum.com/",
      },
      {
        name: "Harbor View Restaurant Royal Wing",
        link: "https://www.princehotels.com/en/shin-yokohama/",
      },
      {
        name: "Sky Building Yokohama",
        link: "https://www.princehotels.com/en/skybuildingyokohama/",
      },
    ],
    placesToStay: [
      {
        name: "Yokohama Bay Hotel Tokyu",
        link: "https://www.yokohamabay-hotel.jp/en/",
      },
      { name: "Hotel New Grand", link: "https://www.hotel-newgrand.co.jp/" },
      {
        name: "The Yokohama Bay Sheraton Hotel & Towers",
        link: "https://www.marriott.com/hotels/travel/hndbs-the-yokohama-bay-sheraton-hotel-and-towers/",
      },
    ],
    shoppingPlaces: [
      {
        name: "Motomachi Shopping Street",
        link: "https://www.jnto.go.jp/eng/spot/shopping/motomachi.html",
      },
      {
        name: "Yokohama Red Brick Warehouse",
        link: "https://www.yokohama-akarenga.jp/",
      },
      {
        name: "Yokohama Cosmo World",
        link: "https://www.yokohamajapan.com/things-to-do/yokohama-cosmo-world/",
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
        link: "https://www.yokohamajapan.com/things-to-do/yamashita-park/",
      },
    ],
  },
  Osaka: {
    restaurants: [
      {
        name: "Dotonbori Konamon Museum",
        link: "https://www.konamon.jp/english/",
      },
      {
        name: "Hontsuru",
        link: "https://tabelog.com/en/osaka/A2701/A270202/27010110/",
      },
      {
        name: "Yakumido",
        link: "https://tabelog.com/en/osaka/A2701/A270102/27009369/",
      },
    ],
    placesToStay: [
      {
        name: "Hotel New Otani Osaka",
        link: "https://www.newotani.co.jp/en/osaka/",
      },
      {
        name: "Hotel Monterey La Soeur Osaka",
        link: "https://www.hotelmonterey.co.jp/en/la-soeur/",
      },
      {
        name: "Osaka Marriott Miyako Hotel",
        link: "https://www.marriott.com/hotels/travel/osamc-osaka-marriott-miyako-hotel/",
      },
    ],
    shoppingPlaces: [
      {
        name: "Shinsaibashi Shopping Street",
        link: "https://www.osaka-info.jp/en/page/shinsaibashi",
      },
      {
        name: "Dotonbori Shopping Street",
        link: "https://www.osaka-info.jp/en/page/dotonbori",
      },
      {
        name: "Americamura",
        link: "https://www.osaka-info.jp/en/page/america-mura",
      },
    ],
    placesToVisit: [
      { name: "Osaka Castle", link: "https://www.osakacastle.net/english/" },
      { name: "Dotonbori", link: "https://www.japan-guide.com/e/e4004.html" },
      { name: "Universal Studios Japan", link: "https://www.usj.co.jp/e/" },
    ],
  },
};
