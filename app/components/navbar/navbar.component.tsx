'use client';

import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import UlrikenLogo from "../ulriken-logo/ulriken-logo.compontent";
import { MouseEvent, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Konsulenter', 'Kompetanse']

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const hamburgerMenu = () => {
        return (
            <>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                    <UlrikenLogo width={150} height={75} />
                </Box>
            </>
        )
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <UlrikenLogo width={150} height={75} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    {hamburgerMenu()}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Åpne innstillinger">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Bruker ikon">
                                    <PersonIcon />
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;