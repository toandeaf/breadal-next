import { Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Deal {
  id: string
  status: string
  clientName: string
  dealValue: number
  createdAt: string
}

export const DealsTable = () => {
  const deal = {
    dealValue: 12345,
    clientName: 'John Smith',
    status: 'Pending',
    id: '1',
    createdAt: new Date().toLocaleDateString(),
  }
  const deals: Array<Deal> = []
  deals.push(deal, deal, deal, deal, deal, deal, deal)
  const [width, setWidth] = useState<number>(0)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <Table
      rounded={12}
      size={isMobile ? 'sm' : 'lg'}
      height={'1%'}
      bg={'white'}
      borderColor={'rgb(118,58,199)'}
      variant={'striped'}
      boxShadow={'3px 3px 3px 3px #888888'}
      colorScheme={'gray'}
    >
      <Thead rounded={6}>
        <Tr fontWeight={'bold'}>
          <Td>Status</Td>
          <Td>Client Name</Td>
          <Td>Deal Value</Td>
          <Td>Created At</Td>
          {!isMobile && (
            <>
              <Td>Extra Header 1</Td>
              <Td>Extra Header 2</Td>
              <Td>Extra Header 3</Td>
            </>
          )}
        </Tr>
      </Thead>
      <Tbody>
        {deals?.map((deal) => (
          <Tr
            key={deal.id}
            onDoubleClick={() => (window.location.href = `#/deal/${deal.id}`)}
          >
            <Td>{deal.status}</Td>
            <Td>{deal.clientName}</Td>
            <Td isNumeric>
              {deal.dealValue && `£${deal.dealValue}`}
              {!deal.dealValue && `TBC`}
            </Td>
            <Td>{deal.createdAt}</Td>
            {!isMobile && (
              <>
                <Td>Extra Value 1</Td>
                <Td>Extra Value 2</Td>
                <Td>Extra Value 3</Td>
              </>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DealsTable
