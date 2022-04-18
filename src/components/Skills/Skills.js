import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import './Skills.css'
import { skillsData } from '../../data/skillsData'
import { ThemeContext } from '../../contexts/ThemeContext';
import { Box, Container, Typography } from '@material-ui/core';

function Skills()
{

    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" id="skills" style={{ backgroundColor: theme.secondary }}>
            <Box sx={{
                color: theme.primary, textAlign: 'center', paddingY: '40px'
            }}>
                <Typography variant="h4">Skills</Typography>
            </Box>
            <Container style={{ paddingBottom: '40px' }}>
                <Marquee style={{ backgroundColor: '#212121' }} pauseOnHover speed={250}>
                    {
                        skillsData.map(skill => <div key={skill.skillName} style={{
                            height: '200px',
                            width: '200px',
                            backgroundColor: '#212121',
                            color: 'white',
                            margin: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            borderRadius: '10px',
                            boxShadow: '0 0 10px #e9ad35'
                        }}>
                            <img src={skill.image} alt="" width="100px" height="100px" style={{ boxShadow: '0 0 10px #e9ad35', padding: '10px', borderRadius: '10px' }} />
                            <h4 style={{ padding: '25px' }}>{skill.skillName}</h4>
                        </div>)
                    }
                </Marquee>
            </Container>
        </div>
    )
}

export default Skills
