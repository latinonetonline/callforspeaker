import React from "react";

interface TabComponentProps {
  getActiveClassName: (tabId: number, className: string) => void;
  tabId: number;
  stepNumber: string;
  stepTitle: string;
}

const TabComponent: React.FC<TabComponentProps> = ({
  getActiveClassName,
  tabId,
  stepNumber,
  stepTitle,
}) => {
  return (
    <li className={`${getActiveClassName(tabId, "active-tabs active")}`}>
      <div className="step-component">
        <div className="step-number">
          <span>{stepNumber}</span>
        </div>
        <span className="step-title">{stepTitle}</span>
      </div>
    </li>
  );
};

export default TabComponent;
