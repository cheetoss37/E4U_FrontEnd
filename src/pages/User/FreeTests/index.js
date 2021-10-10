import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import Usernavbar from '../../../components/UserNavbar';

const FreeTests = () => {
    const classes = useStyles();

    return (
        <Box>
            <Usernavbar />
        </Box>
    )
}

export default FreeTests

const useStyles = makeStyles((theme) => ({

}))