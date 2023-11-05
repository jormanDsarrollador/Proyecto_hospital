const medicos = [];
const pacientes = [];
const reservaciones = [];

function Medico(nombre, apellido, edad, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
}

function Paciente(nombre, apellido, edad, genero, prioridad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.prioridad = prioridad;
}

//Abajo tu lineas de codigo
function registrarMedico() {
  const nombre = document.getElementById('doctor-name').value;
  const apellido = document.getElementById('doctor-apellido').value;
  const edad = document.getElementById('doctor-edad').value;
  const genero = document.getElementById('doctor-gender').value;
  const medico = new Medico(nombre, apellido, edad, genero);
  medicos.push(medico);
  mostrarMensaje("Médico registrado correctamente");
  actualizarSelects();
}

function registrarPaciente() {
  const nombre = document.getElementById('patient-name').value;
  const apellido = document.getElementById('patient-apellido').value;
  const edad = document.getElementById('patient-edad').value;
  const genero = document.getElementById('patient-gender').value;
  const prioridad = document.querySelector('input[name="priority"]:checked').value;
  const paciente = new Paciente(nombre, apellido, edad, genero, prioridad);
  pacientes.push(paciente);
  mostrarMensaje("Paciente registrado correctamente");
  actualizarSelects();
}

function registrarTurno() {
  const doctorIndex = document.getElementById('doctor-select').value;
  const pacienteIndex = document.getElementById('patient-select').value;
  const hora = document.getElementById('appointment-time').value;
  const fecha = document.getElementById('appointment-date').value;

  if (!fecha || !hora) {
      mostrarMensaje("Por favor, seleccione una fecha y hora para la reserva.");
      return;
  }

  const paciente = pacientes[pacienteIndex];
  const doctor = medicos[doctorIndex];

  const mensaje = `Turno reservado correctamente para el paciente ${paciente.nombre} ${paciente.apellido} con el doctor ${doctor.nombre} ${doctor.apellido} el ${fecha} a las ${hora}. Es prioridad ?  ${paciente.prioridad}.`;
  reservaciones.push(mensaje);
  mostrarMensaje(mensaje);
  mostrarReservaciones();
}

function mostrarReservaciones() {
  const reservacionesList = document.getElementById('reservations');
  reservacionesList.innerHTML = ""; // Limpia la lista antes de mostrar las nuevas reservaciones

  reservaciones.forEach(reserva => {
      const listItem = document.createElement('li');
      listItem.textContent = reserva;
      reservacionesList.appendChild(listItem);
  });
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function actualizarSelects() {
  const doctorSelect = document.getElementById('doctor-select');
  const patientSelect = document.getElementById('patient-select');

  doctorSelect.innerHTML = "";
  patientSelect.innerHTML = "";

  medicos.forEach((medico, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${medico.nombre} ${medico.apellido}`;
      doctorSelect.appendChild(option);
  });

  pacientes.forEach((paciente, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${paciente.nombre} ${paciente.apellido}`;
      patientSelect.appendChild(option);
  });
}