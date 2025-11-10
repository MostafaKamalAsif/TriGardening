"use client"

const Button = ({className, children, onClick, type = "button"}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button 
      type={type}
      onClick={handleClick}
      className={`text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button