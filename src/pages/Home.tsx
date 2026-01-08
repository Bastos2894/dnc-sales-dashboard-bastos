import {Header, CardComponent, AvatarsList, CustomTable} from 'src/components'
import { Container } from '@mui/material'
import { currencyConverter }  from 'src/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/Avatar-DNC.svg',
      name: 'Nice dd',
      subtitle: currencyConverter(3568),
    },
    {
      avatar: '/Avatar-DNC.svg',
      name: 'Nice dd2',
      subtitle: currencyConverter(144552.55),
    },
    {
      avatar: '/Avatar-DNC.svg',
      name: 'Nice dd3',
      subtitle: currencyConverter(156884.55),
    }
  ]

  const mockTableData = {
    header: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1 </span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 2 </span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 3 </span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ]
    ]
  }

  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <CardComponent>
          Card
        </CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData}/>
        </CardComponent>
        <CardComponent>
          <CustomTable 
            headers={mockTableData.header}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
      
    </>
  )
}

export default Home
