import React, {useContext} from 'react'
import ReactDOM from 'react-dom';
import { GlobalContext } from '../../../context/Provider';
import {closeModal} from '../../../context/actions/setModal';

const Modal = ({className, children}) => {
    const {showModal, setShowModalDispatch} = useContext(GlobalContext)    
    return (
        <>
            {
                showModal.showModal && ReactDOM.createPortal(<>
                    <section id="backdrop" onClick={() => closeModal(setShowModalDispatch)}>
                        <div className={className}>{children}</div>
                    </section>                    
                    </>, document.querySelector('#overlays'))
            }
        </>
      )
}

export default Modal