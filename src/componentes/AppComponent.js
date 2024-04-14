import React, { useState } from 'react';
import ListaCitas from './ListaCitas';
import FormularioCita from './FormularioCita';

function AppComponent() {
    const [citas, setCitas] = useState([]);

    // Función para agregar una nueva cita
    function agregarCita(nuevaCita) {
        if (!detectarDuplicados(nuevaCita)) {
            setCitas([...citas, nuevaCita]);
        }
    }

    // Función para eliminar una cita
    function eliminarCita(id) {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        setCitas(nuevasCitas);
    }

    // Función para editar una cita
    function editarCita(citaEditada) {
        const nuevasCitas = citas.map(cita => (cita.id === citaEditada.id ? citaEditada : cita));
        setCitas(nuevasCitas);
    }

    // Función para detectar duplicados en las citas
    function detectarDuplicados(cita) {
        const citaExistente = citas.find(c => c.mascota === cita.mascota && c.propietario === cita.propietario);
        if (citaExistente) {
            alert('La cita ya existe. Por favor, modifica la cita existente.');
            return true;
        }
        return false;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <FormularioCita agregarCita={agregarCita} citas={citas} />
                <ListaCitas citas={citas} eliminarCita={eliminarCita} editarCita={editarCita} />
            </div>
        </div>
    );
}

export default AppComponent;
