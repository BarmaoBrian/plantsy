import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [term, setTerm] = useState("")
  let viewedPlants

  function addPlant(plant){
    setPlants([...plants, plant])
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then(data => {setPlants(data)})
    }, [])

      
      if(term === "Type a name to search...") {
        viewedPlants = plants
      } else {
        viewedPlants = plants.filter(plant => plant.name.toLowerCase().includes(term.toLowerCase()))
      }

  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants = {viewedPlants}
      setTerm={setTerm}
      term={term}
      addPlant={addPlant}
      />
    </div>
    
)}
export default App;
