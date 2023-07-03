import { CheckCircleFilled, RightOutlined, WarningFilled } from '@ant-design/icons'
import Card from '../page'
import style from './page.module.css'

interface WeatherCardData {
  locationData: string
  temperature: number
  weatherStatus: string
  visibility: number
  icon: string
  onClick?: () => void
}

const WeatherCard = (props: WeatherCardData) => {
  const { locationData, temperature, weatherStatus, icon, visibility, onClick } = props
  return (
    <Card className={style.main}>
      <div className={style.mainCardHeader}>
        <div className={style.location}>{locationData}</div>
        <RightOutlined className={style.navigateBtn} onClick={onClick} />
      </div>
      <div className={style.weatherInfo}>
        <div className={style.temperature}>
          {temperature}
          <span>&#176;</span>
        </div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='Weather img' />
      </div>
      {visibility < 5000 && (temperature > 320 || temperature < 295) ? (
        <div className={style.weatherCondition}>
          <div className={style.status}>
            <WarningFilled className={style.warningIcon} />
            <div className={style.warningTxt}>Warning</div>
          </div>
          <div className={style.warningInfo}>{weatherStatus}</div>
        </div>
      ) : (
        <div className={style.weatherCondition}>
          <div className={style.status}>
            <CheckCircleFilled className={style.goodIcon} />
            <div className={style.goodTxt}>Good</div>
          </div>
          <div className={style.goodInfo}>{weatherStatus}</div>
        </div>
      )}
    </Card>
  )
}

export default WeatherCard
