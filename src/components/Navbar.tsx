import { AppBar, Box, Button, Container, CssBaseline, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export const Navbar = () => {


  return (
    <Box sx={{ display: 'flex', height: '10vh' }} >
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="lg"> {/* Set the maximum width for the container */}
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuItem />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  <NavLink to={`/${item} `}>
                    {item}
                  </NavLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
