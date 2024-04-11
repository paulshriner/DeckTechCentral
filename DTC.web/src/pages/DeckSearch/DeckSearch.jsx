import { useState, useEffect } from "react";
import "./DeckSearch.css";
import { useNavigate } from "react-router-dom";
import { getLoginStatus, setUserPopup } from "../../oauth/User";
import { maxSearchLength } from "../../assets/DTCHeader/DTCHeader";
import DTCHeader from "../../assets/DTCHeader/DTCHeader";
import DeckPane from "../../assets/DeckPane/DeckPane";
import useQuery from "../../assets/useQuery";

export default function DeckSearch() {
  //Set working variables
  const navigate = useNavigate();
  const query = useQuery();

  //Use state for search toggle
  const [isToggled, setIsToggled] = useState(false);

  //Set initial search text based on dashboard
  const [searchText, setSearchText] = useState(query.get("deck"));

  //Use state for deck name search value
  const [deckName, setDeckName] = useState(searchText);

  const [decks, setDecks] = useState([]);

  const [numDecks, setNumDecks] = useState("");

  //Check for Google login, set popup
  function checkLogin() {
    const s = getLoginStatus();
    if (s) {
      setUserPopup("ds");
    } else {
      setUserPopup("ds");
    }
  }

  //Check search toggle and handle accordingly
  function checkSearchToggle() {
    if (deckName != "" && deckName.length <= maxSearchLength) {
      setNumDecks("");
      if (isToggled) {
        navigate(`/cardsearch?card=${deckName}`);
      } else {
        searchDeck();
      }
    }
  }

  useEffect(() => {
    //Check for login and set popup
    checkLogin();

    //Go to top of page
    window.scrollTo(0, 0);

    sessionStorage.clear();
  }, []);

  useEffect(() => {
    // Call searchCard when searchText changes
    if (searchText != null) {
      searchDeck();
    }
  }, [searchText]);

  const searchDeck = async () => {
    navigate(`/decksearch?deck=${deckName}`);

    try {
      //Make request
      const response = await fetch(
        `http://localhost:5272/deck/search?name=${encodeURIComponent(deckName)}`
      );
      const rawData = await response.json();
      const decks = rawData.length;

      setDecks(rawData);

      //Set num cards
      if (decks == 1) {
        setNumDecks(decks + " deck found for '" + deckName.toLowerCase() + "'");
      } else {
        setNumDecks(
          decks + " decks found for '" + deckName.toLowerCase() + "'"
        );
      }
    } catch (error) {
      //Set num decks to none
      setNumDecks("No decks found for '" + deckName.toLowerCase() + "'");
    }
  };

  //Clear search and image list
  function clearSearch() {
    setDeckName("");
  }

  //Create all components
  return (
    <div id="ds-all">
      <DTCHeader
        id="ds"
        inputText="Search deck list..."
        inputValue={deckName}
        inputOnChange={setDeckName}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        search={checkSearchToggle}
        clearSearch={clearSearch}
        navigate={navigate}
      ></DTCHeader>
      <div id="num-decks">
        <text className="num-results">{numDecks}</text>
      </div>
      <DeckPane id="ds" decks={decks}></DeckPane>
    </div>
  );
}
