import clsx from "clsx"
import React from "react"
import CardContentLeft, { ICardContentLeftProps } from "./CardContentLeft"

const CardContentRight: React.FC<ICardContentLeftProps> = ({
  className,
  ...props
}) => {
  return (
    <CardContentLeft
      className={clsx(className, "flex-row-reverse text-right")}
      {...props}
    />
  )
}

export default CardContentRight
