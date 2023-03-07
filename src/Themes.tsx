import { createTheme } from "@mui/material";
// declare module "@mui/material/styles" {
//     interface ThemeOptions {
//         cardStyle: {
//             backgroundColor: React.CSSProperties['color'],
//         }
//     }
// }

let theme = createTheme()
theme = createTheme(theme, {
    // cardStyle: {
    //     backgroundColor: 'linear-gradient(to right bottom, #2ee2d6 , #f2fca6)',
    // },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    typography: {
        fontFamily: 'Poppins',
        allVariants: {
            letterSpacing: '0.5px',
        }
    },

    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    letterSpacing: '0.5px',
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                h4: {
                    [theme.breakpoints.only('xs')]: { // 0
                        fontSize: '27px'
                    },
                    [theme.breakpoints.only('sm')]: { // 600
                        fontSize: '34px'
                    },
                    [theme.breakpoints.only('md')]: { // 900
                        fontSize: '40px'
                    },
                    [theme.breakpoints.only('lg')]: { // 1200
                        fontSize: '42px'
                    },
                    [theme.breakpoints.only('xl')]: { // 1536
                        fontSize: '42px'
                    },
                }
            },
        },

        MuiSlider: {
            styleOverrides: {
                root: {
                    width: '94%',
                    marginLeft: '3%',
                    marginBottom: "7px"
                }
            }
        },

        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    fontFamily: 'Poppins',
                    letterSpacing: '0.5px',
                },

                arrow: {
                    color: 'rgba(0, 0, 0, 0.8)',
                }
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    background: 'linear-gradient(to right bottom, #2ee2d6 , #f2fca6)',
                    [theme.breakpoints.only('xs')]: { // 0
                        width: '350px',
                    },
                    [theme.breakpoints.only('sm')]: { // 600
                        width: '420px'
                    },
                    [theme.breakpoints.only('md')]: { // 900
                        width: '480px'
                    },
                    [theme.breakpoints.only('lg')]: { // 1200
                        width: '520px'
                    },
                    [theme.breakpoints.only('xl')]: { // 1536
                        width: '520px'
                    },
                },
            },
        },
    },
});

export { theme };