'use client'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'
import React from 'react'

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
