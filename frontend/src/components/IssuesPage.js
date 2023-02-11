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

const IssuesPage = (props) => {
    const classes = useStyles();
    const [issues, setIssues] = useState([]);


    // useEffect(() => {
    //     setLoading(true);
    //     fetch('/api/get_members/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setMembers(data.members);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setLoading(false);
    //         });
    // }, []);

    return (
        <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar/>

                </div>
        </ThemeProvider>
    );
};
export default IssuesPage;