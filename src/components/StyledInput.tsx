import styled from 'styled-components'
import type { InputProps } from '../types/formComponent'
import { pxToRem } from 'src/utils'

export const StyledInput = styled.input<InputProps>`
    background-color : ${(props) => props.theme.textInput.active};
    color: ${(props) => props.theme.textInput.activeColor};
    border-radius: ${pxToRem(8)};
    border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};
    box-sizing: border-box;
    cursor: pointer;
    height: ${pxToRem(40)};
    font-size: ${pxToRem(14)};
    font-wheight: 500;
    padding: 0 ${pxToRem(8)} ${pxToRem(16)};
    tarasition: background-color 0.3s;
    width: 100%;
    

    &.:disabled {
        background-color: ${(props) => props.theme.textInput.disabled};
        bordee: ${pxToRem(1)} solid
            ${(props) => props.theme.textInput.disabledBorderColor};
        color: ${(props) => props.theme.textInput.disabledColor};
        cursor: not-allowed;
    }
    
    &.:placeholder {
        color: ${(props) => props.theme.textInput.placeholderColor};
    }
`