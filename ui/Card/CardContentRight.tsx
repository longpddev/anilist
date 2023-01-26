import clsx from "clsx"
import React from "react"
import CardContentLeft, {
  CardContentLeftSkeleton,
  ICardContentLeftProps,
} from "./CardContentLeft"

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

export const CardContentRightSkeleton: React.FC<ICardContentLeftProps> = ({
  className,
  ...props
}) => {
  return (
    <CardContentLeftSkeleton
      className={clsx(className, "flex-row-reverse text-right")}
      {...props}
    />
  )
}

export default CardContentRight
