import React from "react";
import "./Style.scss";

function RuButtonB(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const { text } = props;
  return (
    <>
      <button className='ru-buttonB'>{text}</button>
    </>
  );
}

export default RuButtonB;
