import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

import Navbar from "./components/Navbar";

function App() {

  const [characters, Setcharacters] = useState([]);
  const [info, sEtinfo] = useState({})

  const initialurl="https://rickandmortyapi.com/api/character/";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        Setcharacters(data.results);
        sEtinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious=()=>{
    fetchCharacters(info.prev);
  }

  const onNext=()=>{
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5"> 
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
