import { useState, useEffect } from 'react';
import client from './SanityClient';

const FetchData = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    const fetchData = async () => {
      try {
        const data = await client.fetch(`${url}`);

        if (isMounted) {
          // only update state if component is still mounted
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // component will unmount, set flag to false
    };
  }, []);

  return data;
};

export default FetchData;
