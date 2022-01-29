import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children: JSX.Element
}

export const AppBody: FC<Props> = ({ children }) => {
  return (
    <Flex height={'93vh'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Flex>
  )
}

export default AppBody
