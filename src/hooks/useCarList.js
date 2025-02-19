import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCarList = () => {
  const [allCars, setAllCars] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

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

  useEffect(() => {
    getAllCars();
  }, []);

  return { allCars, loadingStatus };
}; 