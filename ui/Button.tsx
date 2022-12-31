import clsx from "clsx"
import React from "react"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IButtonProps> = ({ className, ...props }) => {
  return <button className={clsx(className, "button")} {...props} />
}

export default Button
