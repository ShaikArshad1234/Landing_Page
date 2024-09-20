import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #2c3e50;
  color: white;
  text-align: center;

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #ff5733;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
      <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
    </FooterContainer>
  );
};

export default Footer;
