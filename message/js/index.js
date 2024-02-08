this.$dom = {};
this.$dom.animatedText = document.createElement("div");
this.text =
  "Selamat ya Alin, keren sekali telah menyeminarkan hasil penelitiannya. Dari awal sebar kuisioner. Responden dari pegawai Bank yang kurang. Menjadi pengunjung tetap Orion beberapa bulan terakhir, makasi Orion. Dan kini lah masuk revisi se lai. Selamat yaa bub ♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ "; // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById("container");
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();

function animateText() {
  var arrayOfLetters = this.text.split("");
  var animatedSpan = [];
  arrayOfLetters.forEach(function (item) {
    var span = document.createElement("span");
    span.innerHTML = item;
    animatedSpan.push(span);
    span.style.opacity = 0;
    span.style.color = "white";
    this.$dom.animatedText.appendChild(span);
  });
  TweenMax.staggerTo(
    animatedSpan,
    0.2,
    {
      opacity: 1,
      delay: 2,
    },
    0.05
  );
}
