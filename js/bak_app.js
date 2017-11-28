(function() {



  const editTitle = (e) => {
    let target = e.target;
    let titleInput = e.target.parentNode.children[1];

    console.log(target);
    console.log(titleInput);

    target.classList.add('hidden');
    titleInput.value = target.innerText;
    titleInput.classList.remove('hidden');
    titleInput.focus();

  };

  const inne = () => {
    console.log('inne');


  };



  const eventDetect = () => {
    const lists = document.querySelectorAll('.list');

    for (let i = 0, len = lists.length; i < len; i++) {
      lists[i].firstElementChild.addEventListener('click', editTitle);
      lists[i].firstElementChild.addEventListener('blur', inne);
    }
  };

  eventDetect();



  // const list = document.querySelector('.list');
  // const newCardEditor = `
  //   <div class="card">
  //     <div class="card-editor">
  //       <input class="card-input" type="text" name="" value="">
  //       <button class="card-confirm" type="button" name="button">Dodaj</button>
  //       <button class="card-abort" type="button" name="button">X</button>
  //     </div>
  //   </div>`
  //
  // const setListTitle = () => {
  //   // const list = document.querySelector('.list');
  //   const listTitle = list.querySelector('.list-title');
  //   const listTitleInput = list.querySelector('.list-title-input');
  //   let title = '';
  //
  //   const editTitle = () => {
  //     title = listTitle.innerText;
  //
  //     listTitleInput.value = title;
  //     listTitle.classList.add('hidden');
  //     listTitleInput.classList.remove('hidden');
  //     listTitleInput.focus();
  //   }
  //
  //   const setNewTitle = () => {
  //     title = listTitleInput.value;
  //
  //     listTitle.innerText = title;
  //     listTitle.classList.remove('hidden');
  //     listTitleInput.classList.add('hidden');
  //   }
  //
  //   const enterNewTitle = (e) => {
  //     let key = e.which || e.keyCode;
  //
  //     if (key === 13) {
  //       setNewTitle();
  //     }
  //   }
  //
  //   listTitle.addEventListener('click', editTitle);
  //   listTitleInput.addEventListener('blur', setNewTitle);
  //   listTitleInput.addEventListener('keypress', enterNewTitle);
  //
  // }
  //
  // const setNewCard = (addCardBtn) => {
  //   const cardConfirm = list.querySelector('.card-confirm');
  //
  //   cardConfirm.addEventListener('click', function () {
  //     const card = list.querySelector('card');
  //     const cardEditor = list.querySelector('.card-editor');
  //     const cardInput = list.querySelector('.card-input');
  //
  //     addCardBtn.classList.remove('hidden');
  //   })
  //
  //
  // }
  //
  // const addCard = () => {
  //   const addCardBtn = list.querySelector('.add-card-btn');
  //   addCardBtn.addEventListener('click', function () {
  //     addCardBtn.classList.add('hidden');
  //     list.lastElementChild.insertAdjacentHTML('beforebegin', newCardEditor);
  //     setNewCard(addCardBtn);
  //   })
  // }
  //
  // setListTitle();
  // addCard();








  // const kanban = document.querySelector('.main-container');
  // const steps = kanban.querySelectorAll('.step');
  // const card = kanban.querySelectorAll('.card');
  // const addCard = kanban.querySelectorAll('.add-card-btn');
  // const newCard = `<div class="card"><p>card title</p></div>`;
  // const newStep = `<div class="step"><p>Title</p><div class="list"></div><a class="add-card-btn" href="#">add card</a></div>`;
  // const addStep = kanban.querySelector('.add-step-btn');
  //
  //
  //
  // for (let i = 0, len = addCard.length; i < len; i++) {
  //   addCard[i].addEventListener('click', function () {
  //     this.previousElementSibling.insertAdjacentHTML('beforeend', newCard);
  //     console.log(this.previousElementSibling);
  //   })
  // }
  //
  // addStep.addEventListener('click', function () {
  //   console.log(this.parentNode);
  //   this.previousElementSibling.insertAdjacentHTML('afterEnd', newStep);
  // })
})();
