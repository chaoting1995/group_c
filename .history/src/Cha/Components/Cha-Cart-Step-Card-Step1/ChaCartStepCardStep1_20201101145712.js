import React, { useState, useEffect } from 'react'
import ChaOrder from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Order/ChaCartMealItem'
import './ChaCartStepCardStep1.scss'

function ChaCartStepCardStep1(props) {
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, productName: '慢煮嫩雞胸-蒜味香草', productPrice: 150' },
    { id: 2, text: '學好react', completed: true },
  ])
  const chaCartOrders = Array.from({ length: 10 })
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div className="cha-step-header">
          步驟1：餐點明細
          {/* <button className="cha-former-cart-switch">小農購物車</button>
          <button className="cha-normal-cart-switch" disabled>
            訂餐購物車
          </button> */}
        </div>
        {chaCartOrders.map((_, index) => (
          <ChaOrder key={index} />
        ))}
        <div className="cha-horizontal-line"></div>
        <div className="cha-step1-total-price">
          <div className="cha-step1-total-price-word">小計</div>
          <div className="cha-step1-total-price-number">$1368</div>
        </div>
        {/* 確認按鈕 */}
        <div className="cha-step-check-btn-div">
          <input type="button" value="確認" className="cha-step-check-btn" />
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-step1-promotion-header-div">
          <div className="cha-step1-promotion-header">你可能還想來點</div>
        </div>
        <div className="cha-step1-promotion-row">
          <div className="cha-step1-promotion-picture"></div>
          <div className="cha-step1-promotion-picture"></div>
          <div className="cha-step1-promotion-picture"></div>
        </div>
      </div>
    </>
  )
}
export default ChaCartStepCardStep1
