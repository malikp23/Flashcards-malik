import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import NewDeck from "./NewDeck";
import EditDeck from "./EditDeck";
import View from "./View";
import Study from "./Study";
import NewCard from "./NewCard";
import EditCard from "./EditCard";
import DeckList from "./DeckLIst";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route exact path="/decks/new">
            <NewDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <View />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <NewCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default Layout;
