import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  // Form state

  const [search, saveSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const requestAPI = async () => {
      if (consult) {
        const appId = "db7b11631760a00c5284a15cad7745aa";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        saveResult(result);
        saveConsult(false);

        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    };
    requestAPI();
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="Ups... There are no results!" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="React app weather" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
