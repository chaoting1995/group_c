import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss';

function ChaCartSubmitCard(props) {
  const { mealsDisplay } = props;
  const [shipping, setShipping] = useState(0);

  // 計算商品總量
  const calcuTotalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount;
    }
    return total;
  };
  let totalAmount = calcuTotalAmount(mealsDisplay);
  // 計算商品價格小計
  const calcuSubtotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };
  let subtotalPrice = calcuSubtotalPrice(mealsDisplay);
  // 運費商業邏輯
  useEffect(() => {
    if (totalAmount > 0 && totalAmount <= 2) {
      setShipping(50);
    } else {
      setShipping(0);
    }
  }, [totalAmount]);
  // 計算總價
  let totalPrice = subtotalPrice + shipping - 50;

  // {
  //   "sid": 8,
  /////////////////   "order_sid": 1,
  /////////////////   "product_sid": 111,
  /////////////////   "product_amount": 11,
  //   "product_name": "玫瑰岩鹽烤雞",
  //   "product_price": 150
  return (
    <>
      <div className="cha-aside-card-fake"></div>
      <div className="cha-aside-card">
        <div className="cha-step-header">
          購物清單
          <Link to="/cha_farmer_cart" className="cha-control-normal-switch">
            <button className="cha-control-normal-switch cha-farmer-cart-switch">
              小農購物車
            </button>
          </Link>
          <button className="cha-normal-cart-switch" disabled>
            訂餐購物車
          </button>
        </div>
        <div className="cha-little-total">
          <div>
            小計 X <span>{totalAmount}</span>
          </div>
          <div>${subtotalPrice}</div>
        </div>

        <div className="cha-shipping">
          <div>運費</div>
          <div>${shipping}</div>
        </div>
        <div className="cha-shipping">
          <div className="form-group">
            <input
              type="checkbox"
              name="cha-monster-coin"
              value="cha-monster-coin"
              id="cha-monster-coin"
            />
            <labe htmlFor="cha-monster-coin">使用怪獸幣</labe>
          </div>
          <div>-$50</div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-tableware">
          <div>
            <lab>
              <input type="radio" name="tableware" value="tableware-yes" />
              附餐具
            </lab>
            <lab>
              <input type="radio" name="tableware" value="tableware-no" />
              不附餐具
            </lab>
          </div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-shopping-list-total">
          <div>總計</div>
          <div className="cha-shopping-list-total-number">${totalPrice}</div>
        </div>
        {/* 提交按鈕 */}
        <div className="cha-shopping-cart-btn-div">
          <Link to="/cha_cart_order_success">
            <input
              type="button"
              value="送出"
              className="cha-shopping-cart-btn"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
export default ChaCartSubmitCard;
