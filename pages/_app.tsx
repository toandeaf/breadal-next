import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import { AppProps } from 'next/app'
import { AppBody, AppContainer, AppHead, AppHeader } from '../components/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AppHead />
      <AppHeader />
      <AppContainer>
        <AppBody>
          <Component {...pageProps} />
        </AppBody>
      </AppContainer>
    </ChakraProvider>
  )
}

export default MyApp
