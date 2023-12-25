let content = document.querySelector('.content')
let carPlate = document.getElementById('car.plate')
let carModel = document.getElementById('car.model')
let carColor = document.getElementById('car.color')
let carConductor = document.getElementById('car.conductor')
let carPhone = document.getElementById('car.phone')
let btnInsertCar = document.getElementById('car.insert')
let carControl = document.querySelector('.car-control')

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
  // pegando os valores passados
  const PLATE = getPlate()
  const MODEL = carModel.value
  const COLOR = carColor.value
  const CONDUCTOR = carConductor.value
  const PHONE = getPhone()
  //cria um novo carro com os valores passados
  const car = new Car(PLATE, MODEL, COLOR, CONDUCTOR, PHONE)
  // validacoes de input
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

//recebe e formata a placa para o padrao brasileiro/
function getPlate() {
  let plate = carPlate.value.replace(/^(\w{3})(\w{4})/, '$1-$2')
  //falta fazer para o padrao mercosul
  return plate
}
//reebe e formata o número de telefone recebido no input
function getPhone() {
  const phone = carPhone.value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

  return phone
}
// finaliza o tempo de permanencia do carro
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
  let start = timeBox.textContent.replace(':', '.') * 60
  // difenreca entre a entrada e saída
  let timeDiference = finish * 60 - start
  let timeParking = (timeDiference / 60).toFixed(2)
  let valueParking = (timeParking * 15).toFixed(2)

  alert(
    `O valor a ser pago pela permanência de ${timeParking} é de R$ ${valueParking}`
  )
}
// mostra os dados do condutor do veiculo
function showConductor(element) {
  let carControl = element.parentElement
  let car = carControl.parentElement
  let carInfo = car.children[1]
  carInfo.classList.toggle('hide')
}
// apaga o carro
function deleteCar(element) {
  let carControl = element.parentElement
  let car = carControl.parentElement

  if (car.classList.contains('car')) {
    car.remove()
  }
}

function disableCheckBtn(element) {
  element.classList.add('check')
}
// ========== Events ==========================//
//insere o veiculo
btnInsertCar.addEventListener('click', e => {
  e.preventDefault()
  getCar()
  //zerar valores dos inputs após adicionar o veículo
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
    disableCheckBtn(element)
  } else if (element.classList.contains('conductor-car')) {
    showConductor(element)
  }
})
