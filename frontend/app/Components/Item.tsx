import React from 'react'
import './Item.css'
import { useRouter } from 'next/router'

const Item = () => {
  return (
    <div className='item'>

      <div>
      <img
          className=" w-[15rem] h-[15rem]"
          src="https://i.ebayimg.com/images/g/i8gAAOSwSatiDUg1/s-l1600.jpg" 
          alt="Placeholder"/>
      </div>
      <p>Ur mom</p>
      
      <div className="item-prices">
        <div className="item-price-new">
            $0.25
        </div>
      </div>
    </div>
  )
}

export default Item
