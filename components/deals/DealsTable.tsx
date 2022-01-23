import { Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react'

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

  return (
    <Table
      bg={'teal.100'}
      rounded={12}
      size={'md'}
      height={'1%'}
      variant={'striped'}
      colorScheme={'gray'}
    >
      <Thead rounded={6}>
        <Tr>
          <Td>Status</Td>
          <Td>Client Name</Td>
          <Td>Deal Value</Td>
          <Td>Created At</Td>
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
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DealsTable
