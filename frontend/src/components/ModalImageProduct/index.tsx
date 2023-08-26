import { useContext } from "react";
import { ModalBackgound, Modal, ModalTitle } from "./style";
import {AiOutlineClose} from "react-icons/ai"
import { ImageContext } from "../../providers/ImageProvider/ImageContext";

export const ModalImageProduct = () => {
    const {setModalImage, imageById} = useContext(ImageContext)

  return (
    <ModalBackgound>
      <Modal>
        <ModalTitle>
        <h2>Imagem do veículo</h2>
        <AiOutlineClose className="close-btn-modalImage" onClick={() => setModalImage(false)}/>
        </ModalTitle>  
        <img src={imageById && imageById} alt="imagem do carro" className="image-car"/> 
      </Modal>
    </ModalBackgound>
  );
};
