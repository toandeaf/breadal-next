import { FC } from 'react'
import {
  Flex,
  IconButton,
  Tag,
  TagLabel,
  TagLeftIcon,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AppDrawer } from './AppDrawer'

export const AppHeader: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex height={'7vh'} width={'100%'}>
      <Tag width={'100%'}>
        <TagLeftIcon as={IconButton} icon={<HamburgerIcon />} onClick={onOpen}>
          Menu
        </TagLeftIcon>
        <TagLabel>Menu</TagLabel>
      </Tag>
      <AppDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default AppHeader
