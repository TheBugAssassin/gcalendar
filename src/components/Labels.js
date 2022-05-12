import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext)
  return (
    <React.Fragment>
      <p className='text-white font-bold mt-10'>Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className='items-center mt-3 block'>
          <input
            type='checkbox'
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-white rounded focus:ring-0 cursor-pointer`}
          />
          <span className='ml-2 text-white capitalize'>{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  )
}
