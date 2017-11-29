const DashboardModule = (function () {
  let options = {};
  let cardId = 0;

  const editTitle = function (element) {
    let currentTitle = element.innerText;

    element.firstElementChild.classList.add('hidden');
    element.lastElementChild.classList.remove('hidden');
    element.lastElementChild.value = currentTitle;
    element.lastElementChild.focus();
  }

  const blurTitle = function (element) {
    let newTitle = element.lastElementChild.value;

    element.firstElementChild.innerText = newTitle;
    element.firstElementChild.classList.remove('hidden');
    element.lastElementChild.classList.add('hidden');
  }

  const confirmTitle = function (element, e) {
    let key = e.which || e.keyCode;

        if (key === 13) {
          blurTitle(element);
        }
  }

  const removeCard = function () {
    const $removeCardBtn = $('.remove-card');

    $removeCardBtn.on('click', function (e) {
      let thisCardId = $(this).parent().attr('data-id');

      e.preventDefault();
      $(this).parent().remove();
    })

  }

  const addCard = function (element) {
    console.log(element.parentNode);
    const card = `
      <div class="card" data-name="card" data-id="${cardId}">
        <p class="card-title"> title </p>
        <button class="remove-card">X</button>
      </div>`;
      // <input type="text" name="card-input">
      // <button class="add-card-btn">Dodaj</button>
      // <button class="abort-card-btn">X</button>

    element.insertAdjacentHTML('beforebegin', card);
    cardId++;
    
    removeCard();
  }


  const prepareElements = function () {
    const elements = options.dashboard.querySelectorAll('.list, .list-header, .list-title, .list-title-input, .add-card-btn');

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

    });
  };

  const init = function (_options) {
    options = {
      dashboard: _options.dashboard || null
    }

    if ( options.dashboard === null || options.dashboard === undefined || options.dashboard.length === 0 ) {
      console.warn('DashboardModule: Źle przekazany dashboardularz');
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
})
