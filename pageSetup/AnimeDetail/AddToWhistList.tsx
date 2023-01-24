import Icon from "@/ui/Icon"
import { faChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const AddToWhistList = () => {
  return (
    <div className="flex gap-4">
      <div className="rounded-sm flex-auto flex bg-blue leading-[35px] pl-2.5 text-center text-white">
        <button className="flex-auto">Add to list</button>
        <button className="min-w-[35px] min-h-[35px] bg-white bg-opacity-10 relative">
          <Icon className="position-center" icon={faChevronRight}></Icon>
        </button>
      </div>
      <button className="relative flex-1 max-w-[35px] max-h-[35px] rounded-sm bg-red-400 text-white">
        <Icon className="position-center" icon={faHeart}></Icon>
      </button>
    </div>
  )
}

export default AddToWhistList
