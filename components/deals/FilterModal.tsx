import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tag,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { FC, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const FilterModal: FC<Props> = ({ isOpen, onClose }) => {
  const format = (val: any) => `£` + val
  const parse = (val: any) => val.replace(/^\$/, '')

  const [value, setValue] = useState('1.53')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Filter Results</ModalHeader>
        <ModalBody>
          <Flex direction={'column'} alignItems={'space-evenly'}>
            <Select
              isMulti={true}
              selectedOptionStyle={'check'}
              placeholder={'Select a Status'}
              options={[
                {
                  label: 'Pending',
                  key: '1',
                  value: 'i-am-red',
                  isFixed: true,
                },
                {
                  key: '2',
                  label: 'Awaiting Contact',
                  value: 'i-am-purple',
                },
              ]}
            />
            <Flex mt={6}>
              <Tag width={'20%'}>Min</Tag>
              <NumberInput
                width={'50%'}
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                min={0}
                max={100000}
                placeholder={'Minimum £'}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Tag width={'20%'}>Max</Tag>
              <NumberInput
                width={'50%'}
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                min={0}
                max={100000}
                placeholder={'Maximum £'}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex mt={6}>
              <Tag width={'17%'}>From</Tag>
              <Input type={'date'} />
            </Flex>
            <Flex mt={6}>
              <Tag width={'17%'}>To</Tag>
              <Input type={'date'} />
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter mt={6}>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={'blue'}>Apply Filters</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
