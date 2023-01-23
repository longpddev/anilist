import clsx from "clsx"
import React from "react"

const Card: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex bg-foreground rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
