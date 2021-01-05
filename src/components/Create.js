import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const history = useHistory();

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:1337/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });

    // Add a new document with a generated id.
    // projectFirestore
    //   .collection("Blogs")
    //   .add({
    //     title: mytitle,
    //     author: myauthor,
    //     body: mybody,
    //     createdAt: today,
    //   })
    //   .then(() => {
    //     history.push("/");
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
  };

  return (
    <div className="create">
      <h2>Escribir Nuevo Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Titulo:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Cuerpo:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Autor:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Postear Blog</button>
      </form>
    </div>
  );
};

export default Create;
