import clsx from "clsx"
import React from "react"
import Tooltip from "../Tooltip/Tooltip"
import Tag from "./Tag"

type ITag = [string, string]
interface ITagListProps {
  label: string
  tags: ITag[]
  className?: string
}
const TagList: React.FC<ITagListProps> = ({ label, className, tags }) => {
  return (
    <div className={clsx(className, "")}>
      <label
        className="text-gray-800 inline-block text-sm capitalize mb-2.5 font-bold"
        htmlFor=""
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {tags.map((item, index) => {
          return (
            <Tooltip title={item[0]} description={item[1]} key={index}>
              <Tag
                data-tooltip={item[0]}
                data-tooltip-description={item[1]}
                className="text-[12px] transition-all hover:bg-green-400"
              >
                {item[0]}
              </Tag>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
