document.addEventListener("DOMContentLoaded", function () {
/*=========================
Compteur anime
=========================== */
document.querySelectorAll('[data-target]').forEach(el => {
  const target = parseInt(el.getAttribute('data-target'));

  let count = 0;
  const increment = target / 100;

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(count);
  }, 20);
});

  /* ===========================
     MODE CLAIR / SOMBRE
  =========================== */
  const themeToggle = document.getElementById('themeToggle');

  function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeToggle) themeToggle.textContent = "☀️";
    } else {
      document.body.classList.remove('dark-mode');
      if (themeToggle) themeToggle.textContent = "🌙";
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  loadTheme();


  /* ===========================
     TRADUCTIONS COMPLETES
  =========================== */
  const translations = {

    fr: {
      title: "Zakat al-Fitr 2026",
      description: "Faites votre Zakat al-Fitr avec AL-FIKRA",

      title2: "Fondement religieux",
      description2: "Selon Abdullah ibn Umar (qu’Allah l’agrée), le Prophète ﷺ a rendu obligatoire la Zakat al-Fitr comme purification pour le jeûneur et nourriture pour les pauvres.",
      description3: "« Les aumônes sont destinées aux pauvres et aux nécessiteux… » (Sourate 9:60)",

      title3: "Nos Packs",
      dt1: "1 Personne",
      dp1: "1200 XAF",
      dt2: "3 Personnes",
      dp2: "3500 XAF",
      dt3: "5 Personnes",
      dp3: "5800 XAF",
      lc: "Choisir",

      titleb1: "Vous connaissez une famille dans le besoin ? Proposez-la",
      titleb2: "📌 Instructions",
      descriptionb1: "Veuillez fournir les informations suivantes :",
      nb: "Nom complet",
      qb: "Quartier",
      sb: "Situation familiale",
      nt: "Téléphone",
      descriptionb2: "Toute fausse information entraînera le rejet.",
      lib: "Proposer",

      titlet1: "Transparence",
      descriptiont1: "Livraison 100% transparente.",
      descriptiont2: "Kg distribués",
      descriptiont3: "Bénéficiaires",
      descriptiont4: "Packs collectés",

      titlep1: "À propos",
      descriptionp1: "AL-FIKRA est une boutique alimentaire spécialisée en gros et détail.",
      descriptionp2: "Nous renforçons la solidarité communautaire.",

      titlep2: "🌙 Spécial Ramadan",
      descriptionp3: "Packs alimentaires à prix réduits.",
      descriptionp4: "Riz, huile, sucre et tomate.",

      titlep3: "🤲 Promotion Zakat",
      descriptionp5: "Solution simple et conforme aux recommandations religieuses.",
      descriptionp6: "Organisation transparente.",
      descriptionp7: "Distribution responsable.",

      titlep4: "🎯 Engagement",
      descriptionp8: "✔ Qualité",
      descriptionp9: "✔ Prix accessibles",
      descriptionp10: "✔ Transparence",
      descriptionp11: "✔ Soutien social",

      description4: "© 2026 AL-FIKRA",
      description5: "Développé par Yahya_Haroun",

      acc: "Accueil",
      trans: "Transparence",
      bene: "Bénéficiaires",
      appro: "À propos",
      lpd: "Découvrir",
      alf:"AL-FIKRA"
    },

    en: {
      title: "Zakat al-Fitr 2026",
      description: "Pay your Zakat al-Fitr with AL-FIKRA",

      title2: "Religious Foundation",
      description2: "The Prophet ﷺ made Zakat al-Fitr obligatory.",
      description3: "“Charity is for the poor and the needy…” (9:60)",

      title3: "Our Packs",
      dt1: "1 Person",
      dp1: "1200 XAF",
      dt2: "3 Persons",
      dp2: "3500 XAF",
      dt3: "5 Persons",
      dp3: "5800 XAF",
      lc: "Choose",

      titleb1: "Know a family in need?",
      titleb2: "📌 Instructions",
      descriptionb1: "Provide beneficiary information:",
      nb: "Full Name",
      qb: "Area",
      sb: "Family situation",
      nt: "Phone",
      descriptionb2: "False information will be rejected.",
      lib: "Submit",

      titlet1: "Transparency",
      descriptiont1: "100% transparent delivery.",
      descriptiont2: "Kg distributed",
      descriptiont3: "Beneficiaries",
      descriptiont4: "Packs collected",

      titlep1: "About",
      descriptionp1: "AL-FIKRA grocery store.",
      descriptionp2: "Community solidarity.",

      titlep2: "🌙 Ramadan Special",
      descriptionp3: "Discounted food packs.",
      descriptionp4: "Rice, oil, sugar, tomato.",

      titlep3: "🤲 Zakat Promotion",
      descriptionp5: "Simple and organized solution.",
      descriptionp6: "Transparent system.",
      descriptionp7: "Responsible distribution.",

      titlep4: "🎯 Commitment",
      descriptionp8: "✔ Quality",
      descriptionp9: "✔ Affordable",
      descriptionp10: "✔ Transparent",
      descriptionp11: "✔ Social support",

      description4: "© 2026 AL-FIKRA",
      description5: "Developed by Yahya_Haroun",

      acc: "Home",
      trans: "Transparency",
      bene: "Beneficiaries",
      appro: "About",
      lpd: "Discover",
      alf:"AL-FIKRA"
    },

    ar: {
      title: "زكاة الفطر 2026",
      description: "أدِّ زكاة الفطر مع الفكرة",

      title2: "الأساس الشرعي",
      description2: "فرض النبي ﷺ زكاة الفطر.",
      description3: "« إنما الصدقات للفقراء والمساكين… »",

      title3: "باقاتنا",
      dt1: "شخص",
      dp1: "1200 فرنك",
      dt2: "3 أشخاص",
      dp2: "3500 فرنك",
      dt3: "5 أشخاص",
      dp3: "5800 فرنك",
      lc: "اختيار",

      titleb1: "هل تعرف عائلة محتاجة؟",
      titleb2: "📌 تعليمات",
      descriptionb1: "يرجى إدخال المعلومات:",
      nb: "الاسم",
      qb: "الحي",
      sb: "الحالة",
      nt: "الهاتف",
      descriptionb2: "أي معلومات خاطئة تُرفض.",
      lib: "إرسال",

      titlet1: "الشفافية",
      descriptiont1: "توصيل شفاف 100٪.",
      descriptiont2: "كلغ موزعة",
      descriptiont3: "مستفيدون",
      descriptiont4: "باقات",

      titlep1: "من نحن",
      descriptionp1: "متجر الفكرة للمواد الغذائية.",
      descriptionp2: "تعزيز التكافل.",

      titlep2: "🌙 عرض رمضان",
      descriptionp3: "باقات مخفضة.",
      descriptionp4: "أرز وزيت وسكر وطماطم.",

      titlep3: "🤲 مبادرة الزكاة",
      descriptionp5: "حل بسيط ومنظم.",
      descriptionp6: "نظام شفاف.",
      descriptionp7: "توزيع مسؤول.",

      titlep4: "🎯 التزامنا",
      descriptionp8: "✔ جودة",
      descriptionp9: "✔ أسعار مناسبة",
      descriptionp10: "✔ شفافية",
      descriptionp11: "✔ دعم اجتماعي",

      description4: "© 2026 الفكرة",
      description5: "تطوير يحيى هارون",

      acc: "الرئيسية",
      trans: "الشفافية",
      bene: "المستفيدون",
      appro: "من نحن",
      lpd: "اكتشف",
      alf:"الفكرة"
    }

  };


  /* ===========================
     SYSTEME DE LANGUE
  =========================== */
  const languageSwitcher = document.getElementById("languageSwitcher");

  function setLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    localStorage.setItem("language", lang);
  }

  function loadLanguage() {
    const savedLang = localStorage.getItem("language") || "fr";
    if (languageSwitcher) languageSwitcher.value = savedLang;
    setLanguage(savedLang);
  }

  if (languageSwitcher) {
    languageSwitcher.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  loadLanguage();

});
/* ===========================
   BURGER MENU
=========================== */

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fermer menu après clic
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkModeToggle");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode",
            document.body.classList.contains("dark-mode")
        );
    });

    // Charger état sauvegardé
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
}




