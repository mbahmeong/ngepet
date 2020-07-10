let btnSend = document.getElementById('btn-send');

btnSend.addEventListener('click', resultNilai);

function resultNilai() {
   let hasilForm = document.getElementById('getNama').value;
   document.getElementById('result').innerHTML = `
   Hi <b> ${hasilForm} </b> , Thanks you for visited My Store, Happy shopping`;
   document.getElementById('result').style.display = 'block';
}

function myHamburger() {
   var btnNav = document.getElementById('collapses');

   if (btnNav.style.display === "block") {
      btnNav.style.display = "none";
   } else {
      btnNav.style.display = "block";
   }
}

let newBody1 = document.querySelector('#body1');
let newBody2 = document.querySelector('#body2');
let newBody3 = document.querySelector('#body3');
let newBody4 = document.querySelector('#body4');

newBody1.innerHTML = `<p>You can order product of Ngepet on this website, SMS, YM, e-mail, Blackberry Messenger by mentioning the desired product code.</p>`;

newBody2.innerHTML = `<p>Do It With Your Own Risk^^</p>`;

newBody3.innerHTML = `<p>My product is illegal hhe..</p>`;

newBody4.innerHTML = `<p>( 123 ) 456 - xxxx</p>`;
