// ============================================================
//  public/js/config.js — إعدادات الواجهة الأمامية
//
//  ✅ رقم واتساب الإدارية: 201006899642  (+20 10 06899642)
//
//  ☁️  للنشر على الإنترنت في كل مكان (GitHub Pages):
//     1) أنشئ مشروعًا مجانيًا على https://console.firebase.google.com
//     2) أضف تطبيق Web وانسخ قيم firebaseConfig هنا
//     3) فعّل Realtime Database وطبّق القواعد من firebase.rules.json
//     (التفاصيل كاملة في README قسم "النشر في كل مكان")
// ============================================================

const APP_CONFIG = {
  // رقم واتساب الإدارية (مع رمز الدولة وبدون + أو مسافات)
  WHATSAPP_ADMIN_NUMBER: '201006899642',

  // عنوان واجهة الـ API (خادم محلي اختياري — غير مطلوب على جت هب)
  API_BASE: '/api',

  // بيانات المعهد
  TEACHER: 'أ. علي ضاحي جاد',
  TITLE: 'الحاكم',
  CAMP: 'معسكر الدرس',

  // المراحل الدراسية المسموح بها
  STAGES: ['أولى ثانوي', 'ثانية ثانوي', 'ثالثة ثانوي'],

  // ----------------------------------------------------------
  //  ☁️ Firebase — قاعدة البيانات السحابية (تجميع تسجيلات كل الأجهزة)
  //  اترك القيم كما هي "ضع-..." إذا لم ترد الربط السحابي الآن
  //  (سيستمر النظام بالعمل محليًا بدون سحابة)
  // ----------------------------------------------------------
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyDDSx_jBGuLlOkSygzQbw4sQZATboOHsMc',
    authDomain: 'msale-web.firebaseapp.com',
    databaseURL: 'https://msale-web-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'msale-web',
    storageBucket: 'msale-web.firebasestorage.app',
    messagingSenderId: '186044762425',
    appId: '1:186044762425:web:9a5d7c7b809ab994f3c0e8',
    measurementId: 'G-DCE6GDLVYQ',
  },
};