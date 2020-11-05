import React, { useState, useEffect } from 'react'
import 'Ru/Components/RuCards/RuCustom/Style.scss'
import RuArrowLeft from 'Ru/Components/RuArrowLeft/RuArrowLeft'
import RuArrowRight from 'Ru/Components/RuArrowRight/RuArrowRight'
import RuButtonB from 'Ru/Components/RuButtonB/RuButtonB'
import RuButtonC from 'Ru/Components/RuButtonC/RuButtonC'
import RuCounter from 'Ru/Components/RuCounter/RuCounter'
import RuAddCart from 'Ru/Components/RuAddCart/RuAddCart'
import RuSelection from 'Ru/Components/RuSelection/RuSelection'
import RuPriceA from 'Ru/Components/RuPriceA/RuPriceA' // 資訊區價格 網頁版
import RuCalA from 'Ru/Components/RuCalA/RuCalA' // 資訊區熱量 網頁版
import RuRiceA from 'Ru/Components/RuRiceA/RuRiceA'
import RuMeetA from 'Ru/Components/RuMeetA/RuMeetA'
import RuVegetableA from 'Ru/Components/RuVegetableA/RuVegetableA'
import RuEggA from 'Ru/Components/RuEggA/RuEggA'

// 引用共用元件
import Card from 'Share/Components/Card/Card'
import cauliflower from './Images/cauliflower.svg'

// 引用圖片
import background from './Images/background.png'
import { ReactComponent as LunchBox } from './Images/lunchBox.svg' // 將svg以元件方式引入

function RuCustom() {
  const [moveX, setMoveX] = useState(0) // 選項區滑動變亮(RuArrowRight / RuArrowLeft 調整)
  const [isPrice, setIsPrice] = useState(true) // 是否開啟價格標示
  const [isCal, setIsCal] = useState(false) // 是否開啟營養標示
  const [selection, setSelection] = useState('rice') // 選擇開啟哪個菜色選區
  const [limitX, setLimitX] = useState(0) // 右滑極限值(RuButtonB可以調不同選項區的極限值)

  function switchPrice() {
    setIsPrice(true)
    setIsCal(false)
  }

  function switchCal() {
    setIsPrice(false)
    setIsCal(true)
  }

  return (
    <>
      {/* <h1 style={{ textAlign: 'center', fontSize: '80px' }}>
        ----- 這頁是客製化便當 -----
      </h1> */}

      {/* 商品區 - 網頁版 s */}
      <div className="ru-custom-containerA">
        <div className="ru-custom-warp">
          <div className="ru-drop-container">
            <div className="ru-drop-warp">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  <LunchBox />
                </div>
              </div>
              <div className="ru-detail-container">
                <div className="ru-switchBtn-container">
                 {/* 是否開啟價格標示 */}
                  <button id={isPrice && 'ru-active'} onClick={switchPrice}>
                    今日菜色
                  </button>
                  {/* 是否開啟營養標示 */}
                  <button id={isCal && 'ru-active'} onClick={switchCal}> 
                    營養標示
                  </button>
                </div>
                <div className="ru-info-container">
                  {isPrice && <RuPriceA />}
                  {isCal && <RuCalA />}
                </div>
                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <RuCounter />
                    <RuAddCart
                      id={'addCart-btn-custom'}
                      parentId={'addCart-btn-warp-custom'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ru-drag-container">
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp">
                  <RuButtonB
                    text={'副食'}
                    id={'ru-buttonB-rice'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'主食'}
                    id={'ru-buttonB-meet'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'配菜'}
                    id={'ru-buttonB-vegetable'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'蛋'}
                    id={'ru-buttonB-egg'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                </div>
              </div>

              <div className="ru-species-container">
                <RuArrowLeft moveX={moveX} setMoveX={setMoveX} />
                {/* 副食 / 主食 / 配菜 / 蛋 的元件 s*/}
                <div className="ru-species-warp">
                  {/* 移動區 s */}
                  <ul
                    id="moveArea1"
                    style={{ transform: `translateX(${moveX}px)` }}
                  >
                    {selection === 'rice' && <RuRiceA />}
                    {selection === 'meet' && <RuMeetA />}
                    {selection === 'vegetable' && <RuVegetableA />}
                    {selection === 'egg' && <RuEggA />}
                    {/*  副食 / 主食 / 配菜 / 蛋 的元件 e*/}
                  </ul>
                  {/* 移動區 e */}
                </div>
                <RuArrowRight
                  moveX={moveX}
                  setMoveX={setMoveX}
                  limitX={limitX}
                  setLimitX={setLimitX} 
                />
              </div>
            </div>
          </div>
        </div>
        {/* 背景米圖 s */}
        <img src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區 - 網頁版 e */}

      {/* 商品區 - 手機版 s */}
      <div className="ru-custom-containerC">
        <div className="ru-custom-warp">
          <div className="ru-drop-container">
            <div className="ru-drop-warp">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  <LunchBox />
                </div>
              </div>
            </div>
          </div>
          <div className="ru-drag-container">
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp">
                  <div className="ru-selectionBtn-warp ru-selectionBtn-warp1">
                    <RuButtonB
                      text={'副食'}
                      // id={'ru-buttonB-rice'}
                    />
                    <RuButtonB
                      text={'主食'}
                      // id={'ru-buttonB-meet'}
                    />
                  </div>
                  <div className="ru-selectionBtn-warp ru-selectionBtn-warp2">
                    <RuButtonB
                      text={'配菜'}
                      // id={'ru-buttonB-vegetable'}
                    />
                    <RuButtonB
                      text={'蛋'}
                      // id={'ru-buttonB-egg'}
                    />
                  </div>
                </div>
              </div>

              <div className="ru-species-container">
                <RuArrowLeft />
                <div className="ru-species-warp">
                  <ul>
                    {/* 品項1 s*/}
                    <li className="ru-species-item ru-species-item1">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>10大卡</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>10大卡</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>10大卡</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ru-species-btn">
                        <RuButtonC text={'選擇'} />
                      </div>
                    </li>
                    {/* 品項1 e*/}

                    {/* 品項2 s*/}
                    <li className="ru-species-item ru-species-item2">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ru-species-btn">
                        <RuButtonC text={'選擇'} />
                      </div>
                    </li>
                    {/* 品項2 e*/}

                    {/* 品項3 s*/}
                    <li className="ru-species-item ru-species-item3">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項3 e*/}

                    {/* 品項4 s*/}
                    <li className="ru-species-item ru-species-item4">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項4 e*/}

                    {/* 品項5 s*/}
                    <li className="ru-species-item ru-species-item5">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰:<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量:<span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物:<span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質:<span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪:<span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項5 e*/}
                  </ul>
                </div>
                <RuArrowRight />
              </div>

              <div className="ru-detail-container">
                <div className="ru-switchBtn-container">
                  <button>今日菜色</button>
                  <button>營養標示</button>
                </div>

                <div className="ru-info-container">
                  <div className="ru-info-item-container">
                    <ul className="ru-info-item-warp">
                      {/* 詳細資料品項1 s */}
                      <li className="ru-info-item ru-info-item1">
                        <div className="ru-category-container">
                          <p className="ru-category">副食</p>
                        </div>
                        <p className="ru-selectionName">香甜白飯</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項1 e */}

                      {/* 詳細資料品項2 s */}
                      <li className="ru-info-item ru-info-item2">
                        <div className="ru-category-container">
                          <p className="ru-category">主食</p>
                        </div>
                        <p className="ru-selectionName">慢煮嫩雞胸-蒜味香草</p>
                        <p className="ru-number">$55</p>
                      </li>
                      {/* 詳細資料品項2 e */}

                      {/* 詳細資料品項3 s */}
                      <li className="ru-info-item ru-info-item3">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">清炒高麗菜</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項3 e */}

                      {/* 詳細資料品項4 s */}
                      <li className="ru-info-item ru-info-item4">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">綠色嫩花椰</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項4 e */}

                      {/* 詳細資料品項5 s */}
                      <li className="ru-info-item ru-info-item5">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">黃金玉米</p>
                        <p className="ru-number">$15</p>
                      </li>
                      {/* 詳細資料品項5 e */}

                      {/* 詳細資料品項6 s */}
                      <li className="ru-info-item ru-info-item6">
                        <div className="ru-category-container">
                          <p className="ru-category">蛋</p>
                        </div>
                        <p className="ru-selectionName">水煮蛋</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項 e */}
                    </ul>
                  </div>
                  <div className="ru-info-total-container">
                    <div className="ru-info-total-warp">
                      <h3>總金額</h3>
                      <p>$110</p>
                    </div>
                  </div>
                </div>

                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <RuSelection />
                    <RuAddCart
                      id={'addCart-btn-custom'}
                      parentId={'addCart-btn-warp-custom'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={background}></img>
      </div>
      {/* 商品區 - 網頁版 e */}
      {/* <Selecton /> */}

      {/* 背景米圖 s */}
      {/* <img src={background}></img> */}
      {/* 背景米圖 e */}
    </>
  )
}

export default RuCustom
