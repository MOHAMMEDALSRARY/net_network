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
