import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { AppBody, AppContainer, AppHead, AppHeader } from '../components/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [width, setWidth] = useState<number>(0)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <ChakraProvider>
      <AppHead />
      <AppContainer isMobile={isMobile}>
        <AppHeader />
        <AppBody>
          <Component {...pageProps} />
        </AppBody>
      </AppContainer>
    </ChakraProvider>
  )
}

export default MyApp
