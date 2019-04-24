import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from './logo.png';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: 'maroon' }}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    <img src={logo} alt="Logo" height="50"/>
                    Tamilnadu Centres

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;