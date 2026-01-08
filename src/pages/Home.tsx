import {Header, CardComponent, AvatarsList} from 'src/components'
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
      </Container>
      
    </>
  )
}

export default Home
