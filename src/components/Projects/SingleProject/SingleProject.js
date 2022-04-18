import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme })
{
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 50,
            border: `2px solid ${ theme.tertiary }`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${ theme.secondary }`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <Box className='projectContent' sx={{
                minHeight: '460px',
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
                backgroundColor: theme.primary400
            }}>
                <Typography variant="h5"
                    id={name.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {name}
                </Typography>
                <img src={image} alt={name} width="100%" height="276px" />
                <div className='project--showcaseBtn'>
                    <a
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${ name
                            .replace(' ', '-')
                            .toLowerCase() } ${ name
                                .replace(' ', '-')
                                .toLowerCase() }-demo`}
                    >
                        <FaPlay
                            id={`${ name
                                .replace(' ', '-')
                                .toLowerCase() }-demo`}
                            className={classes.icon}
                            aria-label='Demo'
                        />
                    </a>
                    <a
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${ name
                            .replace(' ', '-')
                            .toLowerCase() } ${ name
                                .replace(' ', '-')
                                .toLowerCase() }-code`}
                    >
                        <FaCode
                            id={`${ name
                                .replace(' ', '-')
                                .toLowerCase() }-code`}
                            className={classes.icon}
                            aria-label='Code'
                        />
                    </a>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                        textAlign: 'justify'
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </Box>
        </Fade>
    );
}

export default SingleProject;
