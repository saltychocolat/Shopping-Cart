
import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import styles from "./App.module.css"
import { useEffect, useState } from "react"

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet/>
    </div>
  )
}

export {App}
