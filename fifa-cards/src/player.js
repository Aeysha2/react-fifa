import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: "18rem",
    margin: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    transition: "transform 0.2s",
  };

  const imageStyle = {
    height: "250px",
    objectFit: "cover"
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Valeurs par défaut
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Inconnue",
  jerseyNumber: "N/A",
  age: "N/A",
  image: "https://via.placeholder.com/250x250.png?text=No+Image"
};

export default Player;
