import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem; /* Provides spacing between items */
`;

const FeatureItem = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <h2>Our Features</h2>
      <FeatureGrid>
        <FeatureItem>
          <FontAwesomeIcon icon={faRocket} size="2x" color="#3498db" />
          <h3>Feature 1</h3>
          <p>Quick, reliable, and easy to use.</p>
        </FeatureItem>
        <FeatureItem>
          <FontAwesomeIcon icon={faLock} size="2x" color="#3498db" />
          <h3>Feature 2</h3>
          <p>Secure, modern, and scalable.</p>
        </FeatureItem>
        <FeatureItem>
          <FontAwesomeIcon icon={faMobileAlt} size="2x" color="#3498db" />
          <h3>Feature 3</h3>
          <p>Fully responsive on all devices.</p>
        </FeatureItem>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
