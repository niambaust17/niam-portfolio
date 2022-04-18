import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';


function Blog()
{

    const { theme } = useContext(ThemeContext);

    return (
        <div id="blogs" style={{ backgroundColor: '#212121', paddingTop: '40px' }}>
            <Container>
                <Box sx={{
                    color: theme.primary, textAlign: 'center', marginBottom: '40px',
                }}>
                    <Typography variant="h4">Blogs</Typography>
                </Box>
                <div className="projects-body">
                    <Grid container>
                        {blogData.slice(0, 3).reverse().map(blog => (
                            <Grid key={blog.id} item xs={12} sm={6} md={4}>
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    {blogData.length > 3 && (
                        <Box sx={{ marginTop: '1rem', marginRight: { xs: 0, md: '25px' }, textAlign: { xs: 'center', md: 'right' } }}>
                            <Link to="/blog">
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
    )
}

export default Blog
