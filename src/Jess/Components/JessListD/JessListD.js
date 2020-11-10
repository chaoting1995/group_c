import React, { useState, useEffect } from 'react'
import './JessListD.scss'
// import Button from '../../../Share/Components/Button/Button'
import 'antd/dist/antd.css'
import { Rate, Modal, Button } from 'antd'

function JessListD() {
  const [comments, setComments] = useState([])
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [modalText, setModalText] = React.useState('Content of the modal')

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }
  async function messageData() {
    const url = 'http://localhost:5000/product/bentoMsg'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setComments(data)
    console.log(data)
  }

  useEffect(() => {
    messageData()
  }, [])
  return (
    <>
      <div className="container-fluid" id="1">
        <div className="container mt-5 jess-proD-bg">
          <h2 className="jess-text-30orange text-center mt-5">商品評論</h2>
          <div className="row d-flex jess-msg-tittle justify-content-between mt-5">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-20orange">整體滿意度</li>
                <li class="jess-text-15Gray">來自 180 則評分，滿分5顆星</li>
              </ul>
            </div>
            <Button type="primary" onClick={showModal}>
              Open Modal with async logic
            </Button>
            <Modal
              title="Title"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              centered
            >
              <p>{modalText}</p>
            </Modal>

            <div className="col-6 col-sm-2 jess-msg-todo d-flex align-items-center">
              {/* <Button className="button-btn" text="我要評論"></Button> */}
              <Button className="button-btn" text="我要評論"></Button>
            </div>
          </div>
          <div className="jess-msg-container">
            {comments.map((item, index) => {
              return (
                <>
                  <div
                    key={item.sid}
                    className="row d-flex jess-msg-content justify-content-between"
                  >
                    <div className="col-9 d-flex">
                      <ul className="list-unstyled">
                        <li class=" d-flex ">
                          <div className="jess-rateStarColor mt-2">
                            {/* <ReactStars
                              size={20}
                              value={item.starRating}
                              edit={false}
                            /> */}
                            <Rate count={5} value={item.starRating} disabled />
                          </div>
                          <div className="jess-text-15Gray2 mt-2">
                            {item.name}
                          </div>
                        </li>
                        <li class="jess-text-15brown mt-3">{item.content}</li>
                      </ul>
                    </div>
                    <div className="col-2 jess-msg-todo d-flex align-items-center">
                      <div className="jess-text-15Gray">{item.created_at}</div>
                    </div>
                    <div className="jess-contentBorder"></div>
                  </div>
                </>
              )
            })}
          </div>
          {/* <Pagination size="small" total={10} /> */}
          <div className="jess-pageTotal"></div>
        </div>
      </div>
    </>
  )
}

export default JessListD
