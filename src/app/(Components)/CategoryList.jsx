import React from 'react'

const CategoryList = ({className,text}) => {
  return (
    <>
   <div className={`flex gap-x-3 items-center ${className}`}>
    <input type="checkbox" className="w-5 h-5 text-green-600" />
  <span className="text-[#404040]">{text}</span>
  
</div>
    </>
  )
}

export default CategoryList