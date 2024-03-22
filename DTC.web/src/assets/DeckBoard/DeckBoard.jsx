import DeckSection from "../DeckSection/DeckSection";
import "./DeckBoard.css";

export default function DeckBoard({ boardJson }) {
  const sectionsUnsorted = boardJson.reduce((accumulator, currentCard) => {
    const typeLine = currentCard.CardInfo.type_line;

    if (!accumulator[typeLine]) {
      accumulator[typeLine] = [];
    }

    accumulator[typeLine].push(currentCard);
    return accumulator;
  }, {});

  const sections = Object.keys(sectionsUnsorted)
    .sort((a, b) => {
      // Ensure "Commander" comes first
      if (a === "Commander") return -1;
      if (b === "Commander") return 1;
      return a.localeCompare(b); // Sort other types alphabetically
    })
    .map((typeLine) => ({
      typeLine,
      cards: sectionsUnsorted[typeLine],
    }));

  console.log(sections);

  return (
    <div className="deck-board">
      {sections.map((section, index) => (
        <DeckSection
          key={index}
          deckSectionJson={section.cards}
          deckSectionName={section.typeLine}
        ></DeckSection>
      ))}
    </div>
  );
}
