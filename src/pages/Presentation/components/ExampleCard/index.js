import React from "react";
import PropTypes from "prop-types";
import "./CustomCard.css"; // Import your custom CSS file

const CustomCard = ({ iconName, name, description, route, pro }) => {
  const iconPath = `/icons/${iconName}.svg`; // Update the path to match your public folder structure

  return (
    <div className="custom-card">
      <div className="icon">
        <img src={iconPath} alt={`${name} Icon`} />
      </div>
      <div className="content">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <p className={`pro ${pro ? "pro-active" : "pro-inactive"}`}>{pro ? "PRO" : "Standard"}</p>
        <a href={route} className="link">
          Learn More
        </a>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  iconName: PropTypes.string.isRequired, // Use the icon name as a string
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  pro: PropTypes.bool,
};

export default CustomCard;
