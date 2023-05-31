import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import MyTime from './Mytime';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" >
        🛒
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} href="/signup">
          Signup
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contact Us
        </Button>
        <MyTime />

      </Toolbar>

    </AppBar>
  );
};

export default Navbar;
