import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// usando Box responsivo ao invés de Grid para evitar conflitos de typings
import { BannerImage, FormComponent } from '../components'




function Registration() {
  return (
    <>
      <Box>
        <Box display={{ xs: 'block', sm: 'flex' }} minHeight="100vh">
          <Box flex={1} display="flex" alignItems="center" sx={{ p: 2 }}>
            <Container maxWidth="sm">
              <h1>Cadastros</h1>
              <FormComponent inputs={[
                {type: 'email', placeholder: 'Email'},
                {type: 'password', placeholder: 'Senha'}
              ]}
              buttons={[
                {className: 'primary', type: 'submit', children: 'Login'}
              ]}
              message={{
                msg: 'Erroo!!!!!',
                type: 'error',
              }}
              />
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
