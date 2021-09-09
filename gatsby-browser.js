import React from 'react'
import { ThemeProvider } from '@emotion/react'
import GlobalStateProvider from './src/store/GlobalStateProvider'
import { theme } from './src/styles/theme'

// // custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"
// import "typeface-nunito"
// import "typeface-alegreya"


export const wrapRootElement = ({element}) => (
    <GlobalStateProvider>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </GlobalStateProvider>
)