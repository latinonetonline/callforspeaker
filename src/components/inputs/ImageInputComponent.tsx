import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import {
  CropperRef,
  CropperPreview,
  CropperImage,
  CropperState,
} from "react-advanced-cropper";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";
import ImageCropperModal from "../image/ImageCropperModal";

interface ImageInputComponentProps {
  name: keyof FormInput;
  fieldsetId: string;
  legend: string;
  inputId: string;
  value: Blob | null;
}

const ImageInputComponent: React.FC<ImageInputComponentProps> = ({
  name,
  fieldsetId,
  legend,
  inputId,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [src, setSrc] = useState<string>();
  const [state, setState] = useState<CropperState | null>(null);
  const [image, setImage] = useState<CropperImage | null>(null);

  const { setValue } = useFormContext<FormInput>();

  useEffect(() => {
    if (value) {
      const blob = URL.createObjectURL(value);

      setSrc(blob);
    }
  }, [value]);

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

  const handleCropperModalClose = (cropper: CropperRef | null) => {
    // console.log(cropper?.getCanvas()?.toDataURL());
    cropper?.getCanvas()?.toBlob((blob) => {
      setSrc(URL.createObjectURL(blob!));
      setValue(name, blob!);
    });
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

        {image ? (
          <CropperPreview
            className="image-preview"
            image={image}
            state={state}
          />
        ) : (
          src && <img src={src} className="image-preview" alt="" />
        )}
        <div className="upload-example">
          <div className="buttons-wrapper">
            <button type="button" className="button" onClick={onUpload}>
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
