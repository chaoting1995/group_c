import React, { useState, useEffect } from 'react';
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList';
import './ChaCartStepCardStep1.scss';

function ChaCartStepCardStep1(props) {
  const { setSubtotal, setTotalAmount } = props;
  const [defaultMeals, setDefaultMeals] = useState([]);
  const updateCartToLocalStorage = (items) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const newCart = [...currentCart, ...items];
    localStorage.setItem('cart', JSON.stringify(newCart));

    // 設定資料
    setDefaultMeals(newCart);
  };
  // DEMO加入購物車
  const handleDefaultMeals = () => () => console.log('hi');
  updateCartToLocalStorage([
    {
      id: 1,
      productName: '慢煮嫩雞胸-蒜味香草',
      productPrice: 150,
      productAmount: 1,
    },
    {
      id: 2,
      productName: '玫瑰岩鹽烤雞',
      productPrice: 160,
      productAmount: 3,
    },
    {
      id: 3,
      productName: '乾煎功夫鱸魚',
      productPrice: 170,
      productAmount: 3,
    },
  ]);

  // 刪除商品選項
  const handleDelete = (id) => {
    const newDefaultMeals = defaultMeals.filter(
      (item, index) => item.id !== id
    );
    setDefaultMeals(newDefaultMeals);
  };
  // 計數器加減功能
  const handleCount = (id, type) => {
    const newDefaultMeals = [...defaultMeals];
    const todoItemIndex = newDefaultMeals.findIndex((item) => item.id === id);
    if (todoItemIndex !== -1) {
      if (type === 'increment') {
        newDefaultMeals[todoItemIndex].productAmount += 1;
      }
      if (
        type === 'decrement' &&
        newDefaultMeals[todoItemIndex].productAmount > 1
      ) {
        newDefaultMeals[todoItemIndex].productAmount -= 1;
      }
      setDefaultMeals(newDefaultMeals);
    }
  };
  // 計算商品價格小計
  const subSum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    setSubtotal(total);
    return total;
  };
  const totalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount;
    }
    return total;
  };
  setTotalAmount(totalAmount(defaultMeals));

  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div className="cha-step-header" onClick={handleDefaultMeals}>
          步驟1：餐點明細
        </div>
        {/* 餐點項目 */}
        {defaultMeals.map((item, index) => (
          <ChaCartMealList
            key={item.id}
            mealsItem={item}
            deleteMethod={() => handleDelete(item.id)}
            handleCount={handleCount}
          />
        ))}
        <div className="cha-horizontal-line"></div>
        <div className="cha-step1-total-price">
          <div className="cha-step1-total-price-word">小計</div>
          <div className="cha-step1-total-price-number">
            ${subSum(defaultMeals)}
          </div>
        </div>
        {/* 確認按鈕 */}
        {/* <div className="cha-step-check-btn-div">
          <input type="button" value="確認" className="cha-step-check-btn" />
        </div> */}
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
  );
}
export default ChaCartStepCardStep1;
