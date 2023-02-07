import React from "react"
import Header from "pageSetup/UserDetail/Header"
import Body from "pageSetup/UserDetail/Body"

import "./style.scss.css"

const layout: React.FC<{
  children: React.ReactNode
  params: { userName: string }
}> = ({ children, params: { userName } }) => {
  return (
    <div className="user-detail purple">
      <Header userName={userName} />
      <Body>{children}</Body>
    </div>
  )
}

export default layout
