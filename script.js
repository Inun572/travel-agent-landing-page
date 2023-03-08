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

var slideIndex = 1;

let imgList = document.getElementsByClassName('img-slide');

const slider = () => {
  // imgList[slideIndex].classList.add('active');
  if (slideIndex > imgList.length-1) {
    slideIndex = 0;
  } else {
    imgList[slideIndex].classList.add('active');
    console.log(imgList[slideIndex]);
    slideIndex++;
  }

  imgList[slideIndex].classList.remove('active');

  console.log(imgList[slideIndex]);
}

setInterval( () => {
  slider();
}, 3000)
