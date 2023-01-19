import React from 'react'
import Pages from '../pages';
import { GlobalStyle } from '../components/Globalstyles';
import Navbar from '../components/Navbar';
import Benifits from '../components/Benifits';
import FaqSection from '../components/FaqSection';
import Home from '../components/Home';

import { Switch, Route } from 'react-router-dom';
const Root = () => {
  return (
    <div>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact={"true"} path={"/"} >
              <Pages />  
            </Route>
            <Route path={"/home"}>
              <Home />
        </Route>
        <Route path={"/courses"}>
              <Benifits />
        </Route>
        <Route path={"/contact"}>
          <FaqSection />
        </Route>
          </Switch>
    </div>
  )
}

export default Root