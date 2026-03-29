/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Check,
  XCircle,
  ArrowRight,
  Star,
  Phone,
  Globe,
  Clock,
  MapPin,
  Sparkles,
  HeartHandshake,
  HelpCircle
} from "lucide-react";
import React, { useState } from "react";

type Language = "sc" | "tc" | "en";

const translations = {
  sc: {
    nav: { sc: "简体", tc: "繁體", en: "EN" },
    brand: "慧趣玩",
    hero: {
      tag: "Exclusive China Custom Travel",
      title: "跨越山海，寻根最美中国",
      subtitle: "定制专属您的 新疆·张家界之旅",
      desc: "告别走马观花的跟团游。为新马泰、港澳华人量身打造，1对1资深定制师，包车纯玩，深度体验祖国大好河山。",
      cta: "立即获取免费定制方案",
      whatsapp: "WhatsApp 在线咨询"
    },
    promise: {
      title: "好的定制可以不贵",
      subtitle: "自由 · 省心 · 有保障",
      bullets: ["不必跟团人挤人", "不用费心做攻略"],
      footer: "14年专注定制旅行，4V1专业服务团队，只为给你更好的出国自由行体验。"
    },
    pain: {
      title: "为什么选择定制游？",
      bad_title: "传统旅行团的无奈",
      bad_desc: "起早贪黑赶行程，强制购物进店，团餐千篇一律。长辈体力跟不上，孩子玩不尽兴。",
      good_title: "我们的定制化服务",
      good_desc: "专属包车，随走随停。资深管家1对1服务，行程灵活调整。精选高标酒店，深度品鉴美食。",
      exp: "14年+",
      exp_desc: "专注海外华人定制"
    },
    dest: {
      title: "目的地灵感",
      desc: "您的行程将根据您的兴趣、体力及预算进行1对1深度规划。",
      xj_title: "大美新疆 · 广袤自由",
      xj_desc: "从喀纳斯的湖光山色到独库公路的四季轮转，体验浓郁的异域风情。",
      zjj_title: "奇幻张家界 · 潘多拉星球",
      zjj_desc: "穿梭在三千奇峰之间，漫步玻璃栈道，亲临《阿凡达》取景地。",
      yn_title: "七彩云南 · 慢生活",
      yn_desc: "丽江古城的慵懒，大理苍山的风花雪月，香格里拉的纯净信仰。",
      sc_title: "天府之国 · 绝美川西",
      sc_desc: "九寨沟的童话水景，大熊猫的憨态可掬，稻城亚丁的最后净土。",
      more: "查看定制灵感"
    },
    guarantee: {
      title: "服务保障",
      items: [
        { title: "100% 纯玩", desc: "全程无购物，无隐形消费，把时间留给美景。" },
        { title: "资深管家", desc: "24小时在线服务，随时解决旅途中的任何问题。" },
        { title: "深度体验", desc: "拒绝走马观花，深入当地生活，体验地道风情。" },
        { title: "安全保障", desc: "正规旅游资质，高额保险，专业司机保驾护航。" }
      ]
    },
    faq: {
      title: "常见问题",
      items: [
        { q: "定制游比跟团游贵很多吗？", a: "不一定。我们会根据您的预算合理规划，省去不必要的中间环节，性价比极高。" },
        { q: "海外华人回国旅游需要注意什么？", a: "我们会协助您处理支付（支付宝/微信）、网络、证件等问题，让您无忧出行。" },
        { q: "行程可以临时调整吗？", a: "当然可以。私家定制最大的优势就是灵活，您可以随时与导游协商调整。" }
      ]
    },
    steps: {
      title: "简单三步，开启旅程",
      s1_t: "提交需求",
      s1_d: "填写表单或添加 WhatsApp，告知您的初步想法。",
      s2_t: "1对1规划",
      s2_d: "资深定制师为您规划最合理的路线、酒店与用车。",
      s3_t: "全程无忧",
      s3_d: "VIP 接机，专属司机导游陪同，享受美好时光。"
    },
    form: {
      title: "开启您的寻根之旅",
      desc: "留下联系方式，我们将在 24 小时内提供初步方案。",
      name: "您的姓名",
      contact: "WhatsApp / 微信",
      dest_label: "意向目的地",
      guests: "预计人数",
      needs: "特别需求",
      submit: "提交需求，获取方案",
      privacy: "您的隐私受严格保护。",
      success_title: "提交成功！",
      success_msg: "我们已收到您的信息，定制师将尽快与您取得联系。",
      success_cta: "不想等待？点击直接咨询小鱼"
    },
    footer: {
      desc: "为海外华人提供更省心的中国定制旅行服务，专注中国当地深度游，提供纯玩小团、私家定制、中文沟通无障碍。",
      contact_title: "联系方式",
      email: "邮箱：zou@huiquwan.cn",
      phone: "电话：+86 18174447886",
      address_title: "办公地址",
      address: "新疆乌鲁木齐市经济技术开发区(头屯河区)通达街南一巷206号悦来生活广场3#商业商务楼525室",
      copyright: "© 2026 慧趣玩 HuiQuWan. All Rights Reserved."
    },
    xinjiang: {
      back: "返回首页",
      hero_title: "大美新疆 · 极致定制",
      hero_subtitle: "1/6的中国，无限的可能",
      highlights_title: "必游亮点",
      itinerary_title: "经典路线参考",
      tips_title: "旅行小贴士",
      cta: "定制我的新疆之旅",
      highlights: [
        { title: "喀纳斯", desc: "人间净土，神的后花园。秋季层林尽染，冬季银装素裹。" },
        { title: "赛里木湖", desc: "大西洋最后一滴眼泪。蓝得深邃，纯净得让人心醉。" },
        { title: "独库公路", desc: "纵贯天山脊梁。一天历经四季，十里不同天。" },
        { title: "喀什古城", desc: "不到喀什不算到新疆。体验最浓郁的西域人文风情。" }
      ],
      routes: [
        { name: "北疆大环线 (10-12天)", desc: "乌鲁木齐 - 喀纳斯 - 禾木 - 赛里木湖 - 伊犁草原 - 独库公路" },
        { name: "南疆人文之旅 (8-10天)", desc: "喀什 - 帕米尔高原 - 塔县 - 库车 - 塔克拉玛干沙漠" }
      ]
    }
  },
  tc: {
    nav: { sc: "简体", tc: "繁體", en: "EN" },
    brand: "慧趣玩",
    hero: {
      tag: "Exclusive China Custom Travel",
      title: "跨越山海，尋根最美中國",
      subtitle: "定制專屬您的 新疆·張家界之旅",
      desc: "告別走马看花的跟團遊。為新馬泰、港澳華人量身打造，1對1資深定制師，包車純玩，深度體驗祖國大好河山。",
      cta: "立即獲取免費定制方案",
      whatsapp: "WhatsApp 在線諮詢"
    },
    promise: {
      title: "好的定制可以不貴",
      subtitle: "自由 · 省心 · 有保障",
      bullets: ["不必跟團人擠人", "不用費心做攻略"],
      footer: "14年專注定制旅行，4V1專業服務團隊，只為給你更好的出國自由行體驗。"
    },
    pain: {
      title: "為什麼選擇定制遊？",
      bad_title: "傳統旅行團的無奈",
      bad_desc: "起早貪黑趕行程，強制購物進店，團餐千篇一律。長輩體力跟不上，孩子玩不盡興。",
      good_title: "我們的定制化服務",
      good_desc: "專屬包車，隨走隨停。專屬管家1對1服務，行程靈活調整。精選高標酒店，深度品鑒美食。",
      exp: "14年+",
      exp_desc: "專注海外華人定制"
    },
    dest: {
      title: "目的地靈感",
      desc: "您的行程將根據您的興趣、體力及預算進行1對1深度規劃。",
      xj_title: "大美新疆 · 廣袤自由",
      xj_desc: "從喀納斯的湖光山色到獨庫公路的四季輪轉，體驗濃郁的異域風情。",
      zjj_title: "奇幻張家界 · 潘多拉星球",
      zjj_desc: "穿梭在三千奇峰之間，漫步玻璃棧道，親臨《阿凡達》取景地。",
      yn_title: "七彩雲南 · 慢生活",
      yn_desc: "麗江古城的慵懶，大理蒼山的風花雪月，香格里拉的純淨信仰。",
      sc_title: "天府之國 · 絕美川西",
      sc_desc: "九寨溝的童話水景，大熊貓的憨態可掬，稻城亞丁的最後淨土。",
      more: "查看定制靈感"
    },
    guarantee: {
      title: "服務保障",
      items: [
        { title: "100% 純玩", desc: "全程無購物，無隱形消費，把時間留給美景。" },
        { title: "資深管家", desc: "24小時在線服務，隨時解決旅途中的任何問題。" },
        { title: "深度體驗", desc: "拒絕走馬觀花，深入當地生活，體驗地道風情。" },
        { title: "安全保障", desc: "正規旅遊資質，高額保險，專業司機保駕護航。" }
      ]
    },
    faq: {
      title: "常見問題",
      items: [
        { q: "定制遊比跟團遊貴很多嗎？", a: "不一定。我們會根據您的預算合理規劃，省去不必要的中間環節，性價比極高。" },
        { q: "海外華人回國旅遊需要注意什麼？", a: "我們會協助您處理支付（支付寶/微信）、網絡、證件等問題，讓您無憂出行。" },
        { q: "行程可以臨時調整嗎？", a: "當然可以。私家定制最大的優勢就是靈活，您可以隨時與導遊協商調整。" }
      ]
    },
    steps: {
      title: "簡單三步，開啟旅程",
      s1_t: "提交需求",
      s1_d: "填寫表單或添加 WhatsApp，告知您的初步想法。",
      s2_t: "1對1規劃",
      s2_d: "資深定制師為您規劃最合理的路線、酒店與用車。",
      s3_t: "全程無憂",
      s3_d: "VIP 接機，專屬司機導遊陪同，享受美好時光。"
    },
    form: {
      title: "開啟您的尋根之旅",
      desc: "留下聯繫方式，我們將在 24 小時內提供初步方案。",
      name: "您的姓名",
      contact: "WhatsApp / 微信",
      dest_label: "意向目的地",
      guests: "預計人數",
      needs: "特別需求",
      submit: "提交需求，獲取方案",
      privacy: "您的隱私受嚴格保護。",
      success_title: "提交成功！",
      success_msg: "我們已收到您的信息，定制師將盡快與您取得聯繫。",
      success_cta: "不想等待？点击直接咨询小鱼"
    },
    footer: {
      desc: "為海外華人提供更省心的中國定制旅行服務，專注中國當地深度遊，提供純玩小團、私家定制、中文溝通無障礙。",
      contact_title: "聯繫方式",
      email: "郵箱：zou@huiquwan.cn",
      phone: "電話：+86 18174447886",
      address_title: "辦公地址",
      address: "新疆烏魯木齊市經濟技術開發區(頭屯河區)通達街南一巷206號悅來生活廣場3#商業商務樓525室",
      copyright: "© 2026 慧趣玩 HuiQuWan. All Rights Reserved."
    },
    xinjiang: {
      back: "返回首頁",
      hero_title: "大美新疆 · 極致定制",
      hero_subtitle: "1/6的中國，無限的可能",
      highlights_title: "必遊亮點",
      itinerary_title: "經典路線參考",
      tips_title: "旅行小貼士",
      cta: "定制我的新疆之旅",
      highlights: [
        { title: "喀納斯", desc: "人間淨土，神的後花園。秋季層林盡染，冬季銀裝素裹。" },
        { title: "賽里木湖", desc: "大西洋最後一滴眼淚。藍得深邃，純淨得讓人心醉。" },
        { title: "獨庫公路", desc: "縱貫天山脊梁。一天歷經四季，十里不同天。" },
        { title: "喀什古城", desc: "不到喀什不算到新疆。體驗最濃郁的西域人文風情。" }
      ],
      routes: [
        { name: "北疆大環線 (10-12天)", desc: "烏魯木齊 - 喀納斯 - 禾木 - 賽里木湖 - 伊犁草原 - 獨庫公路" },
        { name: "南疆人文之旅 (8-10天)", desc: "喀什 - 帕米爾高原 - 塔縣 - 庫車 - 塔克拉瑪干沙漠" }
      ]
    }
  },
  en: {
    nav: { sc: "SC", tc: "TC", en: "English" },
    brand: "HuiQuWan",
    hero: {
      tag: "Exclusive China Custom Travel",
      title: "Journey Home to Beautiful China",
      subtitle: "Bespoke Xinjiang & Zhangjiajie Tours",
      desc: "Beyond generic group tours. Tailor-made for overseas Chinese. 1-on-1 expert planning, private car, and authentic experiences.",
      cta: "Get Free Custom Plan",
      whatsapp: "WhatsApp Inquiry"
    },
    promise: {
      title: "Premium Customization, Affordable Prices",
      subtitle: "Freedom · Peace of Mind · Guaranteed",
      bullets: ["No more crowded tour groups", "No more stressful planning"],
      footer: "14 years of expertise in custom travel with a 4-on-1 professional service team, dedicated to providing you with a superior independent travel experience."
    },
    pain: {
      title: "Why Choose Custom Travel?",
      bad_title: "Generic Group Tours",
      bad_desc: "Rushed schedules, forced shopping, and mediocre food. Hard for elders and boring for kids.",
      good_title: "Our Premium Service",
      good_desc: "Private car, flexible pace. 1-on-1 butler service. Hand-picked luxury hotels and authentic local cuisine.",
      exp: "14 Yrs+",
      exp_desc: "Overseas Chinese Experts"
    },
    dest: {
      title: "Destination Inspiration",
      desc: "Your itinerary will be deeply planned 1-on-1 based on your interests, physical condition, and budget.",
      xj_title: "Xinjiang · Vast Freedom",
      xj_desc: "From the alpine lakes of Kanas to the scenic Duku Highway, experience exotic beauty.",
      zjj_title: "Zhangjiajie · Avatar World",
      zjj_desc: "Walk among 3,000 sandstone peaks and the famous glass bridge of Tianmen Mountain.",
      yn_title: "Yunnan · Slow Life",
      yn_desc: "The leisure of Lijiang, the beauty of Dali, and the pure faith of Shangri-La.",
      sc_title: "Sichuan · Western Beauty",
      sc_desc: "The fairytale waters of Jiuzhaigou and the adorable giant pandas.",
      more: "Explore More"
    },
    guarantee: {
      title: "Service Guarantee",
      items: [
        { title: "100% Pure Play", desc: "No shopping, no hidden costs. All time is for the scenery." },
        { title: "Expert Butler", desc: "24/7 online service to solve any travel issues instantly." },
        { title: "Deep Experience", desc: "Go beyond sightseeing. Live like a local and feel the culture." },
        { title: "Safety First", desc: "Licensed travel agency with high insurance and pro drivers." }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Is custom travel much more expensive?", a: "Not necessarily. We plan based on your budget, cutting out middlemen for high value." },
        { q: "What should overseas Chinese know?", a: "We help with payments (Alipay/WeChat), internet, and documents for a smooth trip." },
        { q: "Can the itinerary be adjusted?", a: "Absolutely. Flexibility is the core of custom travel. Adjust anytime with your guide." }
      ]
    },
    steps: {
      title: "3 Simple Steps to Start",
      s1_t: "Submit Inquiry",
      s1_d: "Fill the form or WhatsApp us with your initial ideas and preferences.",
      s2_t: "1-on-1 Planning",
      s2_d: "Our experts design the perfect route, hotels, and transport just for you.",
      s3_t: "Worry-free Arrival",
      s3_d: "VIP airport pickup and dedicated guide. Just enjoy your family time.",
    },
    form: {
      title: "Start Your Journey",
      desc: "Leave your contact info, and we'll provide a draft plan within 24 hours.",
      name: "Your Name",
      contact: "WhatsApp / WeChat",
      dest_label: "Destination",
      guests: "No. of Guests",
      needs: "Special Needs",
      submit: "Get My Free Plan",
      privacy: "Your privacy is strictly protected.",
      success_title: "Submitted Successfully!",
      success_msg: "We've received your request. Our specialist will contact you shortly.",
      success_cta: "Don't want to wait? Chat with Fish now"
    },
    footer: {
      desc: "Providing overseas Chinese with worry-free custom travel services in China, focusing on local deep tours, private small groups, and seamless communication.",
      contact_title: "Contact Us",
      email: "Email: zou@huiquwan.cn",
      phone: "Phone: +86 18174447886",
      address_title: "Office Address",
      address: "Room 525, 3# Commercial Building, Yuelai Life Plaza, No. 206 South 1st Lane, Tongda Street, Urumqi Economic and Technological Development Zone, Xinjiang",
      copyright: "© 2026 HuiQuWan. All Rights Reserved."
    },
    xinjiang: {
      back: "Back to Home",
      hero_title: "Magnificent Xinjiang · Ultimate Customization",
      hero_subtitle: "1/6 of China, Infinite Possibilities",
      highlights_title: "Must-visit Highlights",
      itinerary_title: "Classic Itineraries",
      tips_title: "Travel Tips",
      cta: "Customize My Xinjiang Trip",
      highlights: [
        { title: "Kanas", desc: "Pure land on earth, the garden of gods. Golden autumns and silver winters." },
        { title: "Sayram Lake", desc: "The last tear of the Atlantic. Deep blue and breathtakingly pure." },
        { title: "Duku Highway", desc: "Crossing the Tianshan Mountains. Four seasons in one day." },
        { title: "Kashgar Old City", desc: "The heart of Western China. Experience rich Silk Road culture." }
      ],
      routes: [
        { name: "North Xinjiang Loop (10-12 Days)", desc: "Urumqi - Kanas - Hemu - Sayram Lake - Ili Grasslands - Duku Highway" },
        { name: "South Xinjiang Culture (8-10 Days)", desc: "Kashgar - Pamir Plateau - Taxkorgan - Kuqa - Taklamakan Desert" }
      ]
    }
  }
};

type View = "home" | "xinjiang";

export default function App() {
  const [lang, setLang] = useState<Language>("sc");
  const [view, setView] = useState<View>("home");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[lang];

  // 修改这里的号码即可，格式：https://wa.me/国家代码+电话号码
  const WHATSAPP_LINK = "https://wa.me/message/MY53XGE2S44ED1";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // 这里替换为您在 Formspree 申请的 ID
      const response = await fetch("https://formspree.io/f/mjgpvbvj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed, please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("An error occurred. Please contact us via WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Language Switcher & Brand */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-stone-200 rounded-full px-4 py-1.5 shadow-xl flex items-center gap-4">
        <button 
          onClick={() => setView("home")}
          className="flex items-center gap-2 pr-4 border-r border-stone-200 hover:opacity-70 transition-opacity"
        >
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            {t.brand[0]}
          </div>
          <span className="serif font-bold text-stone-900 tracking-tight">{t.brand}</span>
        </button>
        <div className="flex items-center gap-1">
          <div className="p-2 text-stone-400"><Globe className="w-4 h-4" /></div>
          {(["sc", "tc", "en"] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === l ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              {t.nav[l]}
            </button>
          ))}
        </div>
      </nav>

      {view === "home" ? (
        <>
          {/* 1. Hero Section */}
          <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
        {/* ... existing hero content ... */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.span 
            key={`${lang}-tag`}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-white/80 tracking-[0.3em] uppercase text-sm mb-6 block"
          >
            {t.hero.tag}
          </motion.span>
          <motion.h1 
            key={`${lang}-title`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight font-bold"
          >
            {t.hero.title}<br />
            <span className="text-amber-400">{t.hero.subtitle}</span>
          </motion.h1>
          <motion.p 
            key={`${lang}-desc`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-xl flex items-center justify-center gap-2">
              {t.hero.cta} <ArrowRight className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> {t.hero.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* 1.5 Brand Promise Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            alt="Nature" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            <h2 className="serif text-4xl md:text-6xl text-white mb-6 font-bold">{t.promise.title}</h2>
            <p className="text-amber-400 text-2xl md:text-3xl mb-12 tracking-[0.2em] font-light">{t.promise.subtitle}</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
              {t.promise.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 text-white text-xl border border-white/20 px-8 py-4 rounded-2xl backdrop-blur-sm">
                  <CheckCircle2 className="text-amber-500 w-6 h-6" />
                  {bullet}
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                {t.promise.footer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Pain Points */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-3xl md:text-4xl text-center mb-20 font-bold">{t.pain.title}</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-5 p-8 rounded-3xl bg-stone-50 border-l-8 border-red-400">
                <XCircle className="text-red-500 w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="serif text-xl font-bold mb-3">{t.pain.bad_title}</h3>
                  <p className="text-stone-600">{t.pain.bad_desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-8 rounded-3xl bg-emerald-50 border-l-8 border-emerald-500">
                <CheckCircle2 className="text-emerald-600 w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="serif text-xl font-bold mb-3">{t.pain.good_title}</h3>
                  <p className="text-stone-600">{t.pain.good_desc}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop" className="rounded-[2.5rem] shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -left-8 bg-stone-900 text-white p-10 rounded-3xl hidden lg:block">
                <p className="serif text-4xl font-bold text-amber-400 mb-1">{t.pain.exp}</p>
                <p className="text-xs text-white/50 tracking-widest uppercase">{t.pain.exp_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Destinations */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="serif text-3xl md:text-4xl mb-4 font-bold">{t.dest.title}</h2>
          <p className="text-stone-500 mb-16 max-w-2xl mx-auto">{t.dest.desc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <button 
              onClick={() => {
                setView("xinjiang");
                window.scrollTo(0, 0);
              }}
              className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl cursor-pointer text-left"
            >
              <img src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="serif text-3xl text-white mb-4 font-bold">{t.dest.xj_title}</h3>
                <p className="text-white/70 mb-6 font-light">{t.dest.xj_desc}</p>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">{t.dest.more} <ArrowRight className="w-5 h-5" /></div>
              </div>
            </button>
            <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-left">
                <h3 className="serif text-3xl text-white mb-4 font-bold">{t.dest.zjj_title}</h3>
                <p className="text-white/70 mb-6 font-light">{t.dest.zjj_desc}</p>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">{t.dest.more} <ArrowRight className="w-5 h-5" /></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-left">
                <h3 className="serif text-3xl text-white mb-4 font-bold">{t.dest.yn_title}</h3>
                <p className="text-white/70 mb-6 font-light">{t.dest.yn_desc}</p>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">{t.dest.more} <ArrowRight className="w-5 h-5" /></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-left">
                <h3 className="serif text-3xl text-white mb-4 font-bold">{t.dest.sc_title}</h3>
                <p className="text-white/70 mb-6 font-light">{t.dest.sc_desc}</p>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">{t.dest.more} <ArrowRight className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Service Guarantee */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-3xl md:text-4xl text-center mb-16 font-bold">{t.guarantee.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.guarantee.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-stone-50 hover:bg-amber-50 transition-colors group">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  {idx === 0 && <Sparkles className="w-6 h-6" />}
                  {idx === 1 && <Clock className="w-6 h-6" />}
                  {idx === 2 && <MapPin className="w-6 h-6" />}
                  {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                </div>
                <h3 className="serif text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Steps */}
      <section className="py-24 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="serif text-3xl md:text-4xl mb-20 font-bold">{t.steps.title}</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8">{1}</div>
              <h3 className="serif text-xl font-bold mb-4">{t.steps.s1_t}</h3>
              <p className="text-white/50 font-light">{t.steps.s1_d}</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8">{2}</div>
              <h3 className="serif text-xl font-bold mb-4">{t.steps.s2_t}</h3>
              <p className="text-white/50 font-light">{t.steps.s2_d}</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8">{3}</div>
              <h3 className="serif text-xl font-bold mb-4">{t.steps.s3_t}</h3>
              <p className="text-white/50 font-light">{t.steps.s3_d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif text-3xl md:text-4xl text-center mb-16 font-bold">{t.faq.title}</h2>
          <div className="space-y-6">
            {t.faq.items.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-stone-900">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    {item.q}
                  </span>
                  <div className="transition-transform group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-stone-600 font-light leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Form */}
      <section id="contact" className="py-24 px-4 bg-stone-100">
        {/* ... existing form content ... */}
        <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-5 min-h-[500px]">
          <div className="bg-stone-900 text-white p-12 md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="serif text-4xl mb-8 leading-tight font-bold">{t.form.title}</h2>
              <p className="text-white/50 font-light mb-10">{t.form.desc}</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4"><ShieldCheck className="text-amber-500" /><p className="font-light">1-on-1 Planning</p></div>
              <div className="flex items-center gap-4"><MessageCircle className="text-amber-500" /><p className="font-light">24/7 Butler Service</p></div>
            </div>
          </div>
          
          <div className="p-12 md:col-span-3 flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.form.name}</label>
                    <input name="name" type="text" required className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:border-amber-500 outline-none bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.form.contact}</label>
                    <input name="contact" type="text" required className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:border-amber-500 outline-none bg-stone-50" />
                  </div>
                </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.form.dest_label}</label>
                    <select name="destination" className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:border-amber-500 outline-none bg-stone-50 appearance-none">
                      <option>{lang === "en" ? "Xinjiang" : "新疆"}</option>
                      <option>{lang === "en" ? "Zhangjiajie" : "张家界"}</option>
                      <option>{lang === "en" ? "Yunnan" : "云南"}</option>
                      <option>{lang === "en" ? "Sichuan" : "四川"}</option>
                      <option>{lang === "en" ? "Other" : "其他"}</option>
                    </select>
                  </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-stone-900 hover:bg-black text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : t.form.submit}
                </button>
                <p className="text-center text-xs text-stone-400">{t.form.privacy}</p>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="serif text-3xl font-bold mb-4">{t.form.success_title}</h2>
                <p className="text-stone-600 mb-10">{t.form.success_msg}</p>
                
                <div className="space-y-4">
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl w-full"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    {t.form.success_cta}
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="block mx-auto text-stone-400 hover:text-stone-600 text-sm underline"
                  >
                    {lang === "en" ? "Back to form" : "返回修改信息"}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
      ) : (
        <div className="pt-24">
          {/* Xinjiang Sub-page */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2000&auto=format&fit=crop" 
                alt="Xinjiang" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center px-4">
              <button 
                onClick={() => setView("home")}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" /> {t.xinjiang.back}
              </button>
              <h1 className="serif text-5xl md:text-7xl text-white font-bold mb-6">{t.xinjiang.hero_title}</h1>
              <p className="text-xl md:text-2xl text-amber-400 font-light tracking-widest">{t.xinjiang.hero_subtitle}</p>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="serif text-4xl text-center mb-16 font-bold">{t.xinjiang.highlights_title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.xinjiang.highlights.map((h, idx) => (
                  <div key={idx} className="group">
                    <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl">
                      <img 
                        src={[
                          "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=800",
                          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
                          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
                          "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=800"
                        ][idx]} 
                        alt={h.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="serif text-2xl font-bold mb-3">{h.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Itineraries */}
          <section className="py-24 px-4 bg-stone-100">
            <div className="max-w-5xl mx-auto">
              <h2 className="serif text-4xl text-center mb-16 font-bold">{t.xinjiang.itinerary_title}</h2>
              <div className="space-y-8">
                {t.xinjiang.routes.map((r, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <h3 className="serif text-2xl font-bold text-amber-600">{r.name}</h3>
                      <div className="px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                        {lang === "en" ? "Private Custom" : "私家定制"}
                      </div>
                    </div>
                    <p className="text-stone-600 text-lg leading-relaxed mb-8">{r.desc}</p>
                    <button 
                      onClick={() => {
                        setView("home");
                        setTimeout(() => {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="inline-flex items-center gap-2 text-stone-900 font-bold hover:gap-4 transition-all"
                    >
                      {lang === "en" ? "Inquire Now" : "立即咨询"} <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 px-4 bg-amber-500 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="serif text-4xl md:text-5xl font-bold mb-8">{t.xinjiang.cta}</h2>
              <p className="text-xl text-white/90 mb-12 font-light">
                {lang === "en" 
                  ? "Every trip to Xinjiang is unique. Let us design yours." 
                  : "每一段新疆旅程都是独一无二的，让我们为您量身打造。"}
              </p>
              <button 
                onClick={() => {
                  setView("home");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="bg-white text-amber-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-stone-100 transition-all shadow-2xl"
              >
                {t.hero.cta}
              </button>
            </div>
          </section>
        </div>
      )}

      {/* 7. Footer */}
      <footer className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
                {t.brand[0]}
              </div>
              <span className="serif font-bold text-2xl tracking-tight">{t.brand}</span>
            </div>
            <p className="text-white/50 font-light leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="serif text-xl font-bold text-amber-500">{t.footer.contact_title}</h3>
            <div className="space-y-4 text-white/70 font-light">
              <a href="mailto:zou@huiquwan.cn" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Globe className="w-5 h-5 text-amber-500/50" />
                <span>{t.footer.email}</span>
              </a>
              <a href="tel:+8618174447886" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5 text-amber-500/50" />
                <span>{t.footer.phone}</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="serif text-xl font-bold text-amber-500">{t.footer.address_title}</h3>
            <p className="text-white/70 font-light leading-relaxed">
              {t.footer.address}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          {t.footer.copyright}
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_LINK} target="_blank" rel="noreferrer" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-center group gap-2"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-white font-bold whitespace-nowrap">
          {lang === "en" ? "Chat with Fish" : "咨询小鱼"}
        </span>
        <MessageCircle className="w-8 h-8 text-white fill-current" />
      </motion.a>
    </div>
  );
}
