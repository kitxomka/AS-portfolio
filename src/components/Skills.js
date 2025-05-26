'use client';

import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%),
    radial-gradient(ellipse at 70% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 80%, rgba(192, 132, 252, 0.1) 0%, transparent 50%);
  position: relative;
  overflow: hidden;

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
    animation: backgroundFloat 25s ease-in-out infinite reverse;
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #a855f7, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillTag = styled.div`
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
  color: #ffffff;
  padding: 1.2rem 2.5rem;
  border-radius: 60px;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid rgba(168, 85, 247, 0.4);
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(192, 132, 252, 0.2));
    border-color: #a855f7;
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(168, 85, 247, 0.3),
      0 0 0 1px rgba(168, 85, 247, 0.1);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Skills = () => {
    const { skills } = portfolioData;


    return (
        <SkillsSection id="skills">
            <Container>
                <SectionTitle>Skills & Technologies</SectionTitle>
                <SkillsGrid>
                    {skills.map((skill, index) => (
                        <SkillTag key={index}>
                            {skill}
                        </SkillTag>
                    ))}
                </SkillsGrid>
            </Container>
        </SkillsSection>
    );
};

export default Skills;