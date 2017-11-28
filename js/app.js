const DashboardModule = (function () {
  let options = {};

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

  const prepareElements = function () {
    const elements = options.dashboard.querySelectorAll('.list, .list-header, .list-title, .list-title-input, .add-card-btn');

    // console.log(elements[0].dataset.name);

    const forEach = function (array, callback, scope) {
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    forEach(elements, function(index, element) {
      const dataName = element.dataset.name;

      // console.log(dataName);

      if (dataName.toUpperCase() === 'LIST-HEADER') {
        element.firstElementChild.addEventListener('click', function () {editTitle(element)});
        element.lastElementChild.addEventListener('blur', function () {blurTitle(element)});
        element.lastElementChild.addEventListener('keypress', function (e) {confirmTitle(element, e)});
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
