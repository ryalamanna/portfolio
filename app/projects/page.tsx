'use client';
import { useState } from 'react';
import Layout from '../components/AllPageLayout/Layout';
import './projects.scss';

const page = () => {
    const projects_list = [
        {
            id: 2,
            title: 'My Calm Space',
            subtitle: 'Free Breathing Exercises & Anxiety Relief App',
            description: 'An anxiety relief and mindfulness app offering guided breathing exercises, grounding techniques, body scans, and safe-place visualizations — all wrapped in a serene, ambient UI with 70+ handwritten affirmations.',
            techStack: ['React', 'Vite', 'Firebase'],
            features: [
                'Breathing exercises: Box Breathing, 4-7-8, and 3-Breath Reset with animated timers',
                '5-4-3-2-1 Grounding technique using all five senses',
                'Quick Body Scan to release tension from head to toe',
                'Safe Place Visualization for mental escape and calm',
                '70+ handwritten affirmations served randomly each session',
                'Ambient animated background with drift effects and soft color palettes'
            ],
            images: [
                '/project-images/calm-space-1.png',
                '/project-images/calm-space-2.png',
                '/project-images/calm-space-3.png',
                '/project-images/calm-space-4.png'
            ],
            demoLink: 'https://calm-space-d3189.web.app/',
            githubLink: 'https://github.com/ryalamanna/calm-space',
            status: 'Completed',
            category: 'Frontend Web App'
        },
        {
            id: 1,
            title: 'My Notebook',
            subtitle: 'Personal Digital Notebook',
            description: 'A comprehensive digital notebook application for capturing ideas, saving references, and embedding videos. Built with modern web technologies featuring rich text editing, YouTube integration, and secure multi-user support.',
            techStack: ['Express.js', 'MongoDB', 'Handlebars', 'Node.js', 'JavaScript'],
            features: [
                'Rich Text Editor with advanced styling options',
                'YouTube Integration for multimedia content',
                'Smart References with automatic link previews',
                'Secure Multi-User authentication system',
                'Dark Mode Design with ambient lighting effects',
                'Lightning Fast performance with real-time sync'
            ],
            images: [
                '/project-images/notebook-landing.png',
                '/project-images/notebook-features.png',
                '/project-images/notebook-dashboard.png',
                '/project-images/notebook-view.png'
            ],
            demoLink: 'https://hbs-notes.vercel.app/',
            githubLink: 'https://github.com/ryalamanna/hbs_notes',
            status: 'Completed',
            category: 'Full Stack Web App'
        }
    ];

    return (
        <Layout heading='Projects' subheading='Showcasing my development journey and technical expertise.'>
            <div className='projects_container'>
                {projects_list.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Layout>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFeatures, setShowFeatures] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="project_card">
            <div className="project_header">
                <div className="project_title_section">
                    <h2 className="project_title">{project.title}</h2>
                    <p className="project_subtitle">{project.subtitle}</p>
                    <div className="project_meta">
                        <span className={`status ${project.status.toLowerCase()}`}>
                            {project.status}
                        </span>
                        <span className="category">{project.category}</span>
                    </div>
                </div>
            </div>

            <div className="project_content">
                <div className="project_gallery">
                    <div className="image_container">
                        <img 
                            src={project.images[currentImageIndex]} 
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            className="project_image"
                        />
                        <div className="image_nav">
                            <button className="nav_btn prev" onClick={prevImage}>‹</button>
                            <button className="nav_btn next" onClick={nextImage}>›</button>
                        </div>
                    </div>
                    <div className="image_dots">
                        {project.images.map((_: any, index: number) => (
                            <button 
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => goToImage(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="project_details">
                    <div className="project_description">
                        <p>{project.description}</p>
                    </div>

                    <div className="tech_stack_section">
                        <h4>Tech Stack</h4>
                        <div className="tech_tags">
                            {project.techStack.map((tech: string, index: number) => (
                                <span key={index} className="tech_tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="features_section">
                        <button 
                            className="features_toggle"
                            onClick={() => setShowFeatures(!showFeatures)}
                        >
                            <span>Key Features</span>
                            <span className={`arrow ${showFeatures ? 'up' : 'down'}`}>▼</span>
                        </button>
                        
                        {showFeatures && (
                            <div className="features_list">
                                {project.features.map((feature: string, index: number) => (
                                    <div key={index} className="feature_item">
                                        <span className="feature_bullet">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="project_links">
                        <a href={project.demoLink} className="project_link demo_link">
                            <span>Live Demo</span>
                            <span className="link_icon">🚀</span>
                        </a>
                        <a href={project.githubLink} className="project_link github_link">
                            <span>GitHub</span>
                            <span className="link_icon">📂</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;