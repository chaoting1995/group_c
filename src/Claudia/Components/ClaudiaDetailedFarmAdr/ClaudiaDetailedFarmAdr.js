import React from 'react';
import './ClaudiaDetailedFarmAdr.scss';

function ClaudiaDetailedFarmAdr() {
    return (
        <>
            <div className="claudia-detailed-farm-adr">
                <h1><b>體驗地點</b></h1>
                <div className="claudia-detailed-farm-adr-container">
                    <div className="claudia-detailed-farm-adr-info">
                        <p>農場地址：台北市內湖區碧山路58-1號</p>
                        <p>聯絡電話：0912-472-001</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.032376624603!2d121.58711061485543!3d25.100765341766156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acfc16c4180b%3A0xac447d9596417f6a!2z6L6y6amb5qOn6L6y5aC0!5e0!3m2!1szh-TW!2stw!4v1603621745007!5m2!1szh-TW!2stw" width="560" height="460" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="claudia-detailed-farm-adr-transport">
                        <h2>1. 捷運市政府站→轉小2路公車→白石湖社區同心池下車，即到農場。</h2>
                        <h2>2. 捷運內湖站→下車步行至「成功路4段182巷口」（約160公尺）→轉小2路公車或小2路區間車→白石湖社區同心池下車，即抵農場。</h2>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ClaudiaDetailedFarmAdr;