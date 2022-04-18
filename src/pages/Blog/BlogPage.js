import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './BlogPage.css'
import { SingleBlog } from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { headerData } from '../../data/headerData'

function BlogPage()
{

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogData.filter((blog) =>
    {
        const content = blog.title + blog.description + blog.date
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
        }
    }));

    const classes = useStyles();

    return (
        <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Blog</title>
            </Helmet>
            <div className="blogPage--header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <IconButton aria-label="home" style={{ position: "absolute", top: '15px', left: '15px' }}>
                        <AiOutlineHome fontSize="32px" />
                    </IconButton>
                </Link>
                <Box sx={{
                    color: 'black', textAlign: 'center'
                }}>
                    <Typography variant="h3">Blogs</Typography>
                </Box>
            </div>
            <div className="blogPage--container">
                <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." className={classes.search} />
                </div>
                <Container>
                    <Grid container>
                        {filteredArticles.reverse().map(blog => (
                            <Grid item xs={12} sm={6} md={4} key={blog.id}>
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
                </Container>
            </div>
        </div>
    )
}

export default BlogPage
