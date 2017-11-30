const DashboardModule = (function () {
  let options = {};
  let cardId = 0;

  const editTitle = function (element) {
    let currentTitle = element.innerText;

    element.firstElementChild.classList.add('hidden');
    element.lastElementChild.classList.remove('hidden');
    element.lastElementChild.value = currentTitle;
    element.lastElementChild.focus();
  };

  const blurTitle = function (element) {
    let newTitle = element.lastElementChild.value;

    element.firstElementChild.innerText = newTitle;
    element.firstElementChild.classList.remove('hidden');
    element.lastElementChild.classList.add('hidden');
  };

  const confirmTitle = function (element, e) {
    let key = e.which || e.keyCode;

      if (key === 13) {
        blurTitle(element);
      }
  };

  const hideAddCardBtn = function (element) {
    element.classList.add('hidden');
  };

  const showAddCardBtn = function (list) {
    list.find('.add-card-btn').removeClass('hidden');
  };

  const addNewCard = function () {
    const $newCardBtn = $('.new-card-btn');

    $newCardBtn.on('click', function (e) {
      e.preventDefault();

      const card = $(this).parent().parent();
      let cardInput = card.find('input');

      card.find('.card-title').toggleClass('hidden').text(cardInput.val());
      card.find('.remove-card').toggleClass('hidden');
      card.find('.card-editor').remove();

      showAddCardBtn(card.parent().parent());
    })
  };

  const removeCard = function () {
    const $removeCardBtn = $('.remove-card');

    $removeCardBtn.on('click', function (e) {
      e.preventDefault();

      let thisCardId = $(this).parent().attr('data-id');

      $(this).parent().remove();
    })
  };

  const cancelNewCard = function () {
    const $cancelCardBtn = $('.cancel-card-btn');

    $cancelCardBtn.on('click', function () {
      let thisCardId = $(this).parent().attr('data-id');

      showAddCardBtn($(this).parent().parent().parent().parent());
      $(this).parent().parent().remove();
    })
  };

  const addCard = function (element) {
    const card = `
      <div class="card" data-name="card" data-id="${cardId}">
        <p class="card-title hidden"></p>
        <button class="remove-card hidden"><img src="./images/bin.svg" alt="remove card"></button>
        <div class="card-editor">
          <input type="text" name="card-input">
          <button class="new-card-btn">Dodaj</button>
          <button class="cancel-card-btn"><img src="./images/cross.svg" alt="cancel"></button>
        </div>
      </div>`;

    element.previousElementSibling.insertAdjacentHTML('beforeend', card);
    cardId++;

    hideAddCardBtn(element);
    addNewCard();
    cancelNewCard();
    removeCard();
  };

  const addNewEvents = function (element) {
    const previousList = element.previousSibling.firstElementChild;
    previousList.firstElementChild.firstElementChild.addEventListener('click', function () {editTitle(previousList.firstElementChild)});
    previousList.firstElementChild.lastElementChild.addEventListener('blur', function () {blurTitle(previousList.firstElementChild)});
    previousList.firstElementChild.lastElementChild.addEventListener('keypress', function (e) {confirmTitle(previousList.firstElementChild, e)});
    previousList.lastElementChild.addEventListener('click', function () {addCard(previousList.lastElementChild)});
  };

  const addStep = function (element) {
    const step = `
      <div class="list-placeholder">
        <div class="list" data-name="list">
          <div class="list-header" data-name="list-header">
            <p class="list-title" data-name="list-title">Nowa lista</p>
            <input class="list-title-input hidden" data-name="list-title-input" type="text" name="" value="">
          </div>
          <div class="cards"></div>

          <button class="add-card-btn" data-name="add-card-btn" type="button" name="button"><img src="./images/plus.svg" alt="add card">Dodaj kartę</button>
        </div>
      </div>`;

    element.insertAdjacentHTML('beforebegin', step);
    addNewEvents(element);
  };

  const prepareElements = function () {
    const elements = options.dashboard.querySelectorAll('.list, .list-header, .list-title, .list-title-input, .add-card-btn, .add-step-btn');
    const forEach = function (array, callback, scope) {
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    forEach(elements, function(index, element) {
      const dataName = element.dataset.name;

      if (dataName.toUpperCase() === 'LIST-HEADER') {
        element.firstElementChild.addEventListener('click', function () {editTitle(element)});
        element.lastElementChild.addEventListener('blur', function () {blurTitle(element)});
        element.lastElementChild.addEventListener('keypress', function (e) {confirmTitle(element, e)});
      }

      if (dataName.toUpperCase() === 'ADD-CARD-BTN') {
        element.addEventListener('click', function () {addCard(element)});
      }

      if (dataName.toUpperCase() === 'ADD-STEP-BTN') {
        element.addEventListener('click', function () {addStep(element)});
      }

    });
  };

  const init = function (_options) {
    options = {
      dashboard: _options.dashboard || null
    }

    if ( options.dashboard === null || options.dashboard === undefined || options.dashboard.length === 0 ) {
      console.warn('DashboardModule: Źle przekazany dashboard');
      return false;
    }

    prepareElements();
  };

  return {
    init: init
  };

})();

document.addEventListener('DOMContentLoaded', function () {
  const dashboard = document.querySelector('.dashboard');
  DashboardModule.init({dashboard: dashboard});
});
