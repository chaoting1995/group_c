import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'

function Home(props) {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1>Hello</h1>
      <a href="/todo">a link to todopage</a>
      <hr />
      <Link to="/cha_cart">Link component to todopage</Link>
    </>
  )
}

export default Home
