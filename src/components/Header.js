'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${props => props.theme.gradients.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 80px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    transition: left 0.3s ease;
  }
`;

const NavLink = styled.a`
  color: ${props => props.active ? '#C486FE' : '#94a3b8'};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.accentPurple};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.gradients.purple};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo>
          &lt; SH / &gt;
        </Logo>
        <NavMenu>
          <li>
            <NavLink
              active={activeSection === 'home'}
              onClick={() => handleNavClick('home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              active={activeSection === 'skills'}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              active={activeSection === 'projects'}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              active={activeSection === 'contact'}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </NavLink>
          </li>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
