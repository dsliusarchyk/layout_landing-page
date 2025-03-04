'use strict';

// Лог для перевірки, чи підключений main.js
console.log('✅ JS is working!');

// Отримуємо всі необхідні елементи
const body = document.body;
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.top-bar__burger');
const menuClose = document.querySelector('.menu__close');
const navMenu = document.querySelector('.nav-menu');
const menuTopBarLogo = document.querySelector('.menu .top-bar__logo');
const navMenuLinks = document.querySelectorAll('.nav-menu__link');

// Перевіряємо, чи всі елементи існують перед додаванням обробників подій
if (menu && menuOpen && menuClose && navMenu && menuTopBarLogo) {
  console.log('✅ Elements found!');

  menuOpen.addEventListener('click', () => {
    console.log('📌 Menu open clicked');
    menu.classList.add('menu--active');
    body.classList.add('no-scroll');
  });

  menuClose.addEventListener('click', () => {
    console.log('📌 Menu close clicked');
    menu.classList.remove('menu--active');
    body.classList.remove('no-scroll');
  });

  menuTopBarLogo.addEventListener('click', () => {
    console.log('📌 Menu logo clicked');
    menu.classList.remove('menu--active');
    body.classList.remove('no-scroll');
  });

  navMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('📌 Nav link clicked');
      menu.classList.remove('menu--active');
      body.classList.remove('no-scroll');
    });
  });
} else {
  console.error(
    '❌ One or more elements not found! Check your HTML structure.',
  );
}

// Додаємо зміну класу для хедера при скролі
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  });
} else {
  console.error('❌ Header not found!');
}
