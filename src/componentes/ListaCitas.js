import React, { useState } from 'react';

function ListaCitas({ citas, eliminarCita, editarCita }) {
    const [editando, setEditando] = useState(false);
    const [citaEditada, setCitaEditada] = useState({});

    // Función para detectar duplicados en las citas
    function detectarDuplicados(cita) {
        const citaExistente = citas.find(c => c.mascota === cita.mascota && c.propietario === cita.propietario);
        if (citaExistente) {
            alert('La cita ya existe. Por favor, modifica la cita existente.');
            return true;
        }
        return false;
    }

    // Manejador para cambios en los campos editables
    function handleEditChange(event) {
        setCitaEditada({
            ...citaEditada,
            [event.target.name]: event.target.value
        });
    }

    // Manejador para enviar la cita editada
    function handleEditSubmit(event) {
        event.preventDefault();
        // Llamar a la función para editar la cita
        editarCita(citaEditada);
        // Limpiar el estado de edición
        setCitaEditada({});
        setEditando(false);
    }

    // Función para activar el modo de edición
    function activarEdicion(cita) {
        setCitaEditada(cita);
        setEditando(true);
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        setEditando(false);
    }

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Lista de Citas</h2>
                    <div className="lista-citas">
                        {citas.length === 0 ? (
                            <p>No hay citas</p>
                        ) : (
                            <ul className="list-group">
                                {citas.map(cita => (
                                    <li key={cita.id} className="list-group-item">
                                        {editando && citaEditada.id === cita.id ? (
                                            <form onSubmit={handleEditSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="mascota">Nombre Mascota</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="mascota"
                                                        name="mascota"
                                                        value={citaEditada.mascota}
                                                        onChange={handleEditChange}
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
                                                        value={citaEditada.propietario}
                                                        onChange={handleEditChange}
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
                                                        value={citaEditada.fecha}
                                                        onChange={handleEditChange}
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
                                                        value={citaEditada.hora}
                                                        onChange={handleEditChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="sintomas">Síntomas</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="sintomas"
                                                        name="sintomas"
                                                        value={citaEditada.sintomas}
                                                        onChange={handleEditChange}
                                                        required
                                                    ></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Guardar</button>
                                                <button type="button" className="btn btn-secondary" onClick={cancelarEdicion}>Cancelar</button>
                                            </form>
                                        ) : (
                                            <>
                                                <p>Mascota: {cita.mascota}</p>
                                                <p>Propietario: {cita.propietario}</p>
                                                <p>Fecha: {cita.fecha}</p>
                                                <p>Hora: {cita.hora}</p>
                                                <p>Síntomas: {cita.sintomas}</p>
                                                <button className="btn btn-danger mr-2" onClick={() => eliminarCita(cita.id)}>Eliminar</button>
                                                <button className="btn btn-secondary" onClick={() => activarEdicion(cita)}>Editar</button>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaCitas;


