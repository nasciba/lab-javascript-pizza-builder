// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}


function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePepperoni => {
    if (state.pepperoni) {
      onePepperoni.style.visibility = 'visible';
    } else {
      onePepperoni.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
        if (state.mushrooms) {
            oneMushroom.style.visibility = 'visible';
        } else {
            oneMushroom.style.visibility = 'hidden';
        }
    
    })
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
        if (state.greenPeppers) {
            oneGreenPepper.style.visibility = 'visible';
        } else {
            oneGreenPepper.style.visibility = 'hidden';
        }  
    })
}

function renderWhiteSauce() {
    let whiteSauce = document.querySelector('.sauce.sauce-white')
        if(state.whiteSauce) {
            whiteSauce.style.visibility = 'visible';
        } else {
            whiteSauce.style.visibility = 'hidden';
        }
    
}

function renderGlutenFreeCrust() {
    let crust = document.querySelector('.crust')
        if(state.glutenFreeCrust) {
            crust.classList.add('crust-gluten-free')
        } else {
            crust.classList.remove('crust-gluten-free') 
        }
    
}

function renderButtons() {
    let btnPeperoni = document.querySelector('.btn.btn-pepperonni');
    if (state.pepperoni) {
        btnPeperoni.classList.add('active');
    } else {
        btnPeperoni.classList.remove('active');
    }
    let btnMushroom = document.querySelector('.btn.btn-mushrooms');
    if (state.mushrooms) {
        btnMushroom.classList.add('active');
    } else {
        btnMushroom.classList.remove('active');
    }
    let btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
    if (state.greenPeppers) {
        btnGreenPeppers.classList.add('active');
    } else {
        btnGreenPeppers.classList.remove('active');
    }
    let btnWhiteSouce = document.querySelector('.btn.btn-sauce')
    if (state.whiteSauce) {
        btnWhiteSouce.classList.add('active');
    } else {
        btnWhiteSouce.classList.remove('active')
    }
    let btnCrust = document.querySelector('.btn.btn-crust')
    if (state.glutenFreeCrust) {
        btnCrust.classList.add('active');
    } else {
        btnCrust.classList.remove('active')
    }       
}

function renderPrice() {
    let pepperoni = ingredients.pepperoni.price;
    if (!state.pepperoni) {
        pepperoni = 0;
    } else {
        pepperoni = 1;
    }
    let mushrooms = ingredients.mushrooms.price;
    if (!state.mushrooms) {
        mushrooms = 0;
    } else {
        mushrooms = 1;
    }
    let greenPepper = ingredients.greenPeppers.price;
    if (!state.greenPeppers) {
        greenPepper = 0;
    } else {
        greenPepper = 1;
    }
    let whiteSouce = ingredients.whiteSauce.price;
    if(!state.whiteSauce) {
        whiteSouce = 0;
    }
    else {
        whiteSouce = 3;
    }
    let glutenFreeCrust = ingredients.glutenFreeCrust.price;
    if(!state.glutenFreeCrust) {
        glutenFreeCrust = 0;
    }
    else {
        glutenFreeCrust = 5;
    }
    
    let total = pepperoni + mushrooms + greenPepper + whiteSouce +  glutenFreeCrust + 10;
    
    let panel = document.querySelector('aside');
    
    panel.innerHTML = `<h2>Your pizza's price</h2>
    <b>$10 cheese pizza</b>
    <ul>
      <li>$${pepperoni} pepperonni</li>
      <li>$${mushrooms} mushrooms</li>
      <li>$${greenPepper} green peppers</li>
      <li>$${whiteSouce} white sauce</li>
      <li>$${glutenFreeCrust} gluten-free crust</li>
    </ul>
    <strong>$${total}</strong>`
    
    const pizza = document.querySelector('.pizza')
    document.body.insertBefore(panel, pizza)    
    
}

renderEverything();

document.querySelector('.btn.btn-pepperonni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
})

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
})

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything()
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything()
})

