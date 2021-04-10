// IMPORT ROUTER
import { Route, Switch } from "react-router-dom";

// IMPORT COMPONENT
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

// IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work">
          <OurWorks />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
