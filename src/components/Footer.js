'use client';

import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData';

const FooterSection = styled.footer`
  background: ${props => props.theme.colors.primaryDark};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection_ = styled.div`
  text-align: center;
  h3 {
    color: ${props => props.theme.colors.accentPurple};
    margin-bottom: 1rem;
  }

  p, a {
    color: ${props => props.theme.colors.textSecondary};
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.colors.accentPurple};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  
`;

const SocialLink = styled.a`
  display: flex;
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.3s ease;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
`;



const Footer = () => {
  const { developer } = portfolioData;

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterSection id="contact">
      <Container>
        <FooterContent>
          <FooterSection_>
            <h3>Get In Touch</h3>
            <a href={`mailto:${developer.email}`}>{developer.email}</a>
            <a href={`tel:${developer.phone.replace(/\s/g, '')}`}>{developer.phone}</a>
          </FooterSection_>
          <FooterSection_>
            <h3>Quick Links</h3>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
            <a href="/cv.pdf" download="Alona_Shot_cv.pdf">Download CV</a>
          </FooterSection_>
          <FooterSection_>
            <SocialLinks>
              <SocialLink href={developer.social.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg" ></i>
              </SocialLink>
              <SocialLink href={developer.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </SocialLink>
            </SocialLinks>
          </FooterSection_>
        </FooterContent>
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Alona Shot. All rights reserved. Built with ❤️.</p>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
