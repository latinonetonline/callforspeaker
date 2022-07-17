import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import {
  CropperRef,
  CropperPreview,
  CropperImage,
  CropperState,
} from "react-advanced-cropper";
import ImageCropperModal from "../image/ImageCropperModal";

interface ImageInputComponentProps {
  fieldsetId: string;
  legend: string;
  inputId: string;
}

const ImageInputComponent: React.FC<ImageInputComponentProps> = ({
  fieldsetId,
  legend,
  inputId,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [src, setSrc] = useState<string>();
  const [state, setState] = useState<CropperState | null>(null);
  const [image, setImage] = useState<CropperImage | null>(null);

  const onUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onLoadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files[0]) {
      const blob = URL.createObjectURL(files[0]);

      setSrc(blob);
      setShowModal(true);
    }
    // Clear the event target value to give the possibility to upload the same image:
    event.target.value = "";
  };

  const handleCropperChange = (cropper: CropperRef) => {
    setState(cropper.getState());
    setImage(cropper.getImage());
  };
  
  const handleCropperModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
    return () => {
      if (image && image.src) {
        URL.revokeObjectURL(image.src);
      }
    };
  }, [image]);
  return (
    <div className="form-holder-2">
      <fieldset className={fieldsetId}>
        <legend>{legend}</legend>

        {image && (
          <CropperPreview
            className="image-preview"
            image={image}
            state={state}
          />
        )}
        <div className="upload-example">
          <div className="buttons-wrapper">
            <button className="button" onClick={onUpload}>
              <input
                ref={inputRef}
                className={`form-control ${inputId}`}
                accept=".jpg, .jpeg, .png"
                name={inputId}
                type="file"
                onChange={onLoadImage}
                style={{ display: "none" }}
              />
              Agregar foto
            </button>
          </div>
        </div>
      </fieldset>
      <ImageCropperModal
        show={showModal}
        image={src}
        onChange={handleCropperChange}
        onClose={handleCropperModalClose}
      />
    </div>
  );
};

export default ImageInputComponent;
