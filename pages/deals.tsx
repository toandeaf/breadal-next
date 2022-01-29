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
    <Flex
      direction={'column'}
      bg={'gray.100'}
      padding={2}
      rounded={12}
      boxShadow={'3px 3px 3px #888888'}
    >
      <Flex mb={6}>
        <Input
          type={'text'}
          placeholder={'Search...'}
          mr={2}
          boxShadow={'2px 2px 2px #888888'}
          bg={'white'}
        />
        <Button
          onClick={onOpen}
          mr={2}
          boxShadow={'1px 1px 1px 1px #888888'}
          bg={'rgb(118,58,199)'}
          color={'white'}
        >
          Apply
        </Button>
        <Button
          onClick={onOpen}
          boxShadow={'1px 1px 1px 1px #888888'}
          bg={'rgb(118,58,199)'}
          color={'white'}
        >
          Filter
        </Button>
      </Flex>

      <DealsTable />
      <DealsModal isOpen={isOpen} onClose={onClose} />

      <Flex justifyContent={'center'} mt={4} mb={2}>
        <Tag boxShadow={'2px 2px 2px 2px #888888'} bg={'white'}>
          <IconButton
            bg={'white'}
            aria-label={'back-button'}
            icon={<ArrowBackIcon />}
          />
          <TagLabel>Page 1/4</TagLabel>
          <IconButton
            bg={'white'}
            aria-label={'forward-button'}
            icon={<ArrowForwardIcon />}
          />
        </Tag>
      </Flex>
    </Flex>
  )
}

export default Deals
