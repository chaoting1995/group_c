import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'

import MyNavbar from 'Cha/Components-demo/MyNavbar'

function Home(props) {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>中繼站</h1>
        <hr />
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            購物車
          </button>
        </Link>
        <Link to="/">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            小農購物車
          </button>
        </Link>
        <hr />
        <hˇ>中繼站</h1>
        <Link to="/groupOrder/groupOrderCreate">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            作伙揪團
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderSearch">
          <button type="button" class="btn btn-primary btn-lg">
            呼朋引伴
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
