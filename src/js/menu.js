(function () {

  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#header__menu-wrapper');
  const close = document.querySelector('#close');
  
  burger.addEventListener('click', function () {
    menu.classList.toggle('is-shown__menu');
  });

  close.addEventListener('click', function () {
    menu.classList.toggle('is-shown__menu');
  });

})();

(function () {

  const langswitcher = document.querySelector('#langswitcher');
  const activeUa = document.querySelector('#uk');
  const activeRu = document.querySelector('#ru');
  const activeEn = document.querySelector('#en');
  
  activeUa.addEventListener('click', function () {
    activeUa.classList.toggle('is-active_ua');
    activeRu.classList.remove('is-active_ru');
    activeEn.classList.remove('is-active_en');
   
  });

  activeRu.addEventListener('click', function () {
    activeUa.classList.remove('is-active_ua');
    activeRu.classList.toggle('is-active_ru');
    activeEn.classList.remove('is-active_en');
   
  });

  activeEn.addEventListener('click', function () {
    activeUa.classList.remove('is-active_ua');
    activeRu.classList.remove('is-active_ru');
    activeEn.classList.toggle('is-active_en');
   
  });

  (function () {

    const itemCons = document.querySelector('#item-cons');
    const itemCust = document.querySelector('#item-cust');
    const itemInno = document.querySelector('#item-inno');
    const itemBusi = document.querySelector('#item-busi');

    itemCons.addEventListener('click', function () {
      itemCons.classList.toggle('is-active-item_cons');
      itemCust.classList.remove('is-active-item_cust');
      itemInno.classList.remove('is-active-item_inno');
      itemBusi.classList.remove('is-active-item_busi');
    });

    itemCust.addEventListener('click', function () {
      itemCons.classList.remove('is-active-item_cons');
      itemCons.classList.remove('is-active-item');
      itemCust.classList.add('is-active-item_cust');
      itemInno.classList.remove('is-active-item_inno');
      itemBusi.classList.remove('is-active-item_busi');
    });

    itemInno.addEventListener('click', function () {
      itemCons.classList.remove('is-active-item_cons');
      itemCons.classList.remove('is-active-item');
      itemCust.classList.remove('is-active-item_cust');
      itemInno.classList.add('is-active-item_inno');
      itemBusi.classList.remove('is-active-item_busi');
    });

    itemBusi.addEventListener('click', function () {
      itemCons.classList.remove('is-active-item_cons');
      itemCons.classList.remove('is-active-item');
      itemCust.classList.remove('is-active-item_cust');
      itemInno.classList.remove('is-active-item_inno');
      itemBusi.classList.add('is-active-item_busi');
    });
  })();
})();