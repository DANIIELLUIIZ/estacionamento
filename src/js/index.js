let content = document.querySelector('.content')
let carPlate = document.getElementById('car.plate')
let carModel = document.getElementById('car.model')
let carColor = document.getElementById('car.color')
let carConductor = document.getElementById('car.conductor')
let carPhone = document.getElementById('car.phone')
let btnInsertCar = document.getElementById('car.insert')
let carControl = document.querySelector('.car-control')

// ======== Funcoes
class Car {
  constructor(plate, model, color, conductor, phone) {
    this.plate = plate
    this.model = model
    this.color = color
    this.conductor = conductor
    this.phone = phone
  }
}

function getCar() {
  const PLATE = getPlate()
  const MODEL = carModel.value
  const COLOR = carColor.value
  const CONDUCTOR = carConductor.value
  const PHONE = getPhone()

  const car = new Car(PLATE, MODEL, COLOR, CONDUCTOR, PHONE)

  if (
    PLATE == '' ||
    MODEL == '' ||
    COLOR == '' ||
    CONDUCTOR == '' ||
    PHONE == ''
  ) {
    window.alert('Existem campos vazios')
    e.preventDefault()
  } else if (PHONE.length < 11) {
    window.alert(
      'O telefone informado parecer ter mais ou menos números que o padrão: ("2199999-9999").'
    )
    e.preventDefault()
  } else {
    createCar(car)
  }
}
//tenho que fazer funcionar ainda
function getPlate() {
  let plate = carPlate.value.replace(/^(\w{3})(\w{4})/, '$1-$2')

  return plate
}

function getPhone() {
  const phone = carPhone.value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

  return phone
}
function showConductor(element) {
  let carControl = element.parentElement
  let car = carControl.parentElement
  let carInfo = car.children[1]
  carInfo.classList.toggle('hide')
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
  carPlate.value = ''
  carModel.value = ''
  carColor.value = ''
  carConductor.value = ''
  carPhone.value = ''
})

document.addEventListener('click', e => {
  const element = e.target

  if (element.classList.contains('delete-car')) {
    deleteCar(element)
  } else if (element.classList.contains('finish-car')) {
    console.log('carro finalizado')
  } else if (element.classList.contains('conductor-car')) {
    showConductor(element)
  }
})
