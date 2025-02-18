import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [allCars, setAllCars] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    getAllCars();
  }, []);

  // fetch list of cars
  const getAllCars = async () => {
    try {
      setLoadingStatus(true);
      const { data } = await axios.get("/mock/mock.json");
      setAllCars(data);
    } catch (e) {
      console.log("Error fetching cars:", e?.message);
    } finally {
      setLoadingStatus(false);
    }
  };

  return (
<div className="w-screen min-h-screen flex justify-center items-center bg-gray-100 overflow-y-auto">
    {!loadingStatus ? (
        <div className="w-full md:w-3/4 lg:w-3/4 p-4 md:p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Rent a car</h2>
          

          <div className="border-b pb-3">
            <h2 className="text-lg font-bold">Aspen Airport</h2>
            <p className="text-gray-500 text-sm">9028.2 miles • 233 Airport Rd</p>
          </div>
         
          <div className="bg-red-100 p-3 mt-3 rounded-lg flex items-center">
            <span className="text-red-600 font-semibold">✨ US$10 Lyft ride credit</span>
          </div>
          <div className="mt-4 space-y-4">
            {allCars.map((car) => (
              <div
                key={car.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={car.carImageUrls.length ? car.carImageUrls[0] : "thumbnail.com"}
                    alt={car.name}
                    className="w-20 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-bold text-lg">{car.carModel}</p>
                    <p className="text-gray-500 text-sm">{car.carManufacturer}</p>
                  </div>
                </div>
                <p className="font-bold text-lg">US${car.price}</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-purple-800 cursor-pointer text-white text-lg font-bold py-2 md:py-2 rounded-full mt-6 hover:bg-purple-700 transition">
            Search
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="font-bold text-lg">Great things take time!</h3>
        </div>
      )}
    </div>
  );
};

export default App;
