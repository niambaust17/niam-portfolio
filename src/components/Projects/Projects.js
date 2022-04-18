import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Container, Grid, Button, Box, Typography } from '@material-ui/core';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";
import SingleProject from './SingleProject/SingleProject';

function Projects()
{
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <Container>
                        <Box sx={{
                            color: theme.primary, textAlign: 'center', paddingY: '40px'
                        }}>
                            <Typography variant="h4">Projects</Typography>
                        </Box>
                        <div className="projects-body">
                            <Grid container>
                                {projectsData.slice(0, 3).map(project => (
                                    <Grid key={project.id} item xs={12} sm={6} md={4}>
                                        <SingleProject
                                            theme={theme}
                                            key={project.id}
                                            id={project.id}
                                            name={project.projectName}
                                            desc={project.projectDesc}
                                            tags={project.tags}
                                            code={project.code}
                                            demo={project.demo}
                                            image={project.image}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            {projectsData.length > 3 && (
                                <Box sx={{ marginTop: '1rem', marginRight: { xs: 0, md: '25px' }, textAlign: { xs: 'center', md: 'right' } }}>
                                    <Link to="/projects">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            endIcon={<HiArrowRight />}
                                            style={{
                                                color: 'white',
                                                backgroundColor: '#e9ad35',
                                                borderRadius: '25px'
                                            }}
                                        >
                                            View All
                                        </Button>
                                    </Link>
                                </Box>
                            )}
                        </div>
                    </Container>
                </div>

            )}

        </>
    )
}

export default Projects
