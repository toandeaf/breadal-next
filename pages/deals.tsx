import { FC } from 'react'
import {
  Button,
  Flex,
  IconButton,
  Input,
  Tag,
  TagLabel,
  useDisclosure,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import 'react-datepicker/dist/react-datepicker.css'
import DealsTable from '../components/deals'
import { DealsModal } from '../components/deals/DealsModal'

export const Deals: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction={'column'} justifyContent={'space-around'} padding={2}>
      <Flex>
        <Input type={'text'} placeholder={'Search...'} mr={2} />
        <Button onClick={onOpen} mr={2}>
          Apply
        </Button>
        <Button onClick={onOpen}>Filter</Button>
      </Flex>

      <DealsTable />
      <DealsModal isOpen={isOpen} onClose={onClose} />

      <Flex justifyContent={'center'}>
        <Tag>
          <IconButton
            aria-label={'back-button'}
            icon={<ArrowBackIcon />}
            m={2}
          />
          <TagLabel>Page 1/4</TagLabel>
          <IconButton
            aria-label={'forward-button'}
            icon={<ArrowForwardIcon />}
            m={2}
          />
        </Tag>
      </Flex>
    </Flex>
  )
}

export default Deals
