import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import logo from '../images/frontbayLogo.png';


const HeaderWrapper = styled.div`
  background: #673ab7;
  margin-bottom: 1.45rem;
  h1{
    img{
      height: 100px;
    }
  }
`;

const HeaderBox = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderBox>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          
          <img src={logo} alt="Front Bay Logo" />
        </Link>
      </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>  
  </HeaderBox>
   
  </HeaderWrapper>
)

export default Header
