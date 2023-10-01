import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b border-[#6BDFDB]' : 'text-[#ADB7BE]'
  return (
    <span onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </span>
  )
}

export default TabButton