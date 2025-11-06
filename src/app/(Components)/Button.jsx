"use client"


const Button = ({className,children}) => {
 
  return (
    <div className={` text-white ${className}`}>{children}</div>
  )
}

export default Button