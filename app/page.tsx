'use client'
import s from './page.module.scss'
import React from 'react'
import Navbar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'

function Page() {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.main_content}>
        <div className={s.left_content}>
          <h1 className={s.header_text}>CHAT WITH THE WORLD'S MOST POWERFUL <br/>LANGUAGE AI - NEURALMIND PRO</h1>
          <div className={s.chalkboard}>
            {/* <span className={s.list_item}><Typewriter words={['Brainstorm ']} loop={1} /></span>
            <span className={s.list_item}><Typewriter words={['', 'Get feedback']} loop={1}/></span>
            <span className={s.list_item}><Typewriter words={[' ',' ', 'Write short stories']} loop={1}/></span>
            <span className={s.list_item}><Typewriter words={[' ',' ',' ', 'Learn new subjects']} loop={1}/></span>
            <span className={s.list_item}><Typewriter words={[' ',' ',' ',' ', 'Generate code']} loop={1}/></span>
            <span className={s.list_item}><Typewriter words={[' ',' ',' ',' ',' ', 'Enhance workflow']} loop={1}/></span> */}
          </div>
        </div>
        <div className={s.right_content}>
          <div className={s.iphone_container}>
            <img className={s.app_store} src='/app_store.png'/>
            <img className={s.play_store} src='/play_store.png'/>
            <img src='/neuralmind_app.png' className={s.iphone_frame} draggable="false"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page