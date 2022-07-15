import React from "react";
import './SectionsStyles.scss'

interface WelcomeSectionProps {}

const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <section id="welcome-section">
      <img
        src="https://latinonet.online/callforspeakers/images/logo.png"
        alt=""
        width="176px"
      />
      <div className="description-text">
        <h3 className="heading-welcome">Call For Speakers</h3>

        <h4 className="subtitle">El Call For Speakers de la comunidad</h4>
        <h4 className="sub-subtitle">Latino .NET Online</h4>

        <p className="description">
          Desde el equipo de organización estamos agradecidos de que dediques tu
          tiempo para proponer una charla para dar en uno de nuestros sábados de
          webinar.
        </p>
        <p>Estamos ansiosos de ver su propuesta!</p>
      </div>
    </section>
  );
};

export default WelcomeSection;
