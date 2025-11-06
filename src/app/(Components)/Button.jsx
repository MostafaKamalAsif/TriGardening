"use clients"


const Button = ({className,children}) => {
 
  return (
    <div className={`bg-[#CC7722] text-white ${className}`}>{children}</div>
  )
}

export default Button