import {
  Switch,
  Route
} from "react-router-dom";

import About from './Pages/About';
import Projects from './Pages/Projects';
import Experiences from './Pages/Experiences';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

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