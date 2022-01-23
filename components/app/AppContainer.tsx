import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children: JSX.Element
}
export const AppContainer: FC<Props> = ({ children }) => {
  return (
    <Flex height={'80vh'} direction={'column'}>
      {children}
    </Flex>
  )
}

export default AppContainer
