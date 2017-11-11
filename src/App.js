import React, { Component } from 'react';
import './App.css';
import Shop from './components/Shop';
import Loading from './components/Loading';
import Failed from './components/Failed';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      activeShopId: null,
    }
  }

  componentDidMount() {
    // const shops_api_url = 'https://discounts-ua.herokuapp.com/api/shops'
    // 
    // fetch(shops_api_url)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw Error('Network request failed')
    //     }
    //     return response
    //   })
    //   .then(data => data.json())
    //   .then(data => {
    //     this.setState({
    //       shops: data
    //     })
    //   }, () => {
    //     this.setState({
    //       requestFailed: true
    //     })
    //   })
    this.setState({
      "shops": [
        {
          "id": 1,
          "name":"ATB",
          "discount_types":[
            {
              "name":"Economy",
              "active_period":{
                "start_date": "2017-11-01T00:00:00.000Z",
                "end_date": "2017-11-07T00:00:00.000Z",
                "discounts":[
                  {
                    "name":"Средство моющее синтетическое порошковое Био + кислород, ручная стирка ТМ «Розумний вибір» - 350 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/e/8/c/d/d/e8cdd3c43a4220ba878adb127d781a72.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/e/8/c/d/d/e8cdd3c43a4220ba878adb127d781a72.jpg",
                    "price_new":8.5,
                    "price_old":8.5
                  },
                  {
                    "name":"Средство моющее синтетическое порошковое Жемчужины Свежести, автомат ТМ «Розумний вибір» - 350 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/c/0/4/d/a/c04da9ed1fdd34ddc70912ab8a66667d.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/c/0/4/d/a/c04da9ed1fdd34ddc70912ab8a66667d.jpg",
                    "price_new":9.0,
                    "price_old":9.0
                  },
                  {
                    "name":"Чай Buket, чёрный ТМ «Azercay» - 100 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/e/2/0/c/8/e20c88f1c12579887552f1e5a46ad943.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/e/2/0/c/8/e20c88f1c12579887552f1e5a46ad943.jpg",
                    "price_new":22.6,
                    "price_old":34.9
                  },
                  {
                    "name":"Сыр плавленый «Дружба», 55% ТМ «Золотий резерв» - 90 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/8/b/a/7/0/8ba70f7cd9efc9021f1c43633aa33670.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/8/b/a/7/0/8ba70f7cd9efc9021f1c43633aa33670.jpg",
                    "price_new":8.3,
                    "price_old":12.3
                  },
                  {
                    "name":"Средство моющее синтетическое порошковое для всех типов стиральных машин, Lenor touch/Color/Детский 2,4 кг ТМ «Tіde»",
                    "img_url":"http://www.atbmarket.com/attachments/product/e/6/4/a/5/e64a58dae1322b46cd60db4fb8b18283.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/e/6/4/a/5/e64a58dae1322b46cd60db4fb8b18283.jpg",
                    "price_new":94.95,
                    "price_old":138.95
                  },
                  {
                    "name":"Колбаса «Салями Премиум», п/к ТМ «Добров» - 320 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/4/6/9/7/c/4697c257150fa5989e393df9b7b25d27.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/4/6/9/7/c/4697c257150fa5989e393df9b7b25d27.jpg",
                    "price_new":42.9,
                    "price_old":60.9
                  },
                  {
                    "name":"Изделие мясосодержащее «Молодёжная», варёное ТМ «Ковбасний ряд» - 550 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/7/f/2/1/0/7f2105d18798dfa7a54aa4bc6ee9df1b.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/7/f/2/1/0/7f2105d18798dfa7a54aa4bc6ee9df1b.jpg",
                    "price_new":25.9,
                    "price_old":36.9
                  },
                  {
                    "name":"Йогурт Клубника-земляника/Персик-абрикос/ тропический микс, 2,5% ТМ «Чудо» - 270 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/f/c/b/5/6/fcb561146c6e969941bad225c6602082.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/f/c/b/5/6/fcb561146c6e969941bad225c6602082.jpg",
                    "price_new":8.6,
                    "price_old":12.3
                  },
                  {
                    "name":"Корм Cat \u0026 Go, консервы для кошек с мясом птицы, дичью и морковью/ с говядиной/с мясом птицы/с мясом кролика/с рыбой ТМ «Своя Лінія» - 415 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/9/0/9/6/c/9096c8aa5a99082543e84889b45c489f.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/9/0/9/6/c/9096c8aa5a99082543e84889b45c489f.jpg",
                    "price_new":11.9,
                    "price_old":16.9
                  },
                  {
                    "name":"Икра из кабачков «Летняя» ТМ «Своя Лінія» - 460 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/d/2/b/e/5d2be02e3fbb0cfa4972e02d0932582a.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/d/2/b/e/5d2be02e3fbb0cfa4972e02d0932582a.jpg",
                    "price_new":12.4,
                    "price_old":16.5
                  },
                  {
                    "name":"Средство моющее для посуды Нежные руки, Чайное дерево и мята/ сочный лимон, 0,5 л ТМ «Fairy»",
                    "img_url":"http://www.atbmarket.com/attachments/product/b/5/a/a/3/b5aa3e9d05de9bfc8c4e11c5fc691d80.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/b/5/a/a/3/b5aa3e9d05de9bfc8c4e11c5fc691d80.jpg",
                    "price_new":18.45,
                    "price_old":23.55
                  },
                  {
                    "name":"Прокладки ежедневные Camomile Comfort Plus, 50 шт. ТМ «Naturella»",
                    "img_url":"http://www.atbmarket.com/attachments/product/2/7/4/3/c/2743c818466325a84e2d74338b232649.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/2/7/4/3/c/2743c818466325a84e2d74338b232649.jpg",
                    "price_new":34.95,
                    "price_old":44.95
                  },
                  {
                    "name":"Дезодорант Whitewater/Wolfthorn твёрдый, мужской, 50 мл ТМ «Old Spice»",
                    "img_url":"http://www.atbmarket.com/attachments/product/a/5/f/3/8/a5f3872be432b3d2e1053f522b2d4b35.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/a/5/f/3/8/a5f3872be432b3d2e1053f522b2d4b35.jpg",
                    "price_new":41.95,
                    "price_old":52.95
                  },
                  {
                    "name":"Прокладки гигиенические Ultra Camomile Normal, 10 шт. Ultra Camomile Night, 7 шт. TM «Naturella»",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/6/a/6/7/56a679364b05411f55be0613ad3fe4a6.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/6/a/6/7/56a679364b05411f55be0613ad3fe4a6.jpg",
                    "price_new":18.95,
                    "price_old":22.3
                  },
                  {
                    "name":"Сухие завтраки Musli шоколадные с мёдом ТМ «Start» - 375 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/3/9/2/a/4/392a44e56c2e3a3b59ee32dbe01c7671.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/3/9/2/a/4/392a44e56c2e3a3b59ee32dbe01c7671.jpg",
                    "price_new":18.7,
                    "price_old":30.95
                  },
                  {
                    "name":"Шоколад Gold Молочный с целыми лесными орехами/ молочный с миндалем/Черный с целыми лесными орехами ТМ «Millennium» - 100 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/0/8/b/a/f/08baf01e33d8428caf79913570edcee3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/0/8/b/a/f/08baf01e33d8428caf79913570edcee3.jpg",
                    "price_new":22.3,
                    "price_old":25.8
                  },
                  {
                    "name":"Кофе Espresso жареный в зернах/ натуральный жареный молотый ТМ «Jardin» - 250 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/c/7/f/d/8/c7fd8dde221cfedbba13c248d0cf2be6.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/c/7/f/d/8/c7fd8dde221cfedbba13c248d0cf2be6.jpg",
                    "price_new":65.95,
                    "price_old":77.8
                  },
                  {
                    "name":"Напиток Вкус Ананаса ТМ «Біола» - 2 л",
                    "img_url":"http://www.atbmarket.com/attachments/product/1/b/1/0/0/1b100f7fd318dac359ba6cda1620d6fc.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/1/b/1/0/0/1b100f7fd318dac359ba6cda1620d6fc.jpg",
                    "price_new":12.5,
                    "price_old":14.75
                  },
                  {
                    "name":"Конфеты Choco Crazy с шоколадной глазурью ТМ «Рошен» - 198 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/f/6/c/7/f/f6c7f57697e004df7702b55db5fc958e.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/f/6/c/7/f/f6c7f57697e004df7702b55db5fc958e.jpg",
                    "price_new":14.95,
                    "price_old":16.95
                  },
                  {
                    "name":"Йогурт Турецкий, 10% ТМ «Яготинський» - 300 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/a/d/2/f/5ad2f79e6513ea2e62af92cf8f340923.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/a/d/2/f/5ad2f79e6513ea2e62af92cf8f340923.jpg",
                    "price_new":15.45,
                    "price_old":17.95
                  },
                  {
                    "name":"Йогурт Клубника, 1,5% ТМ «Лактонія» - 870 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/f/c/2/7/2/fc2725e5aeaf361a08d82d342c99b750.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/f/c/2/7/2/fc2725e5aeaf361a08d82d342c99b750.jpg",
                    "price_new":26.55,
                    "price_old":29.7
                  },
                  {
                    "name":"Печенье Золотое кольцо ТМ «Житомирські ласощі» - 215 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/6/6/0/7/a/6607a53750592d59cf6d6fa35d086d40.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/6/6/0/7/a/6607a53750592d59cf6d6fa35d086d40.jpg",
                    "price_new":7.9,
                    "price_old":8.95
                  },
                ]
              }
            },
            {
              "name":"Price of the week",
              "active_period":{
                "start_date": "2017-11-01T00:00:00.000Z",
                "end_date": "2017-11-07T00:00:00.000Z",
                "discounts":[
                  {
                    "name":"Ветчина Куриная, варёная ТМ «Своя Лінія» - 500 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/d/0/7/5/5/d07558e0a9d07eea6bb86930cab1d4b8.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/d/0/7/5/5/d07558e0a9d07eea6bb86930cab1d4b8.jpg",
                    "price_new":39.95,
                    "price_old":46.95
                  },
                  {
                    "name":"Рыбные палочки «Любо есть» в панировке ТМ «Vici» - 250 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/2/6/9/4/5269419dd9690becb6f701364eca3358.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/2/6/9/4/5269419dd9690becb6f701364eca3358.jpg",
                    "price_new":21.95,
                    "price_old":25.95
                  },
                  {
                    "name":"Майонезный соус Деликатесный, 28% ТМ «Торчин» - 160 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/9/7/d/d/c/97ddcc1d852ab41477da0295a34dc378.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/9/7/d/d/c/97ddcc1d852ab41477da0295a34dc378.jpg",
                    "price_new":4.7,
                    "price_old":5.6
                  },
                  {
                    "name":"Сыр твёрдый Российский/ Сметанковый 50% ТМ «Ферма» - 180 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/1/a/1/6/9/1a1698cde767ee990de9cb6a6b5a2c07.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/1/a/1/6/9/1a1698cde767ee990de9cb6a6b5a2c07.jpg",
                    "price_new":29.3,
                    "price_old":34.5
                  },
                  {
                    "name":"Сыр плавленый с Беконом/с Грибами ТМ «Звени Гора» - 90 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/8/1/f/a/4/81fa44ee0e20c67685b6ffa563c6f3f3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/8/1/f/a/4/81fa44ee0e20c67685b6ffa563c6f3f3.jpg",
                    "price_new":11.35,
                    "price_old":12.6
                  },
                  {
                    "name":"Средство для стирки жидкое Power Gel Цвет универсальное концентрированное ТМ «Rex» - 1,32 л",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/0/d/4/7/50d47acfa995b9aa5146a6a966d6b75a.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/0/d/4/7/50d47acfa995b9aa5146a6a966d6b75a.jpg",
                    "price_new":68.9,
                    "price_old":95.6
                  },
                  {
                    "name":"Колготки женские Classic pantyhose 40 ден ТМ «Своя Лінія» - р.2/3/4/5",
                    "img_url":"http://www.atbmarket.com/attachments/product/a/c/6/1/2/ac61207aa2639a63e314fb86a81ab842.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/a/c/6/1/2/ac61207aa2639a63e314fb86a81ab842.jpg",
                    "price_new":22.7,
                    "price_old":27.95
                  },
                  {
                    "name":"Дезодорант Dark Temptation/ You мужской ТМ «Axe» - 150 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/7/1/c/a/d/71cad41694e9b28ddb8952413a9e34bb.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/7/1/c/a/d/71cad41694e9b28ddb8952413a9e34bb.jpg",
                    "price_new":37.95,
                    "price_old":47.95
                  },
                  {
                    "name":"Гель/Паста зубная Total 12 профессиональная чистка ТМ «Colgate» - 75 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/a/9/8/b/0/a98b0b1eedaeca00f5c71e48bdc8837d.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/a/9/8/b/0/a98b0b1eedaeca00f5c71e48bdc8837d.jpg",
                    "price_new":38.95,
                    "price_old":48.95
                  },
                  {
                    "name":"Крем Creme для ухода за кожей универсальный ТМ «Nivea» - 75 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/c/8/6/7/3/c8673ace88163763f8ce28b36b6b64cc.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/c/8/6/7/3/c8673ace88163763f8ce28b36b6b64cc.jpg",
                    "price_new":30.55,
                    "price_old":35.95
                  },
                  {
                    "name":"Средство моющее синтетическое порошковое Color\u0026Style/Белая роза, automat ТМ «Ariel» - 1,5 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/f/c/9/a/c/fc9acc74035b07731de4e7cff5a27953.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/f/c/9/a/c/fc9acc74035b07731de4e7cff5a27953.jpg",
                    "price_new":79.95,
                    "price_old":113.95
                  },
                  {
                    "name":"Крупа гречневая ядрица непропаренная 1 сорт ТМ «Своя Лінія» - 1 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/7/e/0/e/5/7e0e540bbe7cb1cbe9be1372c2bb3ea3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/7/e/0/e/5/7e0e540bbe7cb1cbe9be1372c2bb3ea3.jpg",
                    "price_new":31.95,
                    "price_old":34.95
                  },
                  {
                    "name":"Крупа пшеничная, Полтавская №3, 4х125г ТМ «Своя Лінія» - 0,5 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/e/5/e/d/7/e5ed75e790d5eb9eb2016d3f53859697.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/e/5/e/d/7/e5ed75e790d5eb9eb2016d3f53859697.jpg",
                    "price_new":8.9,
                    "price_old":9.95
                  },
                  {
                    "name":"Приправа куриная/12 овощей и трав ТМ «Роллтон» - 80 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/0/6/9/1/b/0691b34c36b55fbfd2b70b34e6c4c6f3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/0/6/9/1/b/0691b34c36b55fbfd2b70b34e6c4c6f3.jpg",
                    "price_new":4.3,
                    "price_old":4.95
                  }
                ]
              }
            }
          ]
        },
        {
          "id": 2,
          "name":"Silpo",
          "discount_types":[
            {
              "name":"Price of the week",
              "active_period":{
                "start_date": "2017-11-01T00:00:00.000Z",
                "end_date": "2017-11-07T00:00:00.000Z",
                "discounts":[
                  {
                    "name":"Ветчина Куриная, варёная ТМ «Своя Лінія» - 500 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/d/0/7/5/5/d07558e0a9d07eea6bb86930cab1d4b8.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/d/0/7/5/5/d07558e0a9d07eea6bb86930cab1d4b8.jpg",
                    "price_new":39.95,
                    "price_old":46.95
                  },
                  {
                    "name":"Рыбные палочки «Любо есть» в панировке ТМ «Vici» - 250 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/2/6/9/4/5269419dd9690becb6f701364eca3358.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/2/6/9/4/5269419dd9690becb6f701364eca3358.jpg",
                    "price_new":21.95,
                    "price_old":25.95
                  },
                  {
                    "name":"Майонезный соус Деликатесный, 28% ТМ «Торчин» - 160 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/9/7/d/d/c/97ddcc1d852ab41477da0295a34dc378.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/9/7/d/d/c/97ddcc1d852ab41477da0295a34dc378.jpg",
                    "price_new":4.7,
                    "price_old":5.6
                  },
                  {
                    "name":"Сыр твёрдый Российский/ Сметанковый 50% ТМ «Ферма» - 180 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/1/a/1/6/9/1a1698cde767ee990de9cb6a6b5a2c07.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/1/a/1/6/9/1a1698cde767ee990de9cb6a6b5a2c07.jpg",
                    "price_new":29.3,
                    "price_old":34.5
                  },
                  {
                    "name":"Сыр плавленый с Беконом/с Грибами ТМ «Звени Гора» - 90 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/8/1/f/a/4/81fa44ee0e20c67685b6ffa563c6f3f3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/8/1/f/a/4/81fa44ee0e20c67685b6ffa563c6f3f3.jpg",
                    "price_new":11.35,
                    "price_old":12.6
                  },
                  {
                    "name":"Средство для стирки жидкое Power Gel Цвет универсальное концентрированное ТМ «Rex» - 1,32 л",
                    "img_url":"http://www.atbmarket.com/attachments/product/5/0/d/4/7/50d47acfa995b9aa5146a6a966d6b75a.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/5/0/d/4/7/50d47acfa995b9aa5146a6a966d6b75a.jpg",
                    "price_new":68.9,
                    "price_old":95.6
                  },
                  {
                    "name":"Колготки женские Classic pantyhose 40 ден ТМ «Своя Лінія» - р.2/3/4/5",
                    "img_url":"http://www.atbmarket.com/attachments/product/a/c/6/1/2/ac61207aa2639a63e314fb86a81ab842.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/a/c/6/1/2/ac61207aa2639a63e314fb86a81ab842.jpg",
                    "price_new":22.7,
                    "price_old":27.95
                  },
                  {
                    "name":"Дезодорант Dark Temptation/ You мужской ТМ «Axe» - 150 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/7/1/c/a/d/71cad41694e9b28ddb8952413a9e34bb.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/7/1/c/a/d/71cad41694e9b28ddb8952413a9e34bb.jpg",
                    "price_new":37.95,
                    "price_old":47.95
                  },
                  {
                    "name":"Гель/Паста зубная Total 12 профессиональная чистка ТМ «Colgate» - 75 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/a/9/8/b/0/a98b0b1eedaeca00f5c71e48bdc8837d.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/a/9/8/b/0/a98b0b1eedaeca00f5c71e48bdc8837d.jpg",
                    "price_new":38.95,
                    "price_old":48.95
                  },
                  {
                    "name":"Крем Creme для ухода за кожей универсальный ТМ «Nivea» - 75 мл",
                    "img_url":"http://www.atbmarket.com/attachments/product/c/8/6/7/3/c8673ace88163763f8ce28b36b6b64cc.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/c/8/6/7/3/c8673ace88163763f8ce28b36b6b64cc.jpg",
                    "price_new":30.55,
                    "price_old":35.95
                  },
                  {
                    "name":"Средство моющее синтетическое порошковое Color\u0026Style/Белая роза, automat ТМ «Ariel» - 1,5 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/f/c/9/a/c/fc9acc74035b07731de4e7cff5a27953.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/f/c/9/a/c/fc9acc74035b07731de4e7cff5a27953.jpg",
                    "price_new":79.95,
                    "price_old":113.95
                  },
                  {
                    "name":"Крупа гречневая ядрица непропаренная 1 сорт ТМ «Своя Лінія» - 1 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/7/e/0/e/5/7e0e540bbe7cb1cbe9be1372c2bb3ea3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/7/e/0/e/5/7e0e540bbe7cb1cbe9be1372c2bb3ea3.jpg",
                    "price_new":31.95,
                    "price_old":34.95
                  },
                  {
                    "name":"Крупа пшеничная, Полтавская №3, 4х125г ТМ «Своя Лінія» - 0,5 кг",
                    "img_url":"http://www.atbmarket.com/attachments/product/e/5/e/d/7/e5ed75e790d5eb9eb2016d3f53859697.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/e/5/e/d/7/e5ed75e790d5eb9eb2016d3f53859697.jpg",
                    "price_new":8.9,
                    "price_old":9.95
                  },
                  {
                    "name":"Приправа куриная/12 овощей и трав ТМ «Роллтон» - 80 г",
                    "img_url":"http://www.atbmarket.com/attachments/product/0/6/9/1/b/0691b34c36b55fbfd2b70b34e6c4c6f3.jpg",
                    "small_img_url":"http://www.atbmarket.com/attachments/product/0/6/9/1/b/0691b34c36b55fbfd2b70b34e6c4c6f3.jpg",
                    "price_new":4.3,
                    "price_old":4.95
                  }
                ]
              }
            }
          ]
        }
      ],
      activeShopId: 1
    })
  }

  updateActiveShop(shopId) {
    this.setState({activeShopId: shopId})
  }

  render() {
    if (this.state.requestFailed) return <Failed />
    if (!this.state.shops) return <Loading />

    const shopNames = this.state.shops.map((shop) =>
      <div className={"MenuShop" + (shop.id == this.state.activeShopId ? " MenuShopActive" : "")}
           onClick={() => this.updateActiveShop(shop.id)}>
        {shop.name}
      </div>
    )
    const activeShop = this.state.shops.find((shop) => shop.id == this.state.activeShopId)

    return (
      <div className="App">
        <div className="Menu">
          <div className="Brand">Discounts UA</div>
          <div className="MenuShopNames">{shopNames}</div>
        </div>
        <Shop {...activeShop} />
      </div>
    );
  }
}

export default App;
