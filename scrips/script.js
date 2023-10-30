const data = {
    doctors: [],
    patients: [],
    appointments: []
};
  
function Doctor(name, surname, specialty, availability) {
    this.name = name;
    this.surname = surname;
    this.specialty = specialty;
    this.availability = availability;
}
  
function Patient(name, surname, birthdate, priority) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.priority = priority;
}

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

//lesther agrega lo tuyo 