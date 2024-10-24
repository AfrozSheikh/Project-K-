// src/CropForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import "./but.css";

const CropForm = () => {
  const [cityName, setCityName] = useState("");
  const [phosporous, setPhosporous] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [moisture, setMoisture] = useState("");
  const [soilType, setSoilType] = useState("");
  const [waterAvailability, setWaterAvailability] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/submit", {
        cityname: cityName,
        phosporous,
        nitrogen,
        potassium,
        ph,
        moisture,
        soiltype: soilType,
        wateravailability: waterAvailability,
      });

      console.log(response);

      if (response.data.error) {
        setError("Something went wrong. Please try again.");
      } else {
        // Navigate to the 'RecommendCrop' page with the received crop data
        navigate("/recommend-crop", { state: { crops: response.data } });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-500 ">
      <h1 className=" text-[40px] p-[2px] -4 text-center font-extrabold">
        KrushiMitra
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center  justify-center h-full w-full"
      >
        {/* City Input className="border border-black rounded-" */}
        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          <label className=" mx-5" htmlFor="cityname">
            City
          </label>
          <input className="border border-black rounded-"
            type="text"
            name="cityname"
            placeholder="Enter Your City Name"
            required
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>

        {/* Soil Data Section */}
        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          <h2>Soil Data - For More Accuracy</h2>
          {/* Phosporous Input className="border border-black rounded-" */}
          <label className=" mx-5" htmlFor="phosporous">
            Enter Phosporous PPM
          </label>
          <input className="border border-black rounded-"
            type="text"
            name="phosporous"
            placeholder="Ex 33.6kg/ha"
            value={phosporous}
            onChange={(e) => setPhosporous(e.target.value)}
          />
        </div>

        <div className="m-3 p-4  text-lg font-extrabold">
          {/* Nitrogen Input className="border border-black rounded-" */}
          <label className=" mx-5" htmlFor="nitrogen">
            Enter Nitrogen PPM
          </label>
          <input className="border border-black rounded-"
            type="text"
            name="nitrogen"
            placeholder="ppm"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
          />
        </div>

        <div className="m-3 p-4  text-lg font-extrabold">
          {/* Potassium Input className="border border-black rounded-" */}
          <label className=" mx-5" htmlFor="potassium">
            Enter Potassium PPM
          </label>
          <input className="border border-black rounded-"
            type="text"
            name="potassium"
            placeholder="ppm"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
          />
        </div>

        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          {/* pH Level Dropdown */}
          <label className=" mx-5" htmlFor="ph">
            Enter pH Level
          </label>
          <select name="ph" value={ph} onChange={(e) => setPh(e.target.value)}>
            <option value="very-acidic">Very Acidic (pH &lt; 5.0)</option>
            <option value="moderately-acidic">
              Moderately Acidic (pH 5.0 - 6.0)
            </option>
            <option value="slightly-acidic">
              Slightly Acidic (pH 6.0 - 6.5)
            </option>
            <option value="neutral">Neutral (pH 6.5 - 7.5)</option>
            <option value="slightly-alkaline">
              Slightly Alkaline (pH 7.5 - 8.5)
            </option>
            <option value="alkaline">Alkaline (pH &gt; 8.5)</option>
          </select>
        </div>
        {/* Moisture Input className="border border-black rounded-" */}
        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          <label className=" mx-5" htmlFor="moisture">
            Enter Moisture PPM
          </label>
          <input className="border border-black rounded-"
            type="text"
            name="moisture"
            placeholder="%"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
          />
        </div>

        {/* Soil Type Dropdown */}
        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          <label className=" mx-5" htmlFor="soiltype">
            Soil Type
          </label>
          <select
            name="soiltype"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="black">Black Soil (Regur Soil)</option>
            <option value="red">Red Soil</option>
            <option value="desert">Desert Soil</option>
            <option value="mountain">Mountain Soil</option>
            <option value="saline-alkaline">Saline and Alkaline Soil</option>
            <option value="peaty-marshy">Peaty and Marshy Soil</option>
          </select>
        </div>
        {/* Water Availability Dropdown */}
        <div className="m-3 p-4  text-lg font-extrabold">
          {" "}
          <label className=" mx-5" htmlFor="wateravailability">
            Water Availability
          </label>
          <select
            name="wateravailability"
            value={waterAvailability}
            onChange={(e) => setWaterAvailability(e.target.value)}
          >
            <option value="high">High Availability</option>
            <option value="moderate">Moderate Availability</option>
            <option value="low">Low Availability</option>
            <option value="rainfed">Rain-fed Only</option>
            <option value="irrigated">Irrigated</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button 
          className="my-5 border-[5px] border-black "
          id="neonShadow" type="submit" disabled={loading}>
            submit
          </button>
        </div>
      </form>

      {/* Loading and Error Handling */}
         {/* Loading and Error Handling */}
         {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <Spinner />
        </div>
      )}

      {error &&
       (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
           <p
           className="text-[40px] font-extrabold bg-slate-50 w-full text-center "
           style={{ color: "black" }}>{error}</p>
        </div>
      )
     }
    </div>
  );
};

export default CropForm;
