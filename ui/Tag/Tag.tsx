import clsx from "clsx"
import React from "react"
import "./Tag.scss.css"
interface ITagProps extends React.AllHTMLAttributes<HTMLSpanElement> {}
const Tag: React.FC<ITagProps> = ({ className, ...props }) => {
  return <span className={clsx(className, "tag")} {...props} />
}

export default Tag
