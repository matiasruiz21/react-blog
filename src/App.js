import "./css/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:slug" component={BlogDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
