import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ search, saveSearch, saveConsult }) => {
  const [error, saveError] = useState(false);

  const { city, country } = search;

  //Read state
  const handleChange = (e) => {
    //Update state
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveConsult(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All the fields are required" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">--- Select your contry ---</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="city">Country: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Search weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveConsult: PropTypes.func.isRequired,
};
export default Form;
