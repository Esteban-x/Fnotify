
import Image from 'next/image'

export default function Home() {
  return (
    <div className="wrap text-center">
      <h1 className='item-title first-title'>
        <span className='item-title-all'>Toutes les tenues</span>
        <div><span id="item-count">1 680 </span>
          <span className="item-subtitle" data-default="Cosmetics">Tenues</span>
        </div>
      </h1>
    </div>
  )
}
