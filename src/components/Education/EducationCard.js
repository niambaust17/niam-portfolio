import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'
import { Box, Typography } from '@material-ui/core';

function EducationCard({ id, institution, course, startYear, endYear })
{

    const { theme } = useContext(ThemeContext);

    return (
        <Fade bottom>
            <Box key={id} sx={{
                backgroundColor: theme.primary30,
                "&:hover": {
                    backgroundColor: theme.primary50,
                },
                padding: 15,
                margin: {
                    xs: '10px',
                    sm: '15px',
                    md: '25px'
                }
            }} className='education-card'>
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <Typography variant="body1" style={{ color: theme.primary }}>{startYear}-{endYear}</Typography>
                    <Typography variant="h6" style={{ color: theme.tertiary }}>{course}</Typography>
                    <Typography variant="body1" style={{ color: theme.tertiary80 }}>{institution}</Typography>
                </div>
            </Box>
        </Fade>
    )
}

export default EducationCard
