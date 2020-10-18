import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

html {
  width: 100%;
}

body {
  background: #101415;
  color: #e1e1e6;
}

input::-webkit-calendar-picker-indicator {
  opacity: 0;
}

h1,h2, h3, h4, span, p, a {
  font-family: 'Piazzolla', serif;
}

.scroll::-webkit-scrollbar {
  width: 1rem;
  height: 12px;
}

.scroll::-webkit-scrollbar-track {}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #000;
  box-shadow: rgba(0, 0, 0) 0px 0px 16px inset;
}

`
