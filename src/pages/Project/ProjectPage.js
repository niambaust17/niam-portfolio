import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function ProjectPage()
{

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) =>
    {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '50%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '1.5rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow: 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060',
            "&::placeholder": {
                color: theme.tertiary80,
            },
            [t.breakpoints.down('sm')]: {
                width: '70%',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>
            <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <IconButton aria-label="home" style={{
                        position: "absolute", top: '15px', left: '15px'
                    }}>
                        <AiOutlineHome fontSize="32px" />
                    </IconButton>
                </Link>
                <Box sx={{
                    color: 'black', textAlign: 'center'
                }}>
                    <Typography variant="h3">Projects</Typography>
                </Box>
            </div>
            <div className="projectPage-container">
                <div className="projectPage-search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
                </div>
                <Container>
                    <Grid container>
                        {filteredArticles.map(project => (
                            <Grid item xs={12} sm={6} md={4}>
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
                </Container>
            </div>
        </div>
    )
}

export default ProjectPage
