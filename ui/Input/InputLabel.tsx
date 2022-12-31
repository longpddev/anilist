import clsx from "clsx"
import React from "react"

const InputLabel: React.FC<{
  label: string
  children: React.ReactNode
  className?: string
}> = ({ children, label, className }) => {
  return (
    <div className={clsx(className)}>
      <label
        className="pb-2.5 text-gray-900 text-[15px] inline-block font-semibold"
        htmlFor=""
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default InputLabel
