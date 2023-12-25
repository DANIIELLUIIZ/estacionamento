function createCar(car) {
  const date = new Date()
  let horas = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  content.innerHTML += `<div class="car">

  <div class="car-info">
  <div class="box">
  <span>entrada</span>
  <p class="time">${horas}:${minutes}</p>
   </div>
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

    <div class="box hide">
    </div>
    <div class="box hide">      
    </div>

  </div>
  <div class="conductor-info hide">
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
