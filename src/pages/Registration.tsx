import {Box, Container} from '@mui/material'
import { BannerImage, FormComponent, StyledH1, StyledP,StyledUL, Logo } from '../components'
import { pxToRem } from 'src/utils'






function Registration() {
  return (
    <>
      <Box>
        <Box display={{ xs: 'block', sm: 'flex' }} minHeight="100vh">
          <Box flex={1} display="flex" alignItems="center" sx={{ p: 2 }}>
            <Container maxWidth="sm">
              <Box sx = {{marginBottom: pxToRem(24)}}><Logo height={41} width={100}/></Box>
              <Box sx = {{marginBottom: pxToRem(24)}}>
                <StyledH1>Faça o seu cadastro</StyledH1>
                <StyledP>Priemiro, diga-nos quem você é.</StyledP>
                <StyledUL>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial.</li>
                  <li>Pelo menos um número</li>
                </StyledUL>
              </Box>
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
