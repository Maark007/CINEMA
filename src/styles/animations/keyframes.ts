import { keyframes } from 'styled-components'

export const slider = keyframes`
 0% {
    width: 0;
  }
  55%, 100% {
    width: 325px;
  }
`

export const progressbar = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
   opacity: 1;
  }
  `

export const poster = keyframes`
0% {
  width: 0;
}
%55, 100% {
  width: 100%;
}
`

