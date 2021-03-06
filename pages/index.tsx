import type { NextPage } from 'next'
import {
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { CheckIcon, TimeIcon, WarningIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  return (
    <Flex
      rounded={12}
      justifyContent={'center'}
      alignItems={'center'}
      boxShadow={'3px 3px 3px #888888'}
    >
      <Flex bg={'gray.100'} direction={'column'} rounded={12} padding={12}>
        <List spacing={6} pb={8}>
          <ListItem>
            <ListIcon as={TimeIcon} />
            Deals Pending: 0
          </ListItem>
          <Divider borderColor={'gray.400'} />
          <ListItem>
            <ListIcon as={WarningIcon} />
            Deals Updated: 0
          </ListItem>
          <Divider borderColor={'gray.400'} />
          <ListItem>
            <ListIcon as={CheckIcon} />
            Deals Completed: 0
          </ListItem>
        </List>
        <Stat pb={4}>
          <StatLabel>Deal Value Pending</StatLabel>
          <StatNumber>£0.00</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Deal Value Completed</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  )
}

export default Home
