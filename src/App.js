// IMPORT ROUTER
import { Route, Switch } from "react-router-dom";

// IMPORT COMPONENT
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

// IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import Contact from "./pages/Contact";
import OurWorkDetails from "./pages/OurWorkDetails";

// ANIMATION
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWorks />
          </Route>
          <Route path="/work/:params">
            <OurWorkDetails />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
