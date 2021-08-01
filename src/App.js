import {
  Switch,
  Route
} from "react-router-dom";

import About from './pages/About';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experiences">
          <Experiences />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;