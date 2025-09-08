// بعد 5 ثواني نخفي الفيديو ونظهر المحتوى
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}, 5000);