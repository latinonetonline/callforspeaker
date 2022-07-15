import React from "react";

interface SpeakerConfirmationComponentProps {
  image: string;
  name: string;
  email: string;
  twitter: string;
  description: string;
}

const SpeakerConfirmationComponent: React.FC<
  SpeakerConfirmationComponentProps
> = ({ image, name, email, twitter, description }) => {
  return (
    <div className="summary-container">
      <div className="form-row speaker-info">
        <div className="form-holder">
          <img
            width="200px"
            src={image}
            id="confirmation-imagen"
          />
        </div>
        <div className="form-holder">
          <h4 className="word-break confirmation-name">{name}</h4>
          <p className="word-break confirmation-email">{email}</p>
          <p className="word-break confirmation-twitter">{twitter}</p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-holder form-holder-2">
          <p className="word-break confirmation-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerConfirmationComponent;
