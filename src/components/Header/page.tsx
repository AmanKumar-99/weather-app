import { IMAGE } from '@/constants/image'
import Image from 'next/legacy/image'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-image'>
        <Image src={`/${IMAGE.LOGO}`} width={80} height={80} />
        <div className='header-font'>Weather Forcaster</div>
      </div>
    </div>
  )
}

export default Header
