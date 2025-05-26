import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: 
    linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%),
    radial-gradient(ellipse at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 30%, rgba(192, 132, 252, 0.1) 0%, transparent 50%);
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
    animation: backgroundFloat 30s ease-in-out infinite;
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
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  background: ${props => props.theme.gradients.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.primaryDark};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.purple};
    border-color: ${props => props.theme.colors.accentPurple};
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(168, 85, 247, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.textPrimary};
    color: ${props => props.theme.colors.accentPurple};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.textPrimary};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(168, 85, 247, 0.2);
  color: ${props => props.theme.colors.accentPurple};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <ProjectsSection id="projects">
            <Container>
                <SectionTitle>Featured Projects</SectionTitle>
                <ProjectsGrid>
                    {projects.map((project) => (
                        <ProjectCard key={project.id}>
                            <ProjectImage>
                                <ProjectOverlay>
                                    <ProjectLinks>
                                        <ProjectLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i>
                                        </ProjectLink>
                                        <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </ProjectLink>
                                    </ProjectLinks>
                                </ProjectOverlay>
                            </ProjectImage>
                            <ProjectContent>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <ProjectTech>
                                    {project.technologies.map((tech, index) => (
                                        <TechTag key={index}>{tech}</TechTag>
                                    ))}
                                </ProjectTech>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </Container>
        </ProjectsSection>
    );
};

export default Projects;
