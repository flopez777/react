import React, { useState } from 'react';

function FormularioCita({ agregarCita, citas }) {
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Manejador para cambios en los campos del formulario
    function handleChange(event) {
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        });
    }

    // Manejador para enviar el formulario
    function handleSubmit(event) {
        event.preventDefault();
        // Verificar si la cita ya existe
        const citaExistente = citas.find(c => c.mascota === cita.mascota && c.propietario === cita.propietario);
        if (citaExistente) {
            alert('La cita ya existe. Por favor, modifica la cita existente.');
            return;
        }
        // Llamar a la función para agregar cita
        agregarCita(cita);
        // Limpiar el formulario
        setCita({
            mascota: '',
            propietario: '',
            telefono: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Agregar Nueva Cita</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="mascota">Nombre Mascota</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mascota"
                                name="mascota"
                                value={cita.mascota}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="propietario">Nombre Dueño de la Mascota</label>
                            <input
                                type="text"
                                className="form-control"
                                id="propietario"
                                name="propietario"
                                value={cita.propietario}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Número de Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="telefono"
                                name="telefono"
                                value={cita.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha"
                                name="fecha"
                                value={cita.fecha}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hora">Hora</label>
                            <input
                                type="time"
                                className="form-control"
                                id="hora"
                                name="hora"
                                value={cita.hora}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sintomas">Síntomas</label>
                            <textarea
                                className="form-control"
                                id="sintomas"
                                name="sintomas"
                                value={cita.sintomas}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Agregar Cita
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioCita;



