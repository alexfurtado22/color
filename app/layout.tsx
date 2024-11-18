import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import ThemeDataProvider from '@/context/theme-data-provider'

const inter = localFont({
  src: [
    {
      path: './fonts/InterVariable.woff2',
      weight: 'variable', // Specifies this is a variable font
      style: 'normal', // Loads only the normal style
    },
  ],
  variable: '--font-sans',
  display: 'swap', // Improves perceived performance
})

const playfair = localFont({
  src: [
    {
      path: './fonts/Playfair-Display.woff2',
      weight: 'variable', // Specifies this is a variable font
      style: 'normal', // Loads only the normal style
    },
  ],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dynamic Colors Themes',
  description: 'Choose Your Color Theme.',
  icons: {
    icon: '/favicon.ico',
    // Path to icon file in the public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning data-theme='dark'>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}
