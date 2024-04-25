import { useState, useEffect } from "react";
import client from "./SanityClient";
import { useNavigate } from "react-router-dom";

const useFetchData = (url) => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    const fetchData = async () => {
      try {
        const data = await client.fetch(`${url}`);
        if (isMounted && data.length > 0) {
          // only update state if component is still mounted
          setData(data);
        } else {
          throw new Error("Data could not be fetched");
        }
      } catch (error) {
        console.error(error);
        navigate("/not-found");
      }
    };

    fetchData();

    return () => {
      isMounted = false; // component will unmount, set flag to false
    };
  }, []);

  return data;
};

export default useFetchData;
