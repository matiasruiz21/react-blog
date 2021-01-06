import useSanity from "../hooks/useSanity";
import BlogList from "./BlogList";

const Home = () => {
  const { error, isPending, data: blogs } = useSanity("blog");

  //const { docs: blogs, isPending, error } = useFirestore("Blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
