// إظهار العناصر تدريجيًا عند التمرير
const animatedElements = document.querySelectorAll(
    '.plan-card, .feature-box, .step, .section-title'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach((element) => {
    element.classList.add('hidden');
    observer.observe(element);
});


// تأثير ترحيبي في وحدة التحكم
console.log("مرحباً بك في موقع شبكة نت 🌐");
console.log("إنترنت يربطك بالمستقبل ⚡");


// تأثير حركة بسيطة عند الضغط على الأزرار
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        button.style.transform = 'scale(0.95)';

        setTimeout(() => {
            button.style.transform = '';
        }, 200);

    });

});

// تشغيل قائمة الهاتف
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
mainNav.classList.toggle("active");

if (mainNav.classList.contains("active")) {
    menuToggle.textContent = "✕";
} else {
    menuToggle.textContent = "☰";
}

});

// إغلاق القائمة بعد الضغط على أحد الروابط
mainNav.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
mainNav.classList.remove("active");
menuToggle.textContent = "☰";
});
});

// تحريك أرقام الإحصائيات
const counters = document.querySelectorAll(".counter");

const statsObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const counter = entry.target;
const target = Number(counter.dataset.target);
const duration = 2000;
const startTime = performance.now();

        function updateCounter(currentTime) {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const currentNumber = Math.floor(target * progress);
            counter.textContent = currentNumber;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
    }
});

}, {
threshold: 0.5
});

counters.forEach(counter => {
statsObserver.observe(counter);
});
// Developer Name Animation
const developerName = document.querySelector('.developer-name');

if (developerName) {
    const developerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                developerName.classList.add('show');
                developerObserver.unobserve(developerName);
            }
        });
    });

    developerObserver.observe(developerName);
}
