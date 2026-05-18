document.documentElement.classList.add('js');

const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('contactStatus');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const animateItems = document.querySelectorAll('.animate-item');

const TELEGRAM_BOT_TOKEN = '8510135669:AAE_fKui30qQLger3Agx6u3SklKs6ScQkeU';
// Replace YOUR_CHAT_ID with your Telegram chat id or channel username
const TELEGRAM_CHAT_ID = '7965100748';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

if (form && statusMessage) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim() || "Loyihangiz haqida batafsil ma'lumot yo'q.";

    if (!name || !phone) {
      statusMessage.textContent = 'Iltimos, ism va telefon raqamni kiriting.';
      return;
    }

    const text = `📩 Yangi bog'lanish:\nIsm: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

    statusMessage.textContent = 'Xabar yuborilyapti...';
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
        statusMessage.textContent = 'Xabaringiz muvaffaqiyatli yuborildi! Sizga tez orada javob beraman.';
        form.reset();
      } else {
        statusMessage.textContent = "Xabar yuborishda xato yuz berdi. Iltimos keyinroq qaytadan urinib ko'ring.";
        statusMessage.classList.add('error');
        console.error('Telegram API error:', data);
      }
    } catch (error) {
      statusMessage.textContent = "Tarmoq xatosi. Internet aloqangizni tekshiring.";
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
}

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
