'use client'

import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { LangSwitcher } from '@/components/LangSwitcher'
import Link from 'next/link'
import { UserAuth } from '@/store/AuthContext'

const Header = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  return (
    <header className={styles.navBarContainer}>
        <Link href='/' className={styles.logoContent}>
            <Image src='https://i.postimg.cc/J0Fwxmxj/Screenshot-2023-11-12-at-7-33-40-PM-removebg-preview.png' height='50' width='60' className={styles.logoIcon} alt='SnapTec Logo'/>
            <span className={styles.logoText}>Yuhanna Mdanat</span>
        </Link>
        <div className={styles.interactiveContent}>
            <LangSwitcher />
            <p className={styles.userName}>{user?.displayName}</p>
            {user ? <button onClick={logOut} className={styles.logInBtn}>Log out</button> : <button onClick={googleSignIn} className={styles.logInBtn}>Log in</button>}
        </div>

    </header>
  )
}

export default Header