import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {plants, setTerm, term, addPlant}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setTerm={setTerm} term={term}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
