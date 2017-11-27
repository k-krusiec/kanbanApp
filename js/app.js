(function() {
  const kanban = document.querySelector('.main-container');
  const steps = kanban.querySelectorAll('.step');
  const card = kanban.querySelectorAll('.card');
  const addCard = kanban.querySelectorAll('a');
  const newCard = `<div class="card"><p>card title</p></div>`;

  console.log(kanban);
  console.log(steps);
  console.log(card);
  console.log(addCard);

  for (let i = 0, len = addCard.length; i < len; i++) {
    addCard[i].addEventListener('click', function () {
      this.previousElementSibling.insertAdjacentHTML('beforeend', newCard);
      console.log(this.previousElementSibling);
    })
  }
})();
