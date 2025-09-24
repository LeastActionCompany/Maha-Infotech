const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "font-medium py-2 px-4 rounded-lg transition duration-300"
  
  const variants = {
    primary: "bg-royal-blue-600 text-white hover:bg-royal-blue-700",
    secondary: "border-2 border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-600 hover:text-white",
    white: "bg-white text-royal-blue-700 hover:bg-gray-100"
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button