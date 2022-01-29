import {
  Link,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from '@chakra-ui/react'
import { BellIcon, CloseIcon } from '@chakra-ui/icons'
import { FC } from 'react'

export const NotificationTag: FC = () => {
  return (
    <Popover placement={'bottom-end'} preventOverflow={true}>
      <PopoverTrigger>
        <Tag cursor={'pointer'} size={'lg'}>
          <TagLeftIcon as={BellIcon} boxSize={7} />
        </Tag>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <List spacing={2}>
            <ListItem>
              <Tag width={'100%'} p={3} justifyContent={'space-between'}>
                <Tag>
                  <TagLeftIcon as={BellIcon} />
                  <TagLabel>Notification One</TagLabel>
                </Tag>
                <TagRightIcon as={CloseIcon} mr={2} />
              </Tag>
            </ListItem>
            <ListItem>
              <Tag width={'100%'} p={3} justifyContent={'space-between'}>
                <Tag>
                  <TagLeftIcon as={BellIcon} />
                  <TagLabel>Notification Two</TagLabel>
                </Tag>
                <TagRightIcon as={CloseIcon} mr={2} />
              </Tag>
            </ListItem>
          </List>
        </PopoverBody>
        <PopoverFooter>
          <Link>All Notifications...</Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default NotificationTag
