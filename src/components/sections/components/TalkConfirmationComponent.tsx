import React from "react";
import { getSpanishDate } from "./helpers";

interface TalkConfirmationComponentProps {
  date: Date;
  title: string;
  description: string;
}

const TalkConfirmationComponent: React.FC<TalkConfirmationComponentProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="summary-container">
      <div className="form-row">
        <div className="form-holder form-holder-2">
          <p className="word-break confirmation-date">{getSpanishDate(date)}</p>
          <h4 className="word-break confirmation-title">{title}</h4>
        </div>
      </div>
      <div className="form-row">
        <div className="form-holder form-holder-2">
          <p className="word-break confirmation-talk-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalkConfirmationComponent;
