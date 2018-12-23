import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../../utilities/formatDate";

import LevelBar from "../../levelBar/LevelBar";

const Alert = ({ name, event, eventDate, importance }) => {
  return (
    <li className="alert">
      <div className="info-wrapper">
        <div className="section-primary">
          <span className="icon">
            <i className="fas fa-birthday-cake" />
          </span>
          <p className="name">{name}</p>
        </div>

        <p className="event">{`${name.split(" ")[0]}'s ${event} coming up`}</p>
      </div>

      <div className="section-stats">
        <p className="date">{formatDate(eventDate)}</p>
        <LevelBar level={importance} />
      </div>
    </li>
  );
};

Alert.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  importance: PropTypes.string.isRequired
};

export default Alert;
