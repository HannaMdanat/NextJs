import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>copyright © {new Date().getFullYear()} . All rights
    reserved.{' '}</footer>
  )
}

export default Footer