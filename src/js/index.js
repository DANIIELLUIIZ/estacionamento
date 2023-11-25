const content = document.querySelector('.content')
const btnInsertCar = document.getElementById('car.insert')
const carControl = document.querySelector('.car-control')

class Car {
  constructor(plate, model, color, conductor, phone) {
    this.plate = plate
    this.model = model
    this.color = color
    this.conductor = conductor
    this.phone = phone
  }
}

// ======== Funcoes
function getCar() {
  const carPlate = document.getElementById('car.plate').value
  const carModel = document.getElementById('car.model').value
  const carColor = document.getElementById('car.color').value
  const carConductor = document.getElementById('car.conductor').value
  const carPhone = document.getElementById('car.phone').value
  let id = 0

  let car = new Car(carPlate, carModel, carColor, carConductor, carPhone)

  createCar(car)
}

function createCar(car) {
  content.innerHTML += `<div class="car">
  <div class="box">
    <span>entrada</span>
    <p class="time">08:00</p>
  </div>
  <div class="car-info">
    <div class="box">
      <span>placa</span>
      <p>${car.plate}</p>
    </div>
    <div class="box">
      <span>Marca/modelo</span>
      <p>${car.model}</p>
    </div>
    <div class="box">
      <span>cor</span>
      <p>${car.color}</p>
    </div>
  </div>
  <div class="conductor-info">
    <div class="box">
      <span>name</span>
      <p>${car.conductor}</p>
    </div>

    <div class="box">
      <span>contato</span>
      <p>${car.phone}</p>
    </div>
  </div>
  <div class="car-control">
    <button class="conductor-car">
      <i class="fa-solid fa-user"></i>
    </button>
    <button class="delete-car">
      <i class="fa-solid fa-x"></i>
    </button>
    <button class="finish-car">
      <i class="fa-solid fa-check"></i>
    </button>
  </div>
</div>`
}

function deleteCar(element) {
  let carControl = element.parentElement
  let car = carControl.parentElement

  if (car.classList.contains('car')) {
    car.remove()
  }
}




// ========== Eventes


btnInsertCar.addEventListener('click', e => {
  e.preventDefault()
  getCar()
})

document.addEventListener('click', e => {
  const element = e.target
  if (element.classList.contains('delete-car')) {
    deleteCar(element)
  }
  else if(element.classList.contains('finish-car')){
    console.log("carro finalizado")
  }
})
