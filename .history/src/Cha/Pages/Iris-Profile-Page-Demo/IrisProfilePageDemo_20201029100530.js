import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenu from 'Cha/Components-demo/IrisMemberMenu/IrisMemberMenu';
import IrisDataEdit from 'Cha/Components-demo/IrisDataEdit/IrisDataEdit';
import './IrisProfilePageDemo.scss';

import NavBar from '../../../Share/Components/NavBar/NavBar';
import VNavbar from '../../../Share/Components/VNavbar/VNavbar';
function IrisProfilePageDemo() {
  return (
    <>
      {/* <NavBar />
      <VNavbar /> */}
      <div className="cha-in-IrisProfilePageDemo-fake">111</div>
      <div className="container iris-userprofile-container">
        <IrisMemberMenu />
        <IrisDataEdit />
      </div>
    </>
  );
}

export default IrisProfilePageDemo;
