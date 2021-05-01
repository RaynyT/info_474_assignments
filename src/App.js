import React from "react";
import { useFetch } from "./hooks/useFetch";


const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/RaynyT/info_474_assignments/main/data/Education.csv"
  );

  return (
    <div>

      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <h2>The data I chose comes from the <a href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data/">USDA Economic Research Service</a></h2>
      <p>The files I chose are:
          <ul>
            <li>Educational attainment for the U.S., States, and counties, 1970-2019 (Education.csv)</li>
            <li>Poverty estimates for the U.S, States, and Counties, 2019 (PovertyEstimates.csv)</li>
            <li>Unemployment and mediam household income for the U.S., States, and counties, 2000-19 (Unemployment.csv)</li>
            <li>Population estimates for the U.S., States, and counties, 2010-19 (PopulationEstimates.csv)</li>
          </ul>
      </p>

      <h2></h2>

      <h3></h3>

      <h3><b><i>Insights</i></b></h3>
      <p>
         
      </p>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>
    </div>
  );
};

export default App;