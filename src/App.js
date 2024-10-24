// react
import React, { useState, useEffect } from "react";
// Own Css
import "./styles.css";

function App() {
  const [Fields, setFields] = useState(0);
  const [Regions, setRegions] = useState(0);
  const [initialTimes, setInitialTimes] = useState(0);
  const [leadHours, setLeadHours] = useState(0);

  useEffect(() => {
    fetch("./data2.json")
      .then((res) => res.json())
      .then((data) => {
        setFields(data[0].fields);
        setRegions(data[1].regions);
        setInitialTimes(data[2].initialTimes);
        setLeadHours(data[3].leadHours);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        ... no changes in this part ...
        <p>The current fields are {Fields}.</p>
        <p>The current regions are {Regions}.</p>
        <p>The current regions are {initialTimes}.</p>
      </header>
    </div>
  );
}

export default App;
