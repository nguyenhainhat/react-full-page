import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import { AiOutlineClose } from "react-icons/ai";
// interface 

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};


export const ModalContent = (props) => {

    const contentRef = useRef(null)

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active')
        if(props.onClose) props.onClose();
    }

    return (
      <div  className="modal_content">
          <div ref={contentRef} className="modal_scroll">
            {props.children}
            <div className="modal_content_close" onClick={closeModal}>
                <AiOutlineClose/>
            </div>
        </div>
      </div>
    )
}

export default Modal;
