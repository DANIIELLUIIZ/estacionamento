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

//((horas * 60 + minutes) / 60) * 15
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
      'O telefone informado parece ter mais, ou menos números que o padrão: ("2199999-9999").'
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

function finishCar(element) {
  // pega a hora de saída do veiculo
  const date = new Date()
  const horas = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  //faz a juncao dos dois por ponto, para poder realizar o calculo e receber o valor em minutos
  let finish = horas + '.' + minutes
  // pega o valor da hora de entrada do elemento que foi clicado
  let carControl = element.parentElement //pai do elemento clicado
  let car = carControl.parentElement
  let carInfo = car.children[0]
  let box = carInfo.children[0]
  let timeBox = box.children[1]
  //trocar o dois pontos por ponto, também parece realizar a operacao que recebe os minutos
  let start = timeBox.textContent.replace(':', '.')
  //faz o calculo da diferenca entre os minutos de saída com o de entrada, assim multiplicando pelo valor hora do estacionamento(15 reais) que foi dividos por minutos hora.
  let finalValue = ((finish - start) * 15).toFixed(2)
  //Mostra o tempo que o carro ficou
  let carHour = (finish - start).toFixed(2)

  window.alert(
    `O valor a ser pago pela permanência de ${carHour} horas é de R$${finalValue}`
  )
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

// ========== Events

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
    finishCar(element)
  } else if (element.classList.contains('conductor-car')) {
    showConductor(element)
  }
})
