import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// usando Box responsivo ao invés de Grid para evitar conflitos de typings
import { BannerImage } from '../components'




function Registration() {
  return (
    <>
      <Box>
        <Box display={{ xs: 'block', sm: 'flex' }} minHeight="100vh">
          <Box flex={1} display="flex" alignItems="center" sx={{ p: 2 }}>
            <Container maxWidth="sm">
              <h1>Cadastro</h1>
            </Container>
          </Box>

          <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Registration
