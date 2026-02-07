// Main JavaScript for Stroy-Master Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lead Form Handling
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'ОТПРАВЛЯЕМ...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Спасибо! Ваша заявка принята. Наш эксперт свяжется с вами в течение 15 минут.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                leadForm.reset();
            }, 1500);
        });
    }

    // 2. Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.contains('active') ? null : item.classList.add('active');
            }
        });
    });
});
