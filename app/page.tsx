
import Image from 'next/image'

export default function Home() {
  return (
    <div className="wrap text-center">
      <h1 className='item-title first-title'>
        <span className='item-title-all'>Tous les </span>
        <span className="item-subtitle" data-default="Cosmetics">Skins</span>
        <div>
          <span id="item-count">1 680 </span>
          <span className="item-subtitle" data-default="Cosmetics">Skins</span>
        </div>
      </h1>
      <div className="item-wrap">
        <div className="category-wrap flex justify-center">
          <div className="category-list flex justify-center flex-row">
            <div className="category">
              <div className="category-icon skin-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/skin_category.svg' alt="Skin Icon" /></a>
              </div>
              <div className="category-name"></div>
            </div>
            <div className="category">
              <div className="category-icon pickaxe-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/pickaxe_category.svg' alt="Skin Icon" /></a>
              </div>
              <div className="category-name"></div>
            </div>
            <div className="category">
              <div className="category-icon camo-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/camo_category.svg' alt="Skin Icon" /></a>

              </div>
              <div className="category-name"></div>
            </div>
            <div className="category">
              <div className="category-icon bag-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/bag_category.svg' alt="Skin Icon" /></a>

              </div>
              <div className="category-name"></div>
            </div>
            <div className="category">
              <div className="category-icon glider-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/glider_category.svg' alt="Skin Icon" /></a>

              </div>
              <div className="category-name"></div>
            </div>
            <div className="category">
              <div className="category-icon dance-icon w-20 h-24 mb-4">
                <a href="" className="category-link"><img src='/dance_category.svg' alt="Skin Icon" /></a>
              </div>
              <div className="category-name"></div>
            </div>
          </div>
        </div>
        <div className="search-wrap flex justify-center">
          <input type="search" id="default-search" className="block w-1/2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required />
        </div>
        <div className="items">
          <a href="#" className='item-icon' data-id=""></a>
        </div>
      </div>
    </div>
  )
}
