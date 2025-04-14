import starLogo from "./images/star-symbol.svg";
import clocksLogo from "./images/clock-symbol.svg";
import giftboxLogo from "./images/giftbox-symbol.svg";
import wifiLogo from "./images/wifi-symbol.svg";

export const serviceCards = [
        
    {   
        id: 1, title: "🏠 شراء العقارات", 
         brief: "نساعدك في العثور على العقار المثالي سواء كان سكني أو استثماري، مع دعم كامل في كل خطوة حتى التملك", 
        // price: "Free",
        desc: [ "",
                "نساعدك في العثور على العقار المثالي سواء كان سكني أو استثماري، مع دعم كامل في كل خطوة حتى التملك" ]
    }, { 
        id: 2, title: "💼 بيع العقارات", 
        brief: "نوصل عقارك لأكبر عدد من المهتمين باستخدام أدوات تسويق حديثة، لضمان بيع سريع وبأفضل سعر ممكن", 
        price: "Free",
        desc: [ "We will find you an partment that suits your demands",
                "Arranging a demonstrations of suitable apartments",
                "Assistance with preparing all the documents",
                "Checking the legal clearness of the transaction",
                "Assistance with getting the loan",
                "We will guide you through every step of the transaction" ]
    }, {  
        id: 3, title: "🏢 تأجير العقارات",
        brief: "ندير عملية التأجير بكل احترافية، من الترويج للعقار إلى توقيع العقود، لتأجير آمن وسلس سواء للمالك أو المستأجر", 
        price: "Free",
        desc: [ "Checking the real estate objects and the documents",
                "Assistance with preparing all the documents required for the transaction",
                "*You get to keep a certificate of legal clearness of the estate" ]
    }, {  
        id: 4, title: "📊 استشارات عقارية",
        brief: "نقدم لك استشارات دقيقة مبنية على خبرة سوقية، لنساعدك على اتخاذ القرار العقاري الصحيح بثقة", 
        price: "Negotiable",
        desc: [ "Preparing the estate for selling",
                "Presentation and advertisment support",
                "Checking of the legal clearness of the second party",
                "Assistance with preparing all the documents and signing a contract",
                "We will guide you through every step of the transaction" ]
    }
];

export const values = [

    {   id: 1,  symbol: starLogo,   title: "الجوده",
        desc: ["نحرص على تقديم خدمات عالية الجودة تضمن لك راحة البال ورضا تام في كل خطوة"]
    }, 
    
    {   id: 2,  symbol: clocksLogo, title: "السرعه",
        desc: ["ننجز معاملاتك العقارية بأقصى سرعة دون التأثير على الجودة، لأن وقتك مهم بالنسبة لنا"]
    }, 
    
    {   id: 3,  symbol: giftboxLogo, title: "الثقة",
        desc: ["بنينا علاقتنا مع العملاء على الثقة والشفافية، وهذا هو أساس نجاحنا واستمرارنا"]
    }, 
    
    {   id: 4,   symbol: wifiLogo,   title: "التنوع",
        desc: ["نوفر مجموعة واسعة من الخيارات العقارية التي تلبي مختلف الأذواق والاحتياجات، لتجد دائمًا ما يناسبكs"]
    }
];