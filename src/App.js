
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
   
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className = "content">
        <Switch>
        <Route exact path="/">
        <Home />     
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
