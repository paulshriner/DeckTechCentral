import DeckListing from "../DeckListing/DeckListing";
import "./DeckPane.css";

export default function DeckPane({ id, decks }) {
  return (
    <div className="deck-pane" id={`deck-pane-${id}`}>
      {decks.map((deck, index) => (
        <DeckListing id={id} key={index} deck={deck} />
      ))}
    </div>
  );
}
