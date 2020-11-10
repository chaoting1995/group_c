import React, { useState, useEffect } from 'react';
import Counter from 'Cha/Components/Cha-Cart-Step-Card-Step1/Counter/Counter';
import './ChaCartMealList.scss';
function ChaCartMealList(props) {
  const {
    mealsItem,
    deleteMethod,
    // updateCartToLocalStorage,
    meals,
  } = props;
  // 當mealsDisplay裡出現productAmount為0的物件，刪掉這個白癡的物件
  useEffect(() => {
    return mealsItem.productAmount === 0 && deleteMethod;
  }, [meals]);
  return (
    <>
      <div className="cha-order">
        <div className="cha-order-right">
          <div className="cha-product-pic"></div>
          <div className="cha-step1-content">
            <div className="cha-step1-product-name">
              {mealsItem.productName}
            </div>
            <div className="cha-step1-product-price">
              ${mealsItem.productPrice}
            </div>
          </div>
        </div>
        <div className="cha-order-left">
          <Counter {...props} />
          <div className="cha-trash-can" onClick={deleteMethod}></div>
        </div>
      </div>
    </>
  );
}
export default ChaCartMealList;
