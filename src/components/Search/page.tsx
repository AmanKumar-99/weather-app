import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'
import style from './page.module.css'
import WeatherCard from '../card/weatherCard/page'

const Search = (props: SearchProps) => {
  return (
    <div className={style.search}>
      <Input.Search {...props} placeholder='Enter Location...' />
    </div>
  )
}

export default Search
