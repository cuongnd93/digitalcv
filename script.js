'use strict';

//Phần nhập Email
const personForm = document.querySelector('.person-form');
const personInfor = document.querySelector('.person-infor');
const submit = document.querySelector('.submit1');
const messageEmail = document.querySelector('.message-email');

let regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Khi nhất nút submit
submit.addEventListener('click', function () {
  let textEmail = document.getElementById('email').value;

  let result = textEmail.match(regex);
  document.getElementById('email').innerHTML = result;
  console.log(result);
  if (result) {
    personForm.classList.toggle('hidden');
    personInfor.classList.toggle('hidden');
  } else {
    messageEmail.classList.remove('hidden');
  }
});

//Phần thông tin nghề nghiệp
const exp = document.querySelector('.exp');
const edu = document.querySelector('.edu');
const hobby = document.querySelector('.hobby');
const language = document.querySelector('.language');
const skl = document.querySelector('.skl');
const act = document.querySelector('.act');
const viewMore = document.querySelectorAll('.view');
const viewLess = document.querySelectorAll('.view1');
console.log(viewMore);

//Bỏ ẩn phần thông tin nghề nghiệp khi click viewMore

const openViewMore = function (i) {
  viewMore[i].classList.add('hidden');
  viewLess[i].classList.remove('hidden');
};

for (let i = 0; i < viewMore.length; i++) {
  viewLess[i];
  viewMore[i].addEventListener('click', function () {
    console.log(i);
    if (i === 0) {
      exp.classList.remove('hidden');
      openViewMore(i);
    } else if (i === 1) {
      edu.classList.remove('hidden');
      openViewMore(i);
    } else if (i === 2) {
      act.classList.remove('hidden');
      openViewMore(i);
    } else if (i === 3) {
      hobby.classList.remove('hidden');
      openViewMore(i);
    } else if (i === 4) {
      language.classList.remove('hidden');
      openViewMore(i);
    } else if (i === 5) {
      skl.classList.remove('hidden');
      openViewMore(i);
    }
  });

  //ẩn phần thông tin nghề nghiệp khi click viewLess
  viewLess[i].addEventListener('click', function () {
    if (i === 0) {
      exp.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    } else if (i === 1) {
      edu.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    } else if (i === 2) {
      act.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    } else if (i === 3) {
      hobby.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    } else if (i === 4) {
      language.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    } else if (i === 5) {
      skl.classList.add('hidden');
      viewLess[i].classList.add('hidden');
    }
  });
}
