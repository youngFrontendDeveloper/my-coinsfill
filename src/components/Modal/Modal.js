import ReactDOM from "react-dom";
import { useCallback, useEffect, useRef } from "react";
import Close from "@/components/Close/Close";

export default function Modal({ onClose, children, title }) {
  const backDropHandler = useCallback( e => {

    if( e.target?.className === "modal-overlay" ) {
      onClose();
    }
  }, [ onClose ] );

  useEffect( () => {
    setTimeout( () => {
      window.addEventListener( "click", backDropHandler );
    } );
  }, [ backDropHandler ] );

  useEffect( () => {
    return () => window.removeEventListener( "click", backDropHandler );
  }, [ backDropHandler ] );

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="modal-overlay">
      <div
        className="modal-wrapper"
      >
        <div className="modal">
          <div className="absolute top-[-9px] right-[-9px] ">
            <Close onClick={ handleCloseClick } />
          </div>
          <h1 className="mb-[40px] text-white text-[26px] font-bold leading-[31.69px] text-center">{ title }</h1>
          { children }
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById( "modal-root" )
  );
}

