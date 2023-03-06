const validateForm = () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const option = document.getElementById("interest").value;

  if (nama === "") {
    alert("Harap masukan nama anda");
  } else if (email === "") {
    alert("Harap masukan email anda");
  } else if (option === "") {
    alert("Harap pilih salah satu ketertarikan anda");
  } else {
    alert("Pesan Terkirim. Terimakasih telah menghubungi kami");
  }
};
