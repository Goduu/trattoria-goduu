import siteMetadata from '@/siteMetadata'
import headerNavLinks from '@/components/headerNavLinks'
import logo from '@/assets/logo.svg'
import header from '@/assets/header.png'
import Link from './Link'
import { ThemeSwitch } from './ThemeSwitch'
import { FC } from 'react'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <div className="flex flex-col items-center justify-between px-24">
      <header className="flex items-center justify-between py-10 w-11/12">
        <Link className="flex items-center gap-5" href="/" aria-label={siteMetadata.headerTitle}>
          <Image src={logo} width={150} height={150} alt="Logo: A chef in the middle with a banner written Trattoria Goduu" />
          <div className="hidden h-6 text-5xl font-semibold sm:block">
            {siteMetadata.headerTitle}
          </div>
        </Link>
        <ThemeSwitch />
      </header>
    </div>
  )
}

