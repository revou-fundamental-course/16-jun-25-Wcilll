document.addEventListener("DOMContentLoaded", function () {
  const segitiga = document.getElementById("segitiga");
  const jajarGenjang = document.getElementById("jajar-genjang");

  document
    .querySelector('a[href="#segitiga"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      segitiga.classList.remove("hidden");
      jajarGenjang.classList.add("hidden"); // Sembunyikan yg lain
      segitiga.scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector('a[href="#jajar-genjang"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      jajarGenjang.classList.remove("hidden");
      segitiga.classList.add("hidden"); // Sembunyikan yg lain
      jajarGenjang.scrollIntoView({ behavior: "smooth" });
    });
});
// Menambahkan event listener untuk tombol "Kembali ke Atas"

document.addEventListener("DOMContentLoaded", function () {
  const formSegitiga = document.getElementById("form-segitiga");
  const formJajarGenjang = document.getElementById("form-jajar-genjang");

  const segitigaSection = document.getElementById("segitiga");
  const jajarGenjangSection = document.getElementById("jajar-genjang");

  const jawabanSegitiga = 40;
  const jawabanJajarGenjang = 252;

  // SEGITIGA
  formSegitiga.addEventListener("submit", function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const hasil = 0.5 * alas * tinggi;

    if (hasil === jawabanSegitiga) {
      alert("Jawaban benar!");

      // Pindah ke soal berikutnya (Jajar Genjang)
      segitigaSection.classList.add("hidden");
      jajarGenjangSection.classList.remove("hidden");
      jajarGenjangSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Kurang tepat, coba lagi!");
    }
  });

  // JAJAR GENJANG
  formJajarGenjang.addEventListener("submit", function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById("alas-jg").value);
    const tinggi = parseFloat(document.getElementById("tinggi-jg").value);
    const hasil = alas * tinggi;

    if (hasil === jawabanJajarGenjang) {
      alert("Jawaban benar!");
      // Di sini kamu bisa lanjut ke soal selanjutnya lagi atau tampilkan pesan akhir
    } else {
      alert("Kurang tepat, coba lagi!");
    }
  });
});
