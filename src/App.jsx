import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { useCarList } from "./hooks/useCarList";
import Input from "./components/Input";
import Card from "./components/Card";

const App = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { allCars, loadingStatus } = useCarList();

  useEffect(() => {
    setFilteredResults(allCars);
  }, [allCars]);

const handleSearch = () => {
  const filtered = allCars.filter((car) =>
    car.carModel.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredResults(filtered);
};

const handleClearFilter = () => {
  console.log(allCars);
  
  setSearchQuery("");
  setFilteredResults(allCars); // Directly reset to all cars instead of using handleSearch
};

  return (
    <div className="w-screen max-w-full min-h-screen flex justify-center items-center bg-gray-100 overflow-x-hidden">
      {!loadingStatus ? (
        <div className="max-w-full w-full md:w-3/4 lg:w-3/4 p-4 md:p-6 bg-white shadow-lg rounded-lg overflow-x-hidden">
          <h2 className="text-2xl font-bold mb-4 text-black">Rent a car</h2>

          <div className="border-b pb-3">
            <h2 className="text-lg font-bold text-black">Aspen Airport</h2>
            <p className="text-gray-500 text-sm">
              9028.2 miles • 233 Airport Rd
            </p>
          </div>

          <div className="bg-red-100 p-3 mt-3 rounded-lg flex items-center">
            <span className="text-red-600 font-semibold">
              ✨ US$10 Lyft ride credit
            </span>
          </div>
          <div className="mt-4">
            <Input
              placeholder="Search cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClose={handleClearFilter}
              helperText="Search by car model name"
              className="text-black placeholder:text-black"
            />
          </div>

          <div className="mt-4 space-y-4">
            {filteredResults.map((car) => (
              <Card key={car.id} car={car} />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Button className="mt-6" onClick={handleSearch}>
              Search
            </Button>
          </div>
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
