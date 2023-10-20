// DOM öğelerine referans alın
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// Eğer mod localStorage'da zaten "Dark Mode" olarak ayarlanmışsa kontrol et
if (localStorage.getItem("mode") === "Dark Mode") {
  // "dark" sınıfını body'ye ekle ve modeSwitch metnini "Light Mode" olarak ayarla
  body.classList.add("dark");
  modeSwitch.textContent = "Açık Mod";
}

// modeSwitch'e tıklama olayı ekle
modeSwitch.addEventListener("click", () => {
  // body öğesindeki "dark" sınıfını değiştir
  body.classList.toggle("dark");
  // "dark" sınıfının şu anda body öğesinde olup olmadığını kontrol et
  const isDarkMode = body.classList.contains("dark");
  // "dark" sınıfının varlığına göre modeSwitch metnini ayarla
  modeSwitch.textContent = isDarkMode ? "Açık Mod" : "Koyu Mod";
  // "dark" sınıfının varlığına göre localStorage "mode" öğesini ayarla
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  // Geçerli zamanı al ve saat ibrelerinin derecelerini hesapla
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  // Saat ibrelerini geçerli zamana göre uygun dereceye döndür
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// Saat ibrelerini her saniye ayarlamak için updateTime'i çağırın
setInterval(updateTime, 1000);

// Sayfa yüklendiğinde updateTime fonksiyonunu çağır
updateTime();
