'use strict'

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // effect: "cube",
  // grabCursor: true,
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const wrap = document.querySelector('.emp-list');
let btns = document.querySelectorAll('.employee__info');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup-close');

class EmployeeItem {
  constructor(title, src, alt, prof, desc, workWith, dontWork, price, id, parentSelector) {
    this.title = title;
    this.src = src;
    this.alt = alt;
    this.prof = prof;
    this.desc = desc;
    this.workWith = workWith;
    this.dontWork = dontWork;
    this.price = price;
    this.id = id;
    this.parent = document.querySelector(parentSelector);
    // this.classes = classes;
  }

  render() {
    const elem = document.createElement('div');
            elem.classList.add('card');
            elem.innerHTML = `
              <h2 className="card__title">${this.title}</h2>
              <img src=${this.src} alt=${this.alt}>
              <p className="card__prof">${this.prof}</p>
              <p className="card__description">${this.desc}</p>
              <p className="card__work">${this.workWith}</p>
              <p className="card__notwork">${this.dontWork}</p>
              <p className="card__price">${this.price}</p>`;
            this.parent.append(elem);
  }
}

let irina = new EmployeeItem(
  "Ирина Слученкова",
  "img/irina.jpg",
  "Фото специалиста",
  "Клинический психолог",
  `В 2016 году закончила бакалавриат в ФГБОУ ВО "НИ МГУ им. Н. П. Огарёва" по специальности "Психология", в 2018 году защитила магистерскую диссертацию. Дополнительно обучалась работе в КПТ-подходе (2019 г.), методам арт-терапии (2019 г.), экзистенциальному подходу в работе с кризисами (2017 г.), работе с детьми и подростками.
  Школа ППЧ (2020г.).
  С 2016 года работаю в школе психологом с подростками 5-11 классов.
  Есть опыт работы с трудными подростками и детьми с ОВЗ.
  Есть опыт проведения тренингов для начинающих моделей в модельной школе.
  С 2018 года веду частную практику.
  Работаю со взрослыми и подростками с 12 лет.
  Я верю в то, что клиент сам знает ответы на свои вопросы. Нужно просто научиться слышать и понимать самого себя, жить в гармонии с самим собой, не мучаясь бесконечным потоком непродуктивных мыслей. Нужно и возможно любить самого себя и строить здоровые отношения.
  Я смогу помочь - каждый из нас иногда нуждается в поддержке.`,
  `Работаю с:

    - проблемами с самооценкой, неуверенностью в себе;
    - эмоциональными проблемами (чувство вины, обида, раздражительность);
    - внутренними конфликтами, сложностями в понимании себя и своих желаний;⠀
    - тревожностью, страхами;
    - трудностями во взаимоотношениях;
    - детско-родительскими отношениями;
    - неудовлетворенностью жизнью, местом в ней, поиск смысла;
    - проблемами самоопределения, трудностями в постановке целей;⠀
    - переживанием горя, утраты.`,
  `Не работаю:

    - с клиентами, имеющими психиатрический диагноз;⠀
    - с химическими зависимостями;⠀
    - с сексуальными расстройствами;
    - с детьми до 12 лет.`,
  `Цена консультации в Skype (50 минут) - 2500₽.`,
  "irina",
  ".popup",
  );
let lelya = new EmployeeItem(
  "Лёля Денисова",
  "img/lelya.jpg",
  "Фото специалиста",
  "Клинический психолог",
  `Белорусский государственный педагогический университет имени М. Танка (БГПУ), факультет психологии, психолог;
  Ассоциация когнитивно-поведенческой психотерапии (Член Ассоциации КПТ);
  Институт психотерапии и консультирования "Гармония", Программа подготовки консультантов экстренной психологической помощи;
  Образовательный проект ППЧ "Школа молодых психологов";
  • Психолог команды @yakuana по созданию инфопродуктов
  • Психолог в проекте "Социальный кабинет"
  • Консультант-психолог экстренной психологической помощи на телефоне.
  • Частная практика с 2020 г.
  Работаю в КПТ и интегративном подходе в зависимости от запроса и в интересах клиента.
  Прохожу супервизии, интервизии, личную терапию и состою в профессиональном сообществе.
  Приходите:
    ▪️если Вы запутались и не видите смысла
    ▪️если Вам сложно или больно
    ▪️если у Вас проблемы в отношениях с близкими
    ▪️если Вы не довольны собственной жизнью, ее качеством, возможностями или результатами.
  Открываться, проживать, чувствовать - это то, что происходит в психотерапии.
  И это то, что исцеляет.
  И я могу быть в этом с Вами рядом.`,
  `Работаю:
  - тревожно-депрессивные состояния
  - нестабильность самооценки
  - внутренние конфликты
  - проблемы в отношениях с собой и другими
  - сложности выбора, принятия решения
  - поиск себя, вопросы самоопределения
  - проживание кризиса
  - потеря смысла, одиночество`,
  `Не работаю:
  - дети, подростки, пары
  - люди с психиатрическими диагнозами
  - высокие суицидальные риски`,
  ` - Цена очной консультации в Санкт-Петербурге (55минут) - 3350₽
  - Цена онлайн консультации в Skype (55 минут) - 3000₽`,
  "lelya",
  ".popup",
);
let darya = new EmployeeItem(
  "Дарья Мальцева",
  "img/darya.jpg",
  "Фото специалиста",
  "Клинический психолог",
  `В 2017 году закончила магистратуру «Урегулирование конфликтов посредством переговоров (конфликтология)» (СПбГУ), после которой я поняла, что следующий шаг - стать психологом.

  Повышение квалификации:
  1.Медиация. Базовый курс (2018)
  2.Письменное консультирование подростков в сложных жизненных ситуациях (волонтёрство) (2020)
  3.Психологическое консультирование и психокоррекция (проф.переподготовка, 2021)
  4.Школа ППЧ (2021)`,
  `С чем обратиться:

  -Проблемы с самооценкой и принятием себя
  -Непонимание, что происходит, ощущение тупика, потери ориентиров
  -Переживание непростой жизненной ситуации
  -Сложности с самоопределением
  -Трудности с принятием решений
  -Сложности в общении`,
  `Не работаю с:
  1. Детьми и подростками
  2. Людьми, имеющими психиатрический диагноз

  На мой взгляд, самое важное - чтобы клиент смог услышать, почувствовать и принять себя
  Прохожу личную терапию и супервизию, участвую в интервизорских группах.`,
  "Цена онлайн консультации 1500₽",
  "darya",
  ".popup",
);

let data = [];

data.push(irina, lelya, darya);

function renderPopup(target) {

  data.forEach((item) => {
    if (target.dataset.type === item.id) {
      item.render();
      document.body.style.overflow = 'hidden';
      item.parent.classList.remove('close');
      item.parent.classList.remove('modal_hide');
    }
  });
}

closePopup.addEventListener('click', removePopup)

function removePopup() {
    while (popup.children[1]) {
      popup.removeChild(popup.lastChild);
    }

    popup.classList.add('modal_hide');
    document.body.style.overflow = '';

    let timer = setTimeout(() => {
      popup.classList.add('close');
    }, 500);
}

document.addEventListener('keydown', (evt) => {
  if(evt.code === 'Escape' && popup.classList.length < 2) {
    removePopup();
  }
});

function btnHandler() {
  wrap.addEventListener('click', function(event) {
    let target = event.target;
    renderPopup(target);
  });
}

btnHandler();
