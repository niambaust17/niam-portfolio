import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import './Education.css'
import EducationCard from './EducationCard';
import { educationData } from '../../data/educationData'

function Education()
{

    const { theme } = useContext(ThemeContext);
    return (
        <div id="education" style={{ backgroundColor: theme.secondary }}>
            <Box sx={{
                color: theme.primary, textAlign: 'center', paddingY: '40px',
            }}>
                <Typography variant="h4">Education</Typography>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            padding: {
                                xs: '10px',
                                sm: '15px',
                                md: '25px'
                            },
                            marginBottom: {
                                xs: '20px'
                            },
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}>
                            <img src={theme.eduimg} alt="" width="100%" height="354px" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Education
