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
// Replace YOUR_CHAT_ID with your Telegram chat id or channel username
const TELEGRAM_CHAT_ID = '7965100748';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const translations = {
  en: {
    'brand.title': 'Penetration Tester',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'hero.eyebrow': 'Cyber Security portfolio',
    'hero.title': 'Penetration Tester & Cybersecurity Specialist',
    'hero.description': 'I work on identifying and exploiting vulnerabilities in networks, operating systems, and web applications. I assess your system security against real-world threat scenarios.',
    'hero.buttonSkills': 'Skills',
    'hero.buttonContact': 'Contact',
    'hero.cardLabel': 'Latest project',
    'hero.cardTitle': 'Business dashboard design',
    'hero.cardDescription': 'Responsive admin panel with fast performance and modern visuals.',
    'hero.statProjects': 'Projects',
    'hero.statRating': 'Client rating',
    'about.eyebrow': 'About me',
    'about.title': 'Penetration Tester & Cybersecurity Specialist',
    'about.description': 'I have deep expertise in network protocols, Linux and Windows operating systems, scripting, and vulnerability exploitation. I help strengthen digital infrastructure through comprehensive cybersecurity assessments.',
    'portfolio.eyebrow': 'Selected work',
    'portfolio.title': 'Portfolio',
    'portfolio.card1.tag': 'Web App',
    'portfolio.card1.title': 'E-commerce landing page',
    'portfolio.card1.description': 'Responsive landing page with smooth animations and conversion-focused layout.',
    'portfolio.card2.tag': 'Dashboard',
    'portfolio.card2.title': 'Analytics dashboard',
    'portfolio.card2.description': 'Modern admin dashboard for visualizing data, charts, and user metrics.',
    'portfolio.card3.tag': 'Portfolio',
    'portfolio.card3.title': 'Designer showcase',
    'portfolio.card3.description': 'Portfolio website to highlight creative work with polished interactions.',
    'skills.eyebrow': 'Cyber Security',
    'skills.title': 'Penetration Tester Skills',
    'skills.skill1': 'Network & OS',
    'skills.skill2': 'Linux / Windows',
    'skills.skill3': 'Python / Bash',
    'skills.skill4': 'Active Directory',
    'skills.skill5': 'OWASP & Web',
    'skills.skill6': 'Post-exploit',
    'skills.skill7': 'Evasion',
    'skills.skill8': 'Reporting',
    'course.eyebrow': 'Cyber Security',
    'course.title': 'What do I know?',
    'course.item1': 'Network protocols and routing: TCP/IP, DNS, ARP, NAT, VPN, firewall',
    'course.item2': 'Operating systems: Kali Linux, Parrot OS, Windows, Active Directory, PowerShell',
    'course.item3': 'Scripting and programming: Python, Bash, PowerShell, C/C++, Go',
    'course.item4': 'Web security: SQLi, XSS, SSRF, CSRF, IDOR, and OWASP Top 10',
    'course.item5': 'Active Directory exploitation and post-exploitation techniques',
    'course.item6': 'Social engineering: phishing, baiting, pretexting',
    'course.item7': 'Evasion and covert operations: stealth and traffic encryption',
    'course.item8': 'Scanners and tools: Nmap, Amass, Metasploit, Burp Suite, Cobalt Strike, Mimikatz',
    'course.item9': 'Reporting and Blue Team communication',
    'contact.eyebrow': 'Let’s build together',
    'contact.title': 'Contact',
    'contact.description': 'Use the buttons below to reach me quickly. Choose the easiest way to send a message or request advice.',
    'contact.email': 'Email: azamatyashinovv@gmail.com',
    'contact.phone': 'Phone: +998771599933',
    'contact.telegram': 'Telegram: @yashinov',
    'contact.linkedin': 'LinkedIn',
    'contact.cardTitle': 'Quick contact',
    'contact.cardText': 'Write directly or call using the buttons above. I’m ready to review your project.',
    'footer.text': '2026 © Azamat | Professional portfolio',
    'form.noMessage': 'No detailed project information was provided.',
    'form.missingFields': 'Please enter your name and phone number.',
    'form.sending': 'Sending message...',
    'form.sent': 'Your message was sent successfully! I will reply shortly.',
    'form.failed': 'Message sending failed. Please try again later.',
    'form.networkError': 'Network error. Please check your internet connection.'
  },
  uz: {
    'brand.title': 'Pentester',
    'nav.about': 'Haqida',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Ko‘nikmalar',
    'nav.contact': 'Aloqa',
    'theme.light': 'Yorug‘lik',
    'theme.dark': 'Qorong‘u',
    'hero.eyebrow': 'Kiber xavfsizlik portfeli',
    'hero.title': 'Pentester va Kiberxavfsizlik Mutaxassisi',
    'hero.description': 'Men tarmoqlar, operatsion tizimlar va veb-ilovalardagi zaifliklarni aniqlash va ekspluatatsiya qilish bo‘yicha ishlayman. Men tizimingizni real dunyo tahdidlari asosida tekshiraman.',
    'hero.buttonSkills': 'Ko‘nikmalar',
    'hero.buttonContact': 'Aloqa',
    'hero.cardLabel': 'So‘nggi loyiha',
    'hero.cardTitle': 'Biznes boshqaruv paneli dizayni',
    'hero.cardDescription': 'Responsive admin panel tez ishlashi va zamonaviy ko‘rinishi bilan.',
    'hero.statProjects': 'Loyihalar',
    'hero.statRating': 'Mijoz bahosi',
    'about.eyebrow': 'Menga haqida',
    'about.title': 'Pentester va Kiberxavfsizlik Mutaxassisi',
    'about.description': 'Men tarmoq protokollari, Linux va Windows operatsion tizimlari, skriptlash va zaifliklarni ekspluatatsiya qilish bo‘yicha chuqur bilimga egaman. Men kiberxavfsizlik baholari orqali raqamli infratuzilmangizni mustahkamlayman.',
    'portfolio.eyebrow': 'Tanlangan ishlar',
    'portfolio.title': 'Portfolio',
    'portfolio.card1.tag': 'Veb ilova',
    'portfolio.card1.title': 'E-commerce landing page',
    'portfolio.card1.description': 'Responsive landing page yig‘ilishi va konversiyaga yo‘naltirilgan dizayni bilan.',
    'portfolio.card2.tag': 'Dashboard',
    'portfolio.card2.title': 'Analitik boshqaruv paneli',
    'portfolio.card2.description': 'Ma’lumotlar, grafiklar va foydalanuvchi metrikalarini vizualizatsiya qilish uchun zamonaviy admin panel.',
    'portfolio.card3.tag': 'Portfolio',
    'portfolio.card3.title': 'Dizayner namoyishi',
    'portfolio.card3.description': 'Ijodiy ishlarni nozik interaktivlik bilan taqdim etuvchi portfolio veb-sayti.',
    'skills.eyebrow': 'Kiber xavfsizlik',
    'skills.title': 'Pentester ko‘nikmalari',
    'skills.skill1': 'Tarmoq & OS',
    'skills.skill2': 'Linux / Windows',
    'skills.skill3': 'Python / Bash',
    'skills.skill4': 'Active Directory',
    'skills.skill5': 'OWASP & Veb',
    'skills.skill6': 'Post-exploit',
    'skills.skill7': 'Evasion',
    'skills.skill8': 'Hisobotlash',
    'course.eyebrow': 'Kiber xavfsizlik',
    'course.title': 'Nimalarni bilaman?',
    'course.item1': 'Tarmoq protokollari va marshrutlash: TCP/IP, DNS, ARP, NAT, VPN, firewall',
    'course.item2': 'Operatsion tizimlar: Kali Linux, Parrot OS, Windows, Active Directory, PowerShell',
    'course.item3': 'Skriptlash va dasturlash: Python, Bash, PowerShell, C/C++, Go',
    'course.item4': 'Veb xavfsizligi: SQLi, XSS, SSRF, CSRF, IDOR va OWASP Top 10',
    'course.item5': 'Active Directory ekspluatatsiyasi va post-ekspluatatsiya texnikalari',
    'course.item6': 'Ijtimoiy muhandislik: phishing, baiting, pretexting',
    'course.item7': 'Evasion va yashirin operatsiyalar: aniqlanmaslik va trafik shifrlash',
    'course.item8': 'Skannerlar va vositalar: Nmap, Amass, Metasploit, Burp Suite, Cobalt Strike, Mimikatz',
    'course.item9': 'Hisobot tuzish va Blue Team bilan aloqa',
    'contact.eyebrow': 'Birgalikda yarataylik',
    'contact.title': 'Aloqa',
    'contact.description': 'Quyidagi tugmalar orqali menga tezda murojaat qiling. Xabar yoki maslahat uchun eng qulay usulni tanlang.',
    'contact.email': 'Email: azamatyashinovv@gmail.com',
    'contact.phone': 'Telefon: +998771599933',
    'contact.telegram': 'Telegram: @yashinov',
    'contact.linkedin': 'LinkedIn',
    'contact.cardTitle': 'Tezkor aloqa',
    'contact.cardText': 'Yuqoridagi tugmalar bilan to‘g‘ridan-to‘g‘ri yozing yoki qo‘ng‘iroq qiling. Loyihangizni ko‘rib chiqishga tayyorman.',
    'footer.text': '2026 © Azamat | Professional portfolio',
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
