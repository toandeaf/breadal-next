import { FC } from 'react'
import {
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AppDrawer } from './AppDrawer'
import NotificationTag from './NotificationTag'

export const AppHeader: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex height={'7vh'} maxHeight={'7vh'} width={'100%'}>
      <Tag width={'100%'} height={'100%'} justifyContent={'space-between'}>
        <Tag onClick={onOpen} cursor={'pointer'}>
          <TagLeftIcon as={HamburgerIcon} boxSize={7} mr={6} />
          <TagLabel>Menu</TagLabel>
        </Tag>
        <NotificationTag />
      </Tag>
      <AppDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default AppHeader
