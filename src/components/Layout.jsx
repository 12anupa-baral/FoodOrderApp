import React from 'react'
import style from "./style.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      {children}
    </div>
  )
}

export default Layout
