import React, { useState, useEffect } from 'react'
// import RightArrowWhite from 'Cha/Components/Cha-Cart-ProgressBar/Images/right-arrow-white.svg'
import './ChaCartProgressBar.scss'

function ChaCartProgressBar(props) {
  return (
    <>
      <div className="cha-progress-bar progress-bar ">
        <div className="cha-right-arrow"></div>

        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
    </>
  )
}
export default ChaCartProgressBar
