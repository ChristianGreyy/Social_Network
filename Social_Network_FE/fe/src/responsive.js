import { css } from 'styled-components'

export const mobile = (props) => {
    return css`
    @media only screen and (max-width:700px) {
            ${props}
    }   `
}

export const ipadPro = (props) => {
    return css`
    @media only screen and (max-width:1024px) {
            ${props}
    }   `
}


export const ipad = (props) => {
    return css`
    @media only screen and (max-width:768px) {
            ${props}
    }   `
} 