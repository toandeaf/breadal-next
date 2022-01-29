import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const AppDrawer: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Breadalbane Finance</DrawerHeader>

        <DrawerBody>
          <List spacing={5}>
            <ListItem>
              <Link href={'/'}>Home</Link>
            </ListItem>
            <Divider borderColor={'gray.400'} />

            <ListItem>
              <Link href={'/deals'}>Deals</Link>
            </ListItem>
            <Divider borderColor={'gray.400'} />

            <ListItem>
              <Link href={'/quickQuote'}>Quick Quote</Link>
            </ListItem>
            <Divider borderColor={'gray.400'} />

            <ListItem>
              <Link href={'/fullQuote'}>Full Quote</Link>
            </ListItem>
            <Divider borderColor={'gray.400'} />

            <ListItem>
              <Link href={'/contact'}>Contact Only</Link>
            </ListItem>
            <Divider borderColor={'gray.400'} />

            <ListItem>
              <Link href={'/settings'}>Settings</Link>
            </ListItem>
          </List>
        </DrawerBody>
        <DrawerFooter>
          <Input type={'text'} placeholder={'Search...'} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AppDrawer
