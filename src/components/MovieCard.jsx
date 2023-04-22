import React from "react";
import "../components/MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={props.img} alt="movie-card" />
      </div>
      <div className="card-details">
        <div>
          <span className="title">Title: {props.title} </span>
        </div>
        <div className="genre">
          <span>Genre: {props.genre} </span>
        </div>
        <div className="ratings">
          <span>Rating: {props.rating}</span>
          <span>Duration: {props.duration} mins</span>
        </div>
      </div>
    </div>
  );
}
