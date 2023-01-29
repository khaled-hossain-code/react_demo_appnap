import { useEffect, useState } from "react";

const useFetch = (url, headers) => {
  const [data, setdata] = useState(null);
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
        console.log({ resdata: resData.data });
        seterror(resData.error);
        setdata(resData.data);
        setloading(false);
      });
  }, [url, headers]);

  return { data, loading, error };
};

export default useFetch;
