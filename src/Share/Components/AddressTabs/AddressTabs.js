import React, { useState, useEffect } from 'react'
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap'
import './AddressTabs.scss'
import {
  countries,
  townships,
  price,
} from '../../../Janice/Components/JanIndexx/data.js'

function AddressTabs(props) {
  const { placeholder, closeModal } = props
  const {
    address,
    setAddress,
    county,
    setCounty,
    district,
    setDistrict,
  } = props

  // const updateAddress = () => {
  //   const address = document.querySelector('.jan-address-input').value

  //   const newData = {
  //     address: address,
  //   }
  //   fetch('http://localhost:5000/index/member_list', {
  //     method: 'PUT',
  //     body: JSON.stringify(newData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then((r) => r.json())

  //     .then((obj) => {
  //       console.log(obj)
  //     })
  // }

  // Acomponent
  const ComponentA = (props) => {
    const [country, setCountry] = useState(-1)
    const [township, setTownship] = useState(-1)
    const [postcode, setPostcode] = useState(-1)

    //地址輸入部分，預設值式資料庫地址欄位
    const [tabInput, setTabInput] = useState(address)

    useEffect(() => {
      setAddress(tabInput)
    }, [tabInput])

    const hideInfo = () => {
      document.querySelector('.jan-map-results').style = 'visibility: hidden'
    }
    const showInfo = () => {
      document.querySelector('.jan-map-results').style = 'visibility: visible'
    }

    return (
      <div className="component d-flex justify-content-between align-items-center ">
        <div className="jan-tab-address-form-wrap">
          <div className="p-5">
            <form name="jan-address-form" id="jan-address-form">
              <p className="jan-form-announce">請填寫地址，查看免運金額</p>

              <div className="jan-address-radio">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      onClick={hideInfo}
                      style={{ fontSize: '1.5rem' }}
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect1"
                      value={country}
                      onChange={(e) => {
                        //將字串轉成數字
                        setCountry(+e.target.value)
                        //重置township的值
                        setTownship(0)
                        setTownship(-1)
                      }}
                    >
                      <option value={-1}>請選擇城市</option>
                      {countries.map((v, i) => (
                        <option key={i} value={i}>
                          {v}
                        </option>
                      ))}
                    </select>
                    <div className="iris-mainpage-whitebox"></div>
                    <div className="iris-mainpage-trianglearrow" />
                  </div>
                </div>
              </div>

              <br />
              <div className="jan-address-select">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      onClick={hideInfo}
                      value={township}
                      onChange={(e) => {
                        // 將字串轉成數字
                        setTownship(+e.target.value)
                      }}
                      style={{ fontSize: '1.5rem' }}
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect1"
                    >
                      <option value={-1}>點我選擇區域</option>
                      {country > -1 &&
                        townships[country].map((v, i) => (
                          <option key={i} value={i}>
                            {v}
                          </option>
                        ))}
                    </select>
                    <div className="iris-mainpage-whitebox"></div>
                    <div className="iris-mainpage-trianglearrow" />
                  </div>
                </div>
              </div>

              <br />
              <div className="jan-address-input">
                <input
                  style={{ fontSize: '1.5rem' }}
                  className="form-control iris-inputH50"
                  type="text"
                  placeholder="請輸入地址"
                  value={tabInput}
                  onChange={(e) => setTabInput(e.target.value)}
                  autoFocus
                />
              </div>

              <br />
              <div className="jan-address-button float-right">
                <button
                  onClick={showInfo}
                  type="button"
                  className="button-btn-y "
                  text="查詢結果"
                >
                  查詢結果
                </button>
              </div>
              <br />
              <br />
              <div className="jan-map-results p-2 mt-4 ">
                <p>
                  所在地點，符合滿
                  <span>
                    {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
                    {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
                    {country > -1 && township > -1 && price[country][township]}
                  </span>
                  元免運費
                </p>
              </div>

              <div className="jan-put-button float-right float-bottom">
                <button
                  // onClick={updateAddress}
                  type="button"
                  className="button-btn-y "
                  text="設為預設地址"
                >
                  設為預設地址
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="jan-tab-address-map"></div>
      </div>
    )
  }

  // B
  const ComponentB = (props) => {
    return (
      <div className="component d-flex justify-content-between ">
        <div className="jan-tab-shops-list-wrap">
          <div className="p-5">
            <p className="jan-form-announce">選擇到店自取</p>
            <div className="jan-shops-radio">
              <input
                type="radio"
                name="shop"
                id="shop1"
                value="1"
                defaultChecked={true}
              />
              <label for="shop1">東科店:</label>
              <p>新北市汐止區新台五路一段96號1樓</p>
              <input type="radio" name="shop" id="shop2" value="2" />
              <label for="shop2">安永鮮物_安和店:</label>
              <p>台北市大安區安和路一段111號</p>
              <input type="radio" name="shop" id="shop3" value="3" />
              <label for="shop3">歐克法咖啡_八德店:</label>
              <p>台北市松山區八德路二段371號</p>
              <input type="radio" name="shop" id="shop4" value="4" />
              <label for="shop4">南港店:</label>
              <p>台北市南港區重陽路263巷1號B1</p>
              <input type="radio" name="shop" id="shop5" value="5" />
              <label for="shop5">大安店:</label>
              <p>台北市大安區和平東路二段223</p>
              <div
                onClick={closeModal}
                className="jan-shops-button float-right"
              >
                <button className="button-btn-y " text="確認自取地點">
                  確認自取地點
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="jan-tab-shops-map"></div>
      </div>
    )
  }

  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName)
    removeTargets.forEach((target) => {
      target.classList.remove('active')
    })

    addElem.classList.add('active')
  }

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />)

    const tabContentA = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item')
      setComponent(<ComponentA />)
    }

    const tabContentB = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item')
      setComponent(<ComponentB name="B" />)
    }

    return (
      <div className="position-absolute position-fixed jan-tabs-bcc">
        <div className="jan-tabs">
          <div onClick={closeModal} className="jan-tabs-close"></div>
          <div className="jan-address-tab">
            <ul className="jan-address-tab-menu">
              <li
                className="jan-address-tab-menu__item active"
                onClick={tabContentA}
              >
                我要外送
              </li>
              <li className="jan-address-tab-menu__item" onClick={tabContentB}>
                我要自取
              </li>
            </ul>
            <div className=" d-flex">{component}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <TabMenu />
    </>
  )
}

export default AddressTabs
