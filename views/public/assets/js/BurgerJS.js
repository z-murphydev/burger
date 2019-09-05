const addBtn = document.getElementById('burger-btn');

addBtn.addEventListener('click', (e) => {
    const burger = document.getElementById('burger_input').value;

    if(!burger) {
        alert('Please enter a burger name!');
        return;
    }

    makeBurger(burger);
})

function makeBurger(str) {

    const body = {burgerName: str};
    console.log(body);
    fetch('/create', {
       method: 'POST',
       headers:{
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(body),
    }).then(() => window.location.reload())
    .catch((err) => console.log(err));
}

const notEatenDiv = document.getElementById('notEaten');

notEatenDiv.addEventListener('click', (e) => {

    if(e.target.classList[0] !== 'btn') {
        return;
    } else {
        updateBurger(e.target.dataset.burger);
    }
})

function updateBurger(id) {
    const body = {
        id: id,
    }

    fetch('/update', {
        method: 'PUT',
        headers:{
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
     }).then(() => window.location.reload())
     .catch((err) => console.log(err));
}