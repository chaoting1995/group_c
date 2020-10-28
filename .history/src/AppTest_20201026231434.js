import React, { useState, useEffect } from 'react'

import MyNavbar from 'Cha/Components-demo/MyNavbar'
import MyFooter from 'Cha/Components-demo/MyFooter'
import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from 'Cha/pages-demo/Home'
import About from 'Cha/pages-demo/About'
import Product from 'Cha/pages-demo/Product'

// import Counter from 'Cha/Components/Cha-Counter/Counter'
// import ScrollApp from 'Cha/Components/Cha-ToTop/ScrollApp'
// import ScrollArrow from 'Cha/Components/Cha-ToTop/ScrollArrow'
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart'
// import ChaProgressBar from 'Cha/Components/Cha-ProgressBar/ChaProgressBar'

function AppTest() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cha_cart">
              <ChaCart />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cha_former_cart">
              <Product />
            </Route>
            <Route path="/cha_cart_submit_success">
              <Success />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
    //  <Counter />
    // <ChaCart />
    // <ScrollArrow />
    // <ScrollApp />
    // <ChaProgressBar />
  )
}

export default AppTest
