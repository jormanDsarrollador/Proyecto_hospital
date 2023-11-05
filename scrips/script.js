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

function validateForm() {
    const doctorName = document.getElementById('doctor-name').value;
    const patientName = document.getElementById('patient-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Verifica que los campos de nombre del médico y paciente no estén vacíos
    if (doctorName.trim() === '' || patientName.trim() === '') {
      // Mostrar un mensaje de error indicando que los campos son obligatorios
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los campos de nombre del médico y paciente son obligatorios'
      });
      return false; // La validación falla
    }
  
    // Verifica que se haya seleccionado una fecha y hora futuras
    const selectedDateTime = new Date(date + 'T' + time);
    const currentDateTime = new Date();
    if (selectedDateTime <= currentDateTime) {
      // Mostrar un mensaje de error indicando que la fecha y hora deben ser futuras
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Selecciona una fecha y hora futuras'
      });
      return false; // La validación falla
    }
  
    // Si todos los campos cumplen las condiciones, la validación es exitosa
    return true;
}

//Lesther Jvier 

function showSuccessMessage(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2000
  });
}

const addDoctorButton = document.getElementById('registrar-medico');
addDoctorButton.addEventListener('click', function() {
  if (validateForm()) {
    const doctorName = document.getElementById('doctor-name').value;
    const doctorSurname = document.getElementById('doctor-surname').value;
    const doctorSpecialty = document.getElementById('doctor-specialty').value;
    const doctorAvailability = document.getElementById('doctor-availability').value;
    const doctor = new Doctor(doctorName, doctorSurname, doctorSpecialty, doctorAvailability);
    data.doctors.push(doctor);
    showSuccessMessage('Doctor registrado correctamente');
  }
});

// Alex pone tu parte
const addPatientButton = document.getElementById('registrar-paciente');
addPatientButton.addEventListener('click', function() {
  if (validateForm()) {
    const patientName = document.getElementById('patient-name').value;
    const patientSurname = document.getElementById('patient-surname').value;
    const patientBirthdate = document.getElementById('patient-birthdate').value;
    const patientPriority = document.getElementById('patient-priority').value;
    const patient = new Patient(patientName, patientSurname, patientBirthdate, patientPriority);
    data.patients.push(patient);
    showSuccessMessage('Paciente registrado correctamente');
  }
});

const submitButton = document.getElementById('solicitar-turno');
submitButton.addEventListener('click', function() {
  if (validateForm()) {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctorId = parseInt(document.getElementById('doctor').value);
    const patientId = parseInt(document.getElementById('patient').value);
    addAppointment(date, time, doctorId, patientId);
  }
});