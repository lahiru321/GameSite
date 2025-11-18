'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Provide deterministic defaults to avoid hydration mismatches between
  // server and client (e.g. `document.documentElement` class differences).
  // - `attribute: 'class'` keeps behavior consistent with the layout usage.
  // - `enableSystem: false` prevents server-based `prefers-color-scheme` checks
  //   from choosing different initial theme than the client.
  // - `defaultTheme: 'light'` gives a stable initial theme on SSR.
  const defaults: Partial<ThemeProviderProps> = {
    attribute: 'class',
    enableSystem: false,
    defaultTheme: 'light',
  }

  return <NextThemesProvider {...defaults} {...props}>{children}</NextThemesProvider>
}
