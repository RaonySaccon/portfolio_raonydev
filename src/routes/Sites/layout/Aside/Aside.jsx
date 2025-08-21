import React from 'react'
import { navList } from '../Header/navList'
import ButtonCta from '../../components/ButtonCta/ButtonCta'

const Aside = () => {
  return (
    <div className='w-full backdrop-blur py-4 px-8 md:hidden'>
      <ul className='flex flex-col gap-4'>
        {navList.map(item => (
          <li className='flex items-center'><span className='w-7'>{item.icon}</span>{item.title}</li>
        ))}
        <ButtonCta text="CONTATO" className="mt-4" />
      </ul>
    </div>
  )
}

export default Aside