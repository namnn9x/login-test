'use client'

interface IButton {
 label?: string,
 type: "button" | "submit" | "reset",
 loading?: boolean,
 setLoading?: (v: boolean) => void
 onClick?: () => void
}

const Button = ({
 label,
 type = "button"
}: IButton) => {
 return (
  <button type={type} className="text-white w-full
   focus:ring-blue-300 font-medium rounded-[4px] 
   bg-gradient-to-r from-[#ff0066] to-[#ff9933]
   text-sm px-5 py-2.5 mr-2">{label}</button>
 )
}

export default Button