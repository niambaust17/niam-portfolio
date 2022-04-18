import React from 'react'
import Fade from 'react-reveal/Fade';
import './SingleBlog.css'
import { Box, Typography } from '@material-ui/core';

function SingleBlog({ theme, title, desc, date, image, url, id })
{
    return (
        <Fade bottom>
            <Box sx={{
                padding: '15px',
                marginX: {
                    xs: '10px',
                    sm: '15px',
                    md: '25px'
                },
                marginY: {
                    xs: '10px',
                    sm: '15px',
                    md: '10px'
                },
                backgroundColor: theme.primary400,
                borderRadius: '10px'
            }}>
                <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer">
                    <div className="singleBlog--image" style={{ backgroundColor: theme.secondary }}>
                        <img src={image} alt={title} width="100%" height="200px" />
                    </div>
                    <div className="singleBlog--body">
                        <Typography variant="body1" style={{ color: theme.tertiary }}>{date}</Typography>
                        <Typography variant="h5" style={{ color: theme.secondary }}>{title}</Typography>
                        <Typography variant="body2" style={{ color: theme.secondary, textAlign: 'justify' }}>{desc}</Typography>
                    </div>
                </a>
            </Box>
        </Fade>
    )
}

export default SingleBlog
