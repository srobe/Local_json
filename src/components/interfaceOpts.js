// react
import React, { useState, useEffect } from "react";
// Own Css
import "./styles.css";

function AppAssist(jsonfile) {
  const [Fields, setFields] = useState(0);
  const [Regions, setRegions] = useState(0);
  const [Times, setTimes] = useState(0);
  const [Taus, setTaus] = useState(0);

  useEffect(() => {
    fetch(jsonfile)
      .then((res) => res.json())
      .then((data) => {
        setFields(data[0].fields);
        setRegions(data[1].regions);
        setTimes(data[2].initialTimes);
        setTaus(data[3].leadHours);
      });
  }, []);
}

export default AppAssist;
