import './App.css';
import Header from "./Header";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe"

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipe, setrecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setrecipe(res.meals)
      })
  };

  const inputChange = (event) => {
    setSearch(event.target.value)
  }

  const submit = () => {
    getRecipe()
    setSearch("")
  }
  // console.log(recipe)

  return (
    <>
      <div className='conatiner-fluid' >
        <Header search={search} inputChange={inputChange} submit={submit} />
      </div>
      <div className='container p-4'>
        <Recipe recipe={recipe} />
      </div>
    </>
  );
}

export default App;
