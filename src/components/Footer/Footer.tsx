import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.pageFooter}>copyright © {new Date().getFullYear()} . All rights
    reserved.{' '}</div>
  )
}

export default Footer