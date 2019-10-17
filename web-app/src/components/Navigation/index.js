import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <AppBar style={{backgroundColor:"#32a852"}} position="static">
            <Toolbar>
                <Button edge="start" color="black" aria-label="Menu">
                    <MenuIcon />
                </Button>
                <Typography variant="h5">
                    Wisonsin Decarceration Platform
                </Typography>
                <Button style={{box: '10px', right:'0', color:'black'}} component={Link} to={ROUTES.SIGN_IN} contained color="inherit"><b>Login</b></Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Navigation;