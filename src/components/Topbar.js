import React from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
  background-color: #fff;
  color: #000;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0;
  & a {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &.active {
    border-bottom: 2px solid #3f51b5;
  }
`;

function TopBar() {
  const location = useLocation()

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledLink to="/" className={location.pathname === '/' ? 'active' : null}>
          <Button color="inherit">Home</Button>
        </StyledLink>
        <StyledLink to="/learning" className={location.pathname === '/learning' ? 'active' : null}>
          <Button color="inherit">Learn Embedded</Button>
        </StyledLink>
      </Toolbar>
    </StyledAppBar>
  );
}

export default TopBar;
