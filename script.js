document.documentElement.classList.add('js');

const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('contactStatus');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const themeToggles = document.querySelectorAll('.theme-toggle');
const langButtons = document.querySelectorAll('.lang-button');
const animateItems = document.querySelectorAll('.animate-item');

const TELEGRAM_BOT_TOKEN = '8510135669:AAE_fKui30qQLger3Agx6u3SklKs6ScQkeU';
const TELEGRAM_CHAT_ID = '7965100748';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const translations = {
  en: {
    'brand.title': 'Data Analyst',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'hero.eyebrow': 'Data Analytics portfolio',
    'hero.title': 'Data Analyst & Applied Mathematics Student',
    'hero.description': 'I turn raw data into actionable business insights using statistical analysis, SQL queries, interactive dashboards, and machine learning models.',
    'hero.buttonSkills': 'Skills',
    'hero.buttonContact': 'Contact',
    'hero.cardLabel': 'Latest project',
    'hero.cardTitle': 'Sales & Performance Dashboard',
    'hero.cardDescription': 'Interactive Power BI dashboard tracking KPIs and sales analytics in real-time.',
    'hero.statProjects': 'Projects',
    'hero.statRating': 'Client rating',
    'about.eyebrow': 'About me',
    'about.title': '3rd-Year Applied Mathematics Student & Data Analyst',
    'about.description': 'I am a 3rd-year student at the National University of Uzbekistan majoring in Applied Mathematics. I combine strong mathematical logic with modern data analytics tools to process large datasets, build analytical models, and create data visualizations that drive business decisions.',
    'portfolio.eyebrow': 'Selected work',
    'portfolio.title': 'Portfolio',
    'portfolio.card1.tag': 'Power BI',
    'portfolio.card1.title': 'Executive Sales Dashboard',
    'portfolio.card1.description': 'Interactive dashboard highlighting regional performance, profit margins, and sales trends.',
    'portfolio.card2.tag': 'PostgreSQL & Python',
    'portfolio.card2.title': 'Customer Churn Analysis',
    'portfolio.card2.description': 'Exploratory data analysis using Python (Pandas) and SQL queries to identify user churn drivers.',
    'portfolio.card3.tag': 'Excel & C#',
    'portfolio.card3.title': 'Automated Financial Report',
    'portfolio.card3.description': 'Advanced Excel workbook with automated data modeling and custom C# integration scripts.',
    'skills.eyebrow': 'Data Analytics',
    'skills.title': 'Core Technical Skills',
    'skills.skill1': 'PostgreSQL & SQL',
    'skills.skill2': 'Advanced Excel',
    'skills.skill3': 'Python (Pandas/NumPy)',
    'skills.skill4': 'Power BI & DAX',
    'skills.skill5': 'HTML & CSS',
    'skills.skill6': 'C# Programming',
    'skills.skill7': 'Applied Mathematics',
    'skills.skill8': 'Data Visualization',
    'course.eyebrow': 'Expertise & Stack',
    'course.title': 'What do I know?',
    'course.item1': 'Database Management: Complex PostgreSQL querying, indexing, data modeling, and aggregation',
    'course.item2': 'Data Visualization: Building interactive reports and dashboards using Power BI (DAX, Power Query)',
    'course.item3': 'Python Analytics: Data cleaning, exploratory data analysis (EDA), and automation with Pandas, NumPy, and Matplotlib',
    'course.item4': 'Spreadsheet Modeling: Advanced Excel functions (XLOOKUP, INDEX/MATCH, Pivot Tables, Macros)',
    'course.item5': 'Software & Web Development: Fundamental C#, HTML5, and CSS3 for custom interface logic',
    'course.item6': 'Mathematical Foundations: Applied mathematics background covering statistics, linear algebra, and numerical methods',
    'course.item7': 'Business Intelligence: Extracting actionable insights from structured data to support business decisions',
    'contact.eyebrow': 'Let’s build together',
    'contact.title': 'Contact',
    'contact.description': 'Use the buttons below to reach me quickly. Choose the easiest way to send a message or request advice.',
    'contact.email': 'Email: azamatyashinovv@gmail.com',
    'contact.phone': 'Phone: +998771599933',
    'contact.telegram': 'Telegram: @yashinov',
    'contact.linkedin': 'LinkedIn',
    'contact.cardTitle': 'Quick contact',
    'contact.cardText': 'Write directly or call using the buttons above. I’m ready to review your project.',
    'footer.text': '2026 © Azamat | Data Analyst Portfolio',
    'form.noMessage': 'No detailed project information was provided.',
    'form.missingFields': 'Please enter your name and phone number.',
    'form.sending': 'Sending message...',
    'form.sent': 'Your message was sent successfully! I will reply shortly.',
    'form.failed': 'Message sending failed. Please try again later.',
    'form.networkError': 'Network error. Please check your internet connection.'
  },
  uz: {
    'brand.title': 'Data Analitigi',
    'nav.about': 'Haqida',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Ko‘nikmalar',
    'nav.contact': 'Aloqa',
    'theme.light': 'Yorug‘lik',
    'theme.dark': 'Qorong‘u',
    'hero.eyebrow': 'Data Analytics portfeli',
    'hero.title': 'Data Analitik va Amaliy Matematika Talabasi',
    'hero.description': 'Men statistik tahlil, SQL so‘rovlari, interaktiv boshqaruv panellari (dashboards) va ma’lumotlar modellashtirish orqali xom ma’lumotlarni biznes qarorlariga aylantiraman.',
    'hero.buttonSkills': 'Ko‘nikmalar',
    'hero.buttonContact': 'Aloqa',
    'hero.cardLabel': 'So‘nggi loyiha',
    'hero.cardTitle': 'Sotuvlar va Samadorlik Paneli',
    'hero.cardDescription': 'KPI va sotuv analitikasini real vaqt rejimida kuzatib boruvchi Power BI interaktiv paneli.',
    'hero.statProjects': 'Loyihalar',
    'hero.statRating': 'Mijoz bahosi',
    'about.eyebrow': 'Men haqimda',
    'about.title': 'O‘zMU Amaliy Matematika 3-bosqich talabasi & Data Analitik',
    'about.description': 'O‘zbekiston Milliy Universiteti Amaliy matematika yo‘nalishida 3-bosqichda tahsil olaman. Kuchli matematik mantiq va zamonaviy data analitika qurollarini birlashtirib, katta ma’lumotlar to‘plamini qayta ishlayman hamda vizualizatsiya yarataman.',
    'portfolio.eyebrow': 'Tanlangan ishlar',
    'portfolio.title': 'Portfolio',
    'portfolio.card1.tag': 'Power BI',
    'portfolio.card1.title': 'Biznes Sotuvlar Paneli',
    'portfolio.card1.description': 'Hududiy ko‘rsatkichlar va sotuv tendensiyalarini ko‘rsatuvchi interaktiv Power BI dashboard.',
    'portfolio.card2.tag': 'PostgreSQL & Python',
    'portfolio.card2.title': 'Mijozlar Ketishi (Churn) Tahlili',
    'portfolio.card2.description': 'Mijozlarning chiqib ketish sabablarini aniqlash uchun Python (Pandas) va SQL orqali o‘tkazilgan tahlil.',
    'portfolio.card3.tag': 'Excel & C#',
    'portfolio.card3.title': 'Avtomatlashtirilgan Moliyaviy Hisobot',
    'portfolio.card3.description': 'Mukammal Excel formulalari hamda C# skriptlari bilan avtomatlashtirilgan ma’lumotlar modeli.',
    'skills.eyebrow': 'Data Analytics',
    'skills.title': 'Texnik Ko‘nikmalar',
    'skills.skill1': 'PostgreSQL & SQL',
    'skills.skill2': 'Mukammal Excel',
    'skills.skill3': 'Python (Pandas/NumPy)',
    'skills.skill4': 'Power BI & DAX',
    'skills.skill5': 'HTML & CSS',
    'skills.skill6': 'C# Dasturlash',
    'skills.skill7': 'Amaliy Matematika',
    'skills.skill8': 'Data Vizualizatsiya',
    'course.eyebrow': 'Texnologiyalar',
    'course.title': 'Nimalarni bilaman?',
    'course.item1': 'Ma’lumotlar bazasi: PostgreSQL da murakkab so‘rovlar, indekslash, modellashtirish va agregatsiya',
    'course.item2': 'Data Vizualizatsiya: Power BI (DAX, Power Query) yordamida hisobotlar va dinamik panellar tuzish',
    'course.item3': 'Python Analitikasi: Pandas, NumPy va Matplotlib orqali ma’lumotlarni tozalash hamda EDA o‘tkazish',
    'course.item4': 'Jadvallar bilan ishlash: Mukammal Excel (XLOOKUP, Pivot Tables, formulalar va makroslar)',
    'course.item5': 'Dasturlash va Veb: Interfeys mantig‘i uchun C#, HTML5 va CSS3 asoslari',
    'course.item6': 'Matematik Asos: Statistika, chiziqli algebra va amaliy matematika bilimlari',
    'course.item7': 'Business Intelligence: Strukturallangan ma’lumotlardan biznes qarorlari uchun xulosalar chiqarish',
    'contact.eyebrow': 'Birgalikda yarataylik',
    'contact.title': 'Aloqa',
    'contact.description': 'Quyidagi tugmalar orqali menga tezda murojaat qiling. Xabar yoki maslahat uchun eng qulay usulni tanlang.',
    'contact.email': 'Email: azamatyashinovv@gmail.com',
    'contact.phone': 'Telefon: +998771599933',
    'contact.telegram': 'Telegram: @yashinov',
    'contact.linkedin': 'LinkedIn',
    'contact.cardTitle': 'Tezkor aloqa',
    'contact.cardText': 'Yuqoridagi tugmalar bilan to‘g‘ridan-to‘g‘ri yozing yoki qo‘ng‘iroq qiling. Loyihangizni ko‘rib chiqishga tayyorman.',
    'footer.text': '2026 © Azamat | Data Analyst Portfolio',
    'form.noMessage': 'Loyihangiz haqida batafsil ma’lumot yo‘q.',
    'form.missingFields': 'Iltimos, ism va telefon raqamni kiriting.',
    'form.sending': 'Xabar yuborilyapti...',
    'form.sent': 'Xabaringiz muvaffaqiyatli yuborildi! Sizga tez orada javob beraman.',
    'form.failed': 'Xabar yuborishda xato yuz berdi. Iltimos keyinroq qaytadan urinib ko‘ring.',
    'form.networkError': 'Tarmoq xatosi. Internet aloqangizni tekshiring.'
  }
};

let currentLang = localStorage.getItem('language') || 'en';
const currentTheme = localStorage.getItem('theme') || 'light';

const updateThemeUI = () => {
  const theme = document.documentElement.dataset.theme || 'light';
  themeToggles.forEach((button) => {
    const themeIcon = button.querySelector('.theme-icon');
    const themeLabel = button.querySelector('.theme-label');
    if (!themeIcon || !themeLabel) return;
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeLabel.textContent = translations[currentLang][`theme.${theme}`] || (theme === 'dark' ? 'Dark' : 'Light');
  });
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  updateThemeUI();
};

const setLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang === 'uz' ? 'uz' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[lang]?.[key];
    if (translation !== undefined) {
      element.textContent = translation;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  updateThemeUI();
};

themeToggles.forEach((button) => {
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

if (currentTheme) {
  setTheme(currentTheme);
}
setLanguage(currentLang);

if (form && statusMessage) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim() || translations[currentLang]['form.noMessage'];

    if (!name || !phone) {
      statusMessage.textContent = translations[currentLang]['form.missingFields'];
      return;
    }

    const text = `📩 ${currentLang === 'uz' ? 'Yangi bog‘lanish' : 'New contact'}:\n${currentLang === 'uz' ? 'Ism' : 'Name'}: ${name}\n${currentLang === 'uz' ? 'Telefon' : 'Phone'}: ${phone}\n${currentLang === 'uz' ? 'Xabar' : 'Message'}: ${message}`;

    statusMessage.textContent = translations[currentLang]['form.sending'];
    statusMessage.classList.remove('error');

    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();
      if (response.ok && data.ok) {
        statusMessage.textContent = translations[currentLang]['form.sent'];
        form.reset();
      } else {
        statusMessage.textContent = translations[currentLang]['form.failed'];
        statusMessage.classList.add('error');
        console.error('Telegram API error:', data);
      }
    } catch (error) {
      statusMessage.textContent = translations[currentLang]['form.networkError'];
      statusMessage.classList.add('error');
      console.error(error);
    }
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
}

let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 32;

const updateHeaderVisibility = () => {
  if (!header) return;
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY && currentScroll > SCROLL_THRESHOLD) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollY = currentScroll;
};

window.addEventListener('scroll', updateHeaderVisibility, { passive: true });

const revealItem = (item) => item.classList.add('visible');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealItem(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  animateItems.forEach((item) => observer.observe(item));
} else {
  animateItems.forEach(revealItem);
}