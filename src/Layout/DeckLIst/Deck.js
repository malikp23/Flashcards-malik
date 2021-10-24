import React from "react";
import { Link } from "react-router-dom";


const Deck = ({deck, handleDelete}) => {
    return (
        <div key={deck.id} className="card">
          <div className="card-body">
            <h3 className="card-title">{deck.name}</h3>
            <p className="card-text">{deck.description}</p>
            <p>{deck.cards.length} cards</p>
  
            <Link to={`/decks/${deck.id}`}>
              <button
                type="button"
                className="btn btn-secondary"
              >
                View
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button type="button" className="btn btn-primary">
                Study
              </button>
            </Link>
            <button
            className="btn btn-danger float-right margin-bottom"
            onClick={handleDelete}
          >
            Delete
          </button>
          </div>
        </div>
      );
}

export default Deck;
