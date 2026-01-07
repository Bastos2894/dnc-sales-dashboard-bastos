import {Header, CardComponent} from 'src/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <CardComponent>
          Card
        </CardComponent>
      </Container>
      
    </>
  )
}

export default Home
