// react
import React, { useState, useEffect } from "react";
// Own Css
import "./styles.css";

function App() {
  const [data, setData] = useState({});
  const [Fields, setFields] = useState(0);
  const [Regions, setRegions] = useState(0);
  const [Levels, setLevels] = useState(0);
  const [initialTimes, setInitialTimes] = useState(0);
  const [leadHours, setLeadHours] = useState(0);

  useEffect(() => {
    fetch("./data4.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFields(data.fields);
        setRegions(data.regions);
        setLevels(data.levels);
        setInitialTimes(data.initialTimes);
        setLeadHours(data.leadHours);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>The current fields are {Fields.all.props.fieldType}.</p> */}
        <p>The current fields are {Fields.all}.</p>
        <p>The current regions are {Regions.all}.</p>
        <p>The current times are {initialTimes.all}.</p>
        <p>The current taus are {leadHours.all}.</p>
      </header>
    </div>
  );
}

export default App;
