import React from 'react';
import styled from 'styled-components';

const CTASection = styled.section`
  padding: 4rem 2rem;
  background-color: #3498db;
  color: white;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    color: white;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #c0392b;
  }
`;

const CallToAction = () => {
  return (
    <CTASection>
      <h2>Ready to start?</h2>
      <button>Join Us Now</button>
    </CTASection>
  );
};

export default CallToAction;
