import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";
import Deck from "./Deck"

const DeckList = () => {
    // useState Hook for deck list
    const [decks, setDecks] = useState([]);
    const { deckId } = useParams();
    // use Hook to send user home
    const history = useHistory();
  
    // Delete handler either deletes deck & reload OR sends user home
    const handleDelete = () => {
      const message = "Are you sure you want to delete?";
      const confirmation = window.confirm(message);
  
      if (confirmation === true) {
        deleteDeck(deckId) && window.location.reload();
      } else {
        history.goBack();
      }
    };
  
    // useEffect Hook to retrieve all existing decks
    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
      listDecks(deckId, signal)
        .then(setDecks)
        .catch((error) => console.log(error));
  
      return controller.abort();
    }, [deckId, setDecks]);
  
    const listOfDecks = decks.map((deck) => {
      return <Deck key={deck.id} deck={deck} handleDelete={handleDelete} />;
    });
  
    return (
      <div>
        <Link to="/decks/new">
          <button type="button" className="btn btn-secondary btn mb-2">
            + Create Deck
          </button>
        </Link>
        <div>{listOfDecks}</div>
      </div>
    );
  };

export default DeckList;