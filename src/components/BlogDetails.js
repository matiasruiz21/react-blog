import { useParams } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import useSanitysingle from "../hooks/useSanitysingle";
import BlockContent from "@sanity/block-content-to-react";

const BlogDetails = () => {
  const { slug } = useParams();
  const { error, isPending, data: blogs } = useSanitysingle(slug);

  // const handleClick = () => {
  //   fetch("http://localhost:1337/blogs/" + blogs.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  //   // projectFirestore
  //   //   .collection("Blogs")
  //   //   .doc(id)
  //   //   .delete()
  //   //   .then(() => {
  //   //     history.push("/");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error removing document: ", error);
  //   //   });
  // };

  // const { docs: blogs, isPending, error } = useFsdoc("Blogs", id);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <div>
            <BlockContent
              blocks={blogs.body}
              projectId="j3t21mnr"
              dataset="production"
            />
          </div>
          <p>Escrito por {blogs.name}</p>
          {/* <button onClick={handleClick}>eliminar</button> */}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
