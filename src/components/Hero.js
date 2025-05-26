'use client';

import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData';


const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: 
    linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%),
    radial-gradient(ellipse at 20% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(192, 132, 252, 0.1) 0%, transparent 50%);
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25px 25px, rgba(168, 85, 247, 0.1) 2px, transparent 2px),
      radial-gradient(circle at 75px 75px, rgba(192, 132, 252, 0.05) 1px, transparent 1px);
    background-size: 100px 100px, 50px 50px;
    animation: backgroundFloat 20s ease-in-out infinite;
  }

  @keyframes backgroundFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  max-width: 100%;
  
  h1 {
    font-size: 3.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #a855f7, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media (max-width: 480px) {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-size: 1.6rem;
    color: #94a3b8;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s both;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    color: #94a3b8;
    margin-bottom: 2.5rem;
    animation: fadeInUp 1s ease 0.4s both;
    line-height: 1.7;
    max-width: 90%;
    
    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 1.1rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  animation: fadeInUp 1s ease 0.6s both;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  min-width: fit-content;

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #a855f7, #c084fc);
    color: #ffffff;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
    }
  ` : `
    background: transparent;
    color: #a855f7;
    border: 2px solid #a855f7;

    &:hover {
      background: #a855f7;
      color: #ffffff;
      transform: translateY(-2px);
    }
  `}

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroImage = styled.div`
  text-align: right;
  animation: fadeInRight 1s ease 0.8s both;
  position: relative;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Memoji = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #a855f7;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  animation: float 6s ease-in-out infinite;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Hero = () => {
    const { developer } = portfolioData;


    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeroSection id="home">
            <Container>
                <HeroContent>
                    <HeroText>
                        <h1>{developer.name}</h1>
                        <h2>{developer.title}</h2>
                        <p>{developer.description}</p>
                        <HeroButtons>
                            <Button variant="primary" onClick={handleScrollToProjects}>
                                <i className="fas fa-rocket"></i>
                                View My Work
                            </Button>
                            <Button
                                variant="secondary"
                                href="/cv.pdf"
                                download="Alona_Shot_cv.pdf"
                            >
                                <i className="fas fa-download"></i>
                                Download CV
                            </Button>
                            <Button variant="secondary" onClick={handleScrollToContact}>
                                <i className="fas fa-envelope"></i>
                                Get In Touch
                            </Button>
                        </HeroButtons>
                    </HeroText>
                    <HeroImage>
                        <Memoji src="/avatar.jpg" alt="Alona Shot - Front-End Developer" />
                    </HeroImage>
                </HeroContent>
            </Container>
        </HeroSection>
    );
};

export default Hero;
