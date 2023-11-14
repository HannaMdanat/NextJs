'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'
import styles from './LangSwitcher.module.scss'

export const LangSwitcher = () => {
  const pathName = usePathname();

  const redirectedLang = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  }

  return (
    <div className={styles.switcher}>
      {i18n.locales.map((locale) =>
        <Link key={locale} className={styles.lang} href={redirectedLang(locale)}>{locale}</Link>
      )}
    </div>
  )
}
