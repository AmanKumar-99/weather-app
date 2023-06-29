'use client'
import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'
import style from './page.module.css'

const Search = (props: SearchProps) => {
  return (
    <div className={style.search}>
      <Input.Search {...props} placeholder='Enter Location...' />
    </div>
  )
}

export default Search
