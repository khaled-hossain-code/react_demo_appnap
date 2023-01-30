/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url, headers) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        ...headers,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        seterror(resData.error);
        setdata(resData.data);
        setloading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
