import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ closeModal, trabajo }) => {
  if (!trabajo) return null;

  // Bloquea el scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOverlayClick = (e) => {
    // Si querés que NO se cierre al clic fuera, borrá este bloque
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  return (
    <div className="overlay active" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="boton-cerrar" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 
              7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 
              8l2.647 2.646a.5.5 0 0 1-.708.708L8 
              8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 
              8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>

        <div className="grid">
          <div className="thumb">
            <img src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
          </div>

          <div className="info">
            <div className="head">
              <h3 className="titulo">{trabajo.info.nombre}</h3>
              <span className="categoria">{trabajo.info.categoria}</span>
            </div>

            <div className="body">{trabajo.info.contenido}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
