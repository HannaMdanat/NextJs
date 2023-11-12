import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.navBarContainer}>
        <div className={styles.leftContent}>
            <Image src='https://i.postimg.cc/J0Fwxmxj/Screenshot-2023-11-12-at-7-33-40-PM-removebg-preview.png' height='50' width='60' className={styles.logoIcon} alt='SnapTec Logo'/>
            <span className={styles.logoText}>Yuhanna Mdanat</span>
        </div>
        <div className={styles.rightContent}>
            <button className={styles.logInBtn}>Log In</button>
        </div>

    </header>
  )
}

export default Header