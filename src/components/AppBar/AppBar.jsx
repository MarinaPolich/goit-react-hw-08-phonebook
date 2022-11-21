import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import UserAvatar from '../../images/gus3.svg';
import authOperations from 'redux/auth/auth-operations';
import { Main } from './AppBar.styled';

const pages = [
  { title: 'Вітальня', to: '/', isPrivateLink: false },
  { title: 'Друзі', to: '/contacts', isPrivateLink: true },
];
const settings = [{ title: 'Відлетіти', to: '/' }];

export function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const pageNav = useNavigate();
  const { pathname } = useResolvedPath();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const imgAvatar = UserAvatar;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = to => {
    setAnchorElNav(null);
    if (to) pageNav(to);
  };

  const handleCloseUserMenu = to => {
    setAnchorElUser(null);
    if (to) pageNav(to);
    dispatch(authOperations.logOut());
  };

  return (
    <>
      <AppBar
        color="transparent"
        sx={{ mb: '60px', fontFamily: 'Montserrat' }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlutterDashIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                fontSize: '32px',
              }}
            />

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
                {pages
                  .filter(
                    ({ isPrivateLink }) => !(isPrivateLink && !isLoggedIn)
                  )
                  .map(({ title, to }) => (
                    <MenuItem
                      key={title}
                      onClick={() => handleCloseNavMenu(to)}
                    >
                      <Typography
                        textAlign="center"
                        color={to === pathname && `var(--acent-color)`}
                      >
                        {title}
                      </Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
            <FlutterDashIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Montserrat',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages
                .filter(({ isPrivateLink }) => !(isPrivateLink && !isLoggedIn))
                .map(({ title, to }) => (
                  <Button
                    key={title}
                    onClick={() => handleCloseNavMenu(to)}
                    sx={{
                      my: 2,
                      fontFamily: 'Montserrat',
                      fontSize: 20,
                      fontWeight: 700,
                      color:
                        to === pathname
                          ? `var(--acent-color)`
                          : `var(--primary-text-color)`,
                      display: 'block',
                    }}
                  >
                    {title}
                  </Button>
                ))}
            </Box>

            {isLoggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={imgAvatar}
                      sx={{ width: '60px', height: '60px' }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(({ title, to }) => (
                    <MenuItem
                      key={title}
                      onClick={() => handleCloseUserMenu(to)}
                    >
                      <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <AuthNav />
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
export default ResponsiveAppBar;
