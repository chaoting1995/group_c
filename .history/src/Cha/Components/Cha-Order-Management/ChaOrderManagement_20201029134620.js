import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';

function ChaOrderManagement(props) {
  return (
    <>
      <div className="cha-order-mana-content-container col-9">
        <div className="cha-order-mana-content-row1">
          <div style={{ color: '#F48145' }}>未送達</div>
          <div>已送達</div>
          <div>已退費</div>
          <div>揪團中</div>
        </div>
        {/* <div className="cha-order-mana-content-row2"> */}
          <div className="cha-order-mana-border"></div>
        {/* </div> */}
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
      </div>
    </>
  );
}
export default ChaOrderManagement;
