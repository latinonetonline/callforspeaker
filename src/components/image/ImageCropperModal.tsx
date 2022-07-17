import { CircleStencil, Cropper, CropperRef } from "react-advanced-cropper";
import ReactModal from "react-modal";
import "./ImageCropperModal.scss";

interface ImageCropperModalProps {
  show: boolean;
  image?: string;
  onChange: (cropper: CropperRef) => void;
  onClose: () => void;
}

interface Image {
  type?: string;
  src: string;
}

const ImageCropperModal: React.FC<ImageCropperModalProps> = ({
  show,
  image,
  onChange,
  onClose,
}) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div>
      <ReactModal
        isOpen={show}
        contentLabel="Minimal Modal Example"
        className="center"
        style={{ content: { width: "40%" } }}
      >
        <div className="modal-cropper">
          <div style={{ width: "100%", height: "auto", maxWidth: 450 }}>
            {image && (
              <Cropper
                className="upload-example__cropper"
                imageClassName=""
                src={image}
                onChange={onChange}
                stencilProps={{
                  aspectRatio: 1 / 1,
                  movable: true,
                  resizable: true,
                }}
                stencilComponent={CircleStencil}
              />
            )}
          </div>
        </div>
        <div className="upload-example__button-wrapper">
          <button className="upload-example__button" onClick={handleClick}>
            Cortar foto
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageCropperModal;
