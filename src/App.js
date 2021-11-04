import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MovieDetail from "./pages/MovieDetail";

//Router
import { Switch, Route, useLocation } from "react-router-dom";
//switch compornetn does stop as soon as much, does not go other, it gives the notification
// for framer-motion, we need to instal useLocatuin that is almost same with useHistory

//Animation
import { AnimatePresence } from "framer-motion";
//when the animate compornent leave, then detect the animate leave



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
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
//exactではexactでそのpathに該当するものだけを示す
//:idではその後にどんな文字が入った時でもbring us to the moviedetail, kind of like a dynamic text
//exitBeforeEnter: animate in until teh current compornent exit
export default App;
