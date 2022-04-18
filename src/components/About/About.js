import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import { Container, Grid, Box, Typography } from '@material-ui/core';

function About()
{
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            marginTop: {
                                xs: '40px',
                                sm: '50px',
                                md: '80px'
                            },
                            marginX: {
                                xs: '10px',
                                sm: '15px',
                                md: '25px'
                            }
                        }}>
                            <Box sx={{
                                color: theme.primary, marginBottom: '40px',
                            }}>
                                <Typography variant="h4">{aboutData.title}</Typography>
                            </Box>
                            <Box sx={{
                                color: theme.tertiary80, textAlign: 'justify'
                            }}>
                                <Typography variant="body1">{aboutData.description1}<br /><br />{aboutData.description2}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            padding: {
                                xs: '10px',
                                sm: '15px',
                                md: '25px'
                            },
                            marginTop: {
                                xs: '40px',
                                sm: '50px',
                                md: '60px'
                            },
                        }}>
                            <img src={theme.aboutimg1} alt="" width="100%" height="438px" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default About
