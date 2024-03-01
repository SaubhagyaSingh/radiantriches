import React, { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "UK",
  "Australia",
  "Germany",
  "France",
  "Japan",
];

const Countrydropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#212731",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <select
        value={selectedCountry}
        onChange={handleChange}
        style={{
          backgroundColor: "#212731",
          color: "white",
          padding: "5px",
        }}
      >
        {countries.map((country, index) => (
          <option
            key={index}
            value={country}
            style={{ backgroundColor: "#212731", color: "white" }}
          >
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Countrydropdown;
