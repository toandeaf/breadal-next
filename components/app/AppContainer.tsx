import { FC, ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  isMobile: boolean
  children: Array<ReactElement>
}
export const AppContainer: FC<Props> = ({ isMobile, children }) => {
  return (
    <Flex height={isMobile ? '90vh' : '93vh'} direction={'column'}>
      {children}
    </Flex>
  )
}

export default AppContainer
