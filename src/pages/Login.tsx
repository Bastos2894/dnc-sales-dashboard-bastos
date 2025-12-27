import { Box, Container } from '@mui/material'
import { BannerImage, FormComponent, StyledH1, StyledP, Logo} from '../components'
import { pxToRem } from 'src/utils'



function Login() {
  return (
    <>
      <Box>
        <Box display={{ xs: 'block', sm: 'flex' }} minHeight="100vh">
          <Box flex={1} display="flex" alignItems="center" sx={{ p: 2 }}>
            <Container maxWidth="sm">
              <Box sx = {{marginBottom: pxToRem(24)}}><Logo height={41} width={100}/></Box>
              <Box sx = {{marginBottom: pxToRem(24)}}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              
              <FormComponent inputs={[
                {type: 'email', placeholder: 'Email', disabled: true},
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

export default Login
