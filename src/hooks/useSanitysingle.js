import { useEffect, useState } from "react";
import sanityClient from "../client";

const useSanitysingle = (slug) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
            title,
            _id,
            slug,
            "name": author->name,
            publishedAt,
            body,
        }`
      )
      .then((docs) => {
        setIsPending(false);
        setData(docs[0]);
        setError(null);
        console.log(docs[0]);
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
  }, [slug]);

  return { data, isPending, error };
};

export default useSanitysingle;
