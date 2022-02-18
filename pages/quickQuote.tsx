import { FC } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react'
import BalloonSlider from '../components/quote/BalloonSlider'

export const NewQuote: FC = () => {
  return (
    <Flex
      bg={'gray.100'}
      direction={'column'}
      rounded={12}
      padding={6}
      margin={2}
      boxShadow={'3px 3px 3px #888888'}
    >
      <FormControl>
        <Box>
          <FormLabel>Asset Cost exc. Vat</FormLabel>
          <NumberInput
            bg={'white'}
            min={0}
            max={1000000000}
            precision={2}
          >
            <NumberInputField boxShadow={'2px 2px 2px #888888'} />
          </NumberInput>
        </Box>

        <Box pt={3}>
          <FormLabel>Deposit</FormLabel>
          <NumberInput
            bg={'white'}
            id="email"
            min={0}
            max={1000000000}
            precision={2}
          >
            <NumberInputField boxShadow={'2px 2px 2px #888888'} />
          </NumberInput>
        </Box>

        <Box pt={3}>
          <FormLabel>Trade In Value (inc. VAT)</FormLabel>
          <NumberInput
            bg={'white'}
            id="email"
            min={0}
            max={1000000000}
            precision={2}
          >
            <NumberInputField boxShadow={'2px 2px 2px #888888'} />
          </NumberInput>
        </Box>

        <Box pt={3}>
          <FormLabel>Term in Months</FormLabel>
          <Select
            placeholder="Select option"
            bg={'white'}
            boxShadow={'2px 2px 2px #888888'}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </Select>
        </Box>

        <Box pt={3}>
          <FormLabel pt={2}>Balloon</FormLabel>
          <BalloonSlider />
        </Box>
        <Box pt={5}>
          <FormLabel>Estimated Monthly Repayments</FormLabel>
          <Flex>
            <Button
              mr={2}
              boxShadow={'1px 1px 1px 1px #888888'}
              bg={'rgb(118,58,199)'}
              color={'white'}
            >
              Calculate
            </Button>
            <Input
              type={'number'}
              bg={'white'}
              boxShadow={'2px 2px 2px #888888'}
            />
          </Flex>
        </Box>
      </FormControl>
    </Flex>
  )
}

export default NewQuote
