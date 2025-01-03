import React from 'react'
import {FaShippingFast} from 'react-icons/fa'
import {MdOutlinePayment, MdProductionQuantityLimits} from 'react-icons/md'
import {TbTruckReturn} from 'react-icons/tb'

function Service() {

    const data = [
        {icons:<FaShippingFast size={30}/>, title:"Free Shipping"},
        {icons:<MdOutlinePayment size={30}/>, title:"Authentic Products"},
        {icons:<TbTruckReturn size={30}/>, title:"Easy Return"},
        {icons:<MdProductionQuantityLimits size={30}/>, title:"Secure Payment"},
    ]

  return (
    <div className='mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap '>
       {
        data.map((item, index) => (
            <div key={index} className='bg-cyan-800 py-3 px-3 rounded text-white flex gap-2 flex-col items-center w-[250px] cursor-pointer hover:scale-105 transition-all duration-200'>
                {item.icons }
                <p>{item.title}</p>
            </div>
        ))
       }
    </div>
  )
}

export default Service