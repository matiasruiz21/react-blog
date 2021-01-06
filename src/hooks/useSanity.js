import sanityClient from "../client";
import { useEffect, useState } from "react";

const useSanity = (schema) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "${schema}"] {
        title,
        slug,
        "name": author->name,
        publishedAt,
        body,
        
    }`
      )
      .then((docs) => {
        setIsPending(false);
        setData(docs);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted"); // No se como provocar este error
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [schema]);

  return { data, isPending, error };
};

export default useSanity;
