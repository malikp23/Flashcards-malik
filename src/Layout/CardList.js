import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

function CardList({ card, deckId }) {
  // send user to appropriate route
  const history = useHistory();
  // const { url } = useRouteMatch();

  // Delete handler deletes deck card
  const handleDelete = async (id) => {
    const message = "Are you sure you want to delete?";
    const confirmation = window.confirm(message);

    if (confirmation === true) {
      (await deleteCard(card.id)) && window.location.reload() 
      
    } else {
      history.push("/")
    }
  };

  return (
<div>
      <div className="card">
        <div className="card-body container d-flex justify-content-between">
          <div className="left-text col-6">
            <p className="card-text">{card.front}</p>
          </div>
          <div className="right-text col-6">
            <p className="card-text">{card.back}</p>
            <div className="buttons">
              <Link to={`${deckId}/cards/${card.id}/edit`}>
                <button
                  type="button"
                  className="btn btn-secondary float-right mr-2"
                >
                  Edit
                </button>
              </Link>
              <button
                className="btn btn-danger float-right mr-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;