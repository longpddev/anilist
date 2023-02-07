import clsx from "clsx"
import React from "react"

const PageSection: React.FC<{
  children: React.ReactNode
  title: string
  full?: boolean
}> = ({ children, title, full }) => {
  return (
    <>
      <h2 className="mb-2.5">{title}</h2>
      <div
        className={clsx("grid grid-cols-1 gap-x-8 gap-y-4 mb-8", {
          "lg:grid-cols-2": !full,
        })}
      >
        {children}
      </div>
    </>
  )
}

export default PageSection
