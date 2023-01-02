import clsx from "clsx"
import React from "react"

const CheckboxLabel: React.FC<{
  label: string
  className?: string
  children: React.ReactNode
  classNameDefault?: string
  id?: string
}> = ({
  label,
  children,
  className,
  id,
  classNameDefault = "text-sm font-bold hover:text-gray-800 text-gray-700 space-x-2",
}) => {
  return (
    <div className={clsx(className, classNameDefault, "")}>
      {children}
      <label
        className="cursor-pointer inline-block select-none capitalize"
        htmlFor={id || ""}
      >
        {label}
      </label>
    </div>
  )
}

export default CheckboxLabel
