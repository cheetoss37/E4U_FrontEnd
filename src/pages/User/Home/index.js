import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import Usernavbar from '../../../components/UserNavbar'

const Home = () => {
    const classes = useStyles();
    
    return (
        <Box>
            <Usernavbar />
        </Box>
    )
}

export default Home

const useStyles = makeStyles ((theme) => ({

}))