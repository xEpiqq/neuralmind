import s from './navbar.module.scss'
import React from 'react'

function Navbar() {
  return (
    <div className={s.nav}>
      <div className={s.nav_left}>
        <div className={s.nav_left_logo}>
          <img src='/logo.png' />
          <h1>NeuralMind</h1>
        </div>
        <h1>MY LIBRARY</h1>
        <h1>APPS</h1>
        <h1>CHARTS</h1>
      </div>
      <div className={s.nav_right}>
        <h1>IOS</h1>
        <h1>ANDROID</h1>
        <button className={s.download_app}>DOWNLOAD APP</button>
        <button className={s.start_trial}>START FREE TRIAL</button>
      </div>
    </div>
  )
}

export default Navbar