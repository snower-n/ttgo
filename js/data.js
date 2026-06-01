(function () {
  var base = {
    dayTours: [
      { id: 'fuji', title: '富士山五合目 · 河口湖一日游', region: '东京出发', price: '¥3,800起/车', duration: '约10小时', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80', summary: '打卡富士山经典机位，河口湖漫步，可选忍野八海或奥特莱斯。', highlights: ['富士山五合目', '河口湖', '可选忍野八海'], itinerary: [{ time: '08:00', text: '酒店接客（东京23区内）' }, { time: '10:30', text: '富士山五合目（视天气开放）' }, { time: '12:00', text: '河口湖午餐、湖畔拍照' }, { time: '14:30', text: '忍野八海或山中湖（二选一）' }, { time: '18:00', text: '送回酒店' }], includes: ['中文司导', '包车及油费', '高速费（按约定）'], notes: '五合目冬季可能封路，将改访山中湖等景点。' },
      { id: 'kamakura', title: '镰仓 · 江之岛一日游', region: '东京出发', price: '¥3,500起/车', duration: '约9小时', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80', summary: '大佛、鹤冈八幡宫、江之电体验，湘南海岸浪漫一日。', highlights: ['镰仓大佛', '鹤冈八幡宫', '江之岛'], itinerary: [{ time: '08:30', text: '酒店接客' }, { time: '10:00', text: '鹤冈八幡宫、小町通' }, { time: '11:30', text: '镰仓大佛' }, { time: '13:00', text: '江之电体验、午餐' }, { time: '15:00', text: '江之岛展望台' }, { time: '18:00', text: '返回东京' }], includes: ['中文司导', '包车及油费'], notes: '江之电车票需自理，可协助购票。' },
      { id: 'disney', title: '东京迪士尼乐园接送一日游', region: '东京', price: '¥2,800起/车', duration: '灵活', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', summary: '酒店往返迪士尼，早晚接送，园内自由活动，省心带娃首选。', highlights: ['专车接送', '时间灵活', '行李无忧'], itinerary: [{ time: '可选', text: '早场：约 07:30 酒店出发' }, { time: '全天', text: '迪士尼乐园自由活动' }, { time: '可选', text: '晚场：闭园后接回酒店（约 21:00）' }], includes: ['往返接送', '中文司导等候'], notes: '乐园门票需自行购买，可协助官网购票指引。' },
      { id: 'nara-kyoto', title: '奈良 · 京都经典一日游', region: '大阪/京都出发', price: '¥4,200起/车', duration: '约10小时', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c2e?w=800&q=80', summary: '喂鹿奈良公园、东大寺，清水寺、伏见稻荷，感受千年古都。', highlights: ['奈良公园', '清水寺', '伏见稻荷大社'], itinerary: [{ time: '08:00', text: '大阪或京都酒店接客' }, { time: '09:30', text: '奈良公园、东大寺' }, { time: '12:00', text: '前往京都午餐' }, { time: '14:00', text: '清水寺、二年坂三年坂' }, { time: '16:00', text: '伏见稻荷大社（千本鸟居）' }, { time: '19:00', text: '送回酒店' }], includes: ['中文司导', '包车及油费'], notes: '樱花季与红叶季建议提前预约。' },
      { id: 'hakone', title: '箱根温泉 · 芦之湖一日游', region: '东京出发', price: '¥4,000起/车', duration: '约10小时', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', summary: '海盗船、大涌谷黑鸡蛋、可选温泉旅馆午餐，放松身心。', highlights: ['芦之湖', '大涌谷', '箱根神社'], itinerary: [{ time: '08:00', text: '东京接客' }, { time: '10:30', text: '大涌谷、黑鸡蛋体验' }, { time: '12:30', text: '芦之湖海盗船（船票自理）' }, { time: '14:30', text: '箱根神社' }, { time: '16:00', text: '可选温泉或下午茶' }, { time: '18:30', text: '返回东京' }], includes: ['中文司导', '包车及油费'], notes: '登山缆车与游船票不含，司导可代买。' },
      { id: 'tokyo-city', title: '东京市区经典一日游', region: '东京', price: '¥3,200起/车', duration: '约8小时', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80', summary: '浅草寺、皇居外苑、银座、东京塔或晴空塔，初次访日必选。', highlights: ['浅草寺', '银座', '东京塔/晴空塔'], itinerary: [{ time: '09:00', text: '酒店接客' }, { time: '09:30', text: '浅草寺、仲见世商店街' }, { time: '11:00', text: '皇居外苑、二重桥' }, { time: '12:30', text: '银座午餐与购物' }, { time: '15:00', text: '东京塔或晴空塔（二选一）' }, { time: '17:30', text: '送回酒店' }], includes: ['中文司导', '包车及油费'], notes: '行程可根据购物、美食偏好调整。' }
    ],
    multiDayTours: [
      { id: 'kansai', title: '关西深度 5 日游', region: '大阪进出', price: '¥18,800起', duration: '5天4晚', image: 'https://images.unsplash.com/photo-1524413840809-829c493e8141?w=800&q=80', summary: '大阪、京都、奈良、神户，一次玩透关西精华，全程包车不换车。', highlights: ['大阪城', '京都古寺', '奈良喂鹿', '神户夜景'], itinerary: [{ time: 'D1', text: '抵达大阪 · 接机 · 道顿堀美食' }, { time: 'D2', text: '大阪城、环球影城（可选）或购物' }, { time: 'D3', text: '京都：清水寺、金阁寺、岚山' }, { time: 'D4', text: '奈良、宇治抹茶、返回大阪' }, { time: 'D5', text: '神户异人馆、送机' }], includes: ['连续包车', '中文司导', '油费高速（按约定）'], notes: '不含住宿与门票，可代订酒店。' },
      { id: 'hokkaido', title: '北海道自然 6 日游', region: '札幌进出', price: '¥24,500起', duration: '6天5晚', image: 'https://images.unsplash.com/photo-1578271884710-63b24df0a0a3?w=800&q=80', summary: '札幌、小樽、富良野、登别温泉，夏季花海冬季雪景皆宜。', highlights: ['小樽运河', '富良野', '登别温泉'], itinerary: [{ time: 'D1', text: '札幌接机 · 狸小路' }, { time: 'D2', text: '小樽运河、八音盒堂' }, { time: 'D3', text: '富良野/美瑛（季节限定）' }, { time: 'D4', text: '旭山动物园或洞爷湖' }, { time: 'D5', text: '登别地狱谷、温泉酒店' }, { time: 'D6', text: '札幌购物 · 送机' }], includes: ['全程包车', '中文司导'], notes: '冬季需防滑链，部分路段可能调整。' },
      { id: 'kyushu', title: '九州风情 4 日游', region: '福冈进出', price: '¥15,600起', duration: '4天3晚', image: 'https://images.unsplash.com/photo-1590559899731-a382839a3da5?w=800&q=80', summary: '福冈博多、熊本城、阿苏火山、别府温泉，南九州精华速览。', highlights: ['熊本城', '阿苏', '别府温泉'], itinerary: [{ time: 'D1', text: '福冈接机 · 博多运河城' }, { time: 'D2', text: '熊本城、阿苏火山（视开放）' }, { time: 'D3', text: '别府八地狱、温泉' }, { time: 'D4', text: '福冈太宰府 · 送机' }], includes: ['全程包车', '中文司导'], notes: '阿苏火山口视天气与管制而定。' },
      { id: 'kanto-kansai', title: '关东关西连线 7 日游', region: '东京进大阪出', price: '¥28,000起', duration: '7天6晚', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', summary: '东京、富士山、京都、大阪一次走遍，适合首次赴日且时间充裕的旅客。', highlights: ['东京', '富士山', '京都', '大阪'], itinerary: [{ time: 'D1', text: '东京接机 · 浅草' }, { time: 'D2', text: '东京市区或迪士尼' }, { time: 'D3', text: '富士山、河口湖' }, { time: 'D4', text: '新干线至京都（票自理）· 清水寺' }, { time: 'D5', text: '京都奈良' }, { time: 'D6', text: '大阪城、心斋桥' }, { time: 'D7', text: '大阪送机' }], includes: ['全程包车（含跨城日）', '中文司导'], notes: 'D4 新干线费用不含，可协助购票。' }
    ]
  };

  function mergeTour(tour, lang) {
    if (lang === 'zh' || !window.TTGO_TOUR_I18N || !TTGO_TOUR_I18N[lang] || !TTGO_TOUR_I18N[lang][tour.id]) {
      return Object.assign({}, tour);
    }
    return Object.assign({}, tour, TTGO_TOUR_I18N[lang][tour.id]);
  }

  function build() {
    var lang = window.TTGO_I18N ? TTGO_I18N.getLang() : 'zh';
    return {
      dayTours: base.dayTours.map(function (t) { return mergeTour(t, lang); }),
      multiDayTours: base.multiDayTours.map(function (t) { return mergeTour(t, lang); })
    };
  }

  var data = build();
  window.TTGO_DATA = data;
  TTGO_DATA.refresh = function () {
    var d = build();
    TTGO_DATA.dayTours = d.dayTours;
    TTGO_DATA.multiDayTours = d.multiDayTours;
  };
})();
