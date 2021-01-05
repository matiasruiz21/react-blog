import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { error, isPending, data: blogs } = useFetch(
    "http://localhost:1337/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:1337/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
    // projectFirestore
    //   .collection("Blogs")
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     console.error("Error removing document: ", error);
    //   });
  };

  // const { docs: blogs, isPending, error } = useFsdoc("Blogs", id);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Escrito por {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>eliminar</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
