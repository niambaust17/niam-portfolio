import React, { useContext, useRef } from 'react';
import { Button, Container, Grid, TextField, Box, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import emailjs from '@emailjs/browser';
import { makeStyles } from '@material-ui/core/styles';
import
{
    FaLinkedinIn,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaMediumM,
} from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts()
{

    const { theme } = useContext(ThemeContext);

    const successNotify = () => toast.success("Successfully Submitted", {
        position: toast.POSITION.TOP_CENTER
    });

    const errorNotify = () => toast.error("Submission Failed", {
        position: toast.POSITION.TOP_CENTER
    });

    const useStyles = makeStyles((t) => ({
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        }
    }));

    const classes = useStyles();

    const form = useRef();

    const sendEmail = (e) =>
    {
        e.preventDefault();
        emailjs.sendForm('service_6einzkd', 'template_e1ku54g', form.current, 'user_JDx1ROZLTez5Hp5yC04kV')
            .then((result) =>
            {
                successNotify();
                console.log(result.text);
            }, (error) =>
            {
                errorNotify();
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div
            className="contacts"
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <ToastContainer autoClose={4000} />
            <Box sx={{
                color: theme.primary, textAlign: 'center', paddingY: '40px'
            }}>
                <Typography variant="h4">Contacts</Typography>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            padding: 25,
                            margin: {
                                xs: '10px',
                                sm: '15px',
                                md: '25px'
                            },
                            backgroundColor: '#e9ad35',
                            borderRadius: '10px'
                        }}>
                            <form ref={form} onSubmit={sendEmail}>
                                <TextField
                                    name="name"
                                    type="text"
                                    label="Name"
                                    margin="normal"
                                    placeholder="John Doe"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    name="email"
                                    type="email"
                                    label="Email"
                                    margin="normal"
                                    placeholder="john@gmail.com"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    name="subject"
                                    type="text"
                                    label="Subject"
                                    margin="normal"
                                    placeholder="Type your subject..."
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    name="message"
                                    type="text"
                                    label="Message"
                                    margin="normal"
                                    placeholder="Type your message"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Button
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        size="large"
                                        type='submit'
                                        style={{
                                            color: 'white',
                                            backgroundColor: '#e9ad35cc',
                                            borderRadius: '25px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Send
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: {
                                xs: '10px',
                                sm: '15px',
                                md: '25px'
                            }
                        }}>
                            <a
                                href={`mailto:${ contactsData.email }`}
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FiAtSign />
                                </div>
                                <Typography variant='body1' style={{ color: theme.tertiary }}>
                                    {contactsData.email}
                                </Typography>
                            </a>
                            <a
                                href={`tel:${ contactsData.phone }`}
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FiPhone />
                                </div>
                                <Typography variant='body1' style={{ color: theme.tertiary }}>
                                    {contactsData.phone}
                                </Typography>
                            </a>
                            <div className='personal-details'>
                                <div className={classes.detailsIcon}>
                                    <HiOutlineLocationMarker />
                                </div>
                                <Typography variant='body1' style={{ color: theme.tertiary }}>
                                    {contactsData.address}
                                </Typography>
                            </div>

                            <div className='socialmedia-icons'>
                                {socialsData.github && (
                                    <a
                                        href={socialsData.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={classes.socialIcon}
                                    >
                                        <FaGithub aria-label='GitHub' />
                                    </a>
                                )}
                                {socialsData.linkedIn && (
                                    <a
                                        href={socialsData.linkedIn}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={classes.socialIcon}
                                    >
                                        <FaLinkedinIn aria-label='LinkedIn' />
                                    </a>
                                )}
                                {socialsData.facebook && (
                                    <a
                                        href={socialsData.facebook}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={classes.socialIcon}
                                    >
                                        <FaFacebook aria-label='Facebook' />
                                    </a>
                                )}
                                {socialsData.instagram && (
                                    <a
                                        href={socialsData.instagram}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={classes.socialIcon}
                                    >
                                        <FaInstagram aria-label='Instagram' />
                                    </a>
                                )}
                                {socialsData.medium && (
                                    <a
                                        href={socialsData.medium}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={classes.socialIcon}
                                    >
                                        <FaMediumM aria-label='Medium' />
                                    </a>
                                )}
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </div >
    );
}

export default Contacts;
