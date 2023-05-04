"use client"

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir"
import ulrikenTheme from './theme/ulriken.theme';

interface MuiSetupProps {
    children: React.ReactNode
}

const MuiSetup = ({children}: MuiSetupProps) => {
    return (
        <>
            <CssBaseline />
            <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
                <ThemeProvider theme={ulrikenTheme}>
                    { children }
                </ThemeProvider>
            </NextAppDirEmotionCacheProvider>
        </>
    )
}
export default MuiSetup;