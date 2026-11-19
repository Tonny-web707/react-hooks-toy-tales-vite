
import React, { useState } from "react";

function ToyCard({ toy }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((response) => response.json())
      .then((updatedToy) => {
        setLikes(updatedToy.likes);
      })
      .catch((error) => console.error("Error liking toy:", error));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{likes} Likes </p>

      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>

      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
