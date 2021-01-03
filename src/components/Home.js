import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  
  const { error, isPending, data: blogs } = useFetch(
    "http://localhost:1337/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
