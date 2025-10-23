import './Trabajos.css';
import { useState } from 'react';
import trabajos from '../data/trabajos';
import Modal from '../Modal';

const Trabajos = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
    const [estadoModal, setEstadoModal] = useState(false);
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

    const handleChange = (e) => {
        const categoria = e.target.id;
        setCategoriaSeleccionada(categoria);

        if (categoria === 'todos') {
            setTrabajosFiltrados(trabajos);
        } else {
            const nuevosTrabajos = trabajos.filter((t) => t.categoria === categoria);
            setTrabajosFiltrados(nuevosTrabajos);
        }
    };

    const openModal = (e, id) => {
        e.preventDefault();
        const trabajo = trabajos.find((t) => t.id === id);
        setTrabajoSeleccionado(trabajo);
        setEstadoModal(true);
    };

    const closeModal = () => {
        setEstadoModal(false);
        setTrabajoSeleccionado(null);
    };

    return (
        <>
            <section className="trabajos" id="trabajos">
                <div className="encabezado">
                    <h3 className="titulo">Mis trabajos</h3>
                    <p className="subtitulo">Estos son mis trabajos como freelance.</p>
                </div>

                <div className="filtros">
                    {[
                        { id: 'todos', label: 'Todos' },
                        { id: 'diseño-web', label: 'Diseño Web' },
                        { id: 'desarrollo-web', label: 'Desarrollo Web' },
                        { id: 'aplicaciones-moviles', label: 'Aplicaciones Móviles' },
                        { id: 'desarrollo-software', label: 'Desarrollo Software' },
                    ].map(({ id, label }) => (
                        <label htmlFor={id} key={id}>
                            <input
                                type="radio"
                                name="categoria"
                                id={id}
                                onChange={handleChange}
                                checked={categoriaSeleccionada === id}
                            />
                            <span className="opcion">{label}</span>
                        </label>
                    ))}
                </div>

                <div className="grid">
                    {trabajosFiltrados.map((trabajo) => (
                        <div className="trabajo" key={trabajo.id}>
                            <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                                <img loading="lazy" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                            </a>

                            <div className="info">
                                <div className="textos">
                                    <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
                                        {trabajo.info.nombre}
                                    </a>
                                    <p className="categoria">{trabajo.info.categoria}</p>
                                </div>

                                <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {estadoModal && (
                <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />
            )}
        </>
    );
};

export default Trabajos;
