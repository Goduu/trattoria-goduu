'use client'

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export const ThemeSwitch: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }
  return (
    <button
      aria-label="Toggle Dark Mode"
      className='p-2'
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >

      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <FaSun size={30} />
      ) : (
        <FaMoon size={30} />
      )}
    </button>
  )
}

