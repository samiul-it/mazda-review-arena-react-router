import { useState,useEffect } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return [data,setData];
};
export default useData;
