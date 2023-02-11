import React, {useState, useEffect} from 'react';
import {
    makeStyles, ThemeProvider
} from '@material-ui/core';
import AppBar from './AppBar';
import theme from './Theme';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        minHeight: '100vh',
    },
}));

const HomePage = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar/>

                </div>
        </ThemeProvider>
    );
};
export default HomePage;