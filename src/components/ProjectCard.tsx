import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useInView } from 'framer-motion';
import React from 'react'

const ProjectCard: React.FC<{item: any}> = ({ item }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <Grid ref={ref} item sm={12} lg={4} xl={3} md={6} sx={{
            opacity: isInView ? '1' : '0',
            transition: "opacity 0.2s, transform 0.2s",
            transform: isInView ? 'none' : 'translateY(20px)',
        }} >
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardMedia
                    sx={{
                        height: '250px',
                        width: "full"
                    }}
                    component="img"
                    alt="project image"
                    height="140"
                    image={item.avatar}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        height: '100px',
                        overflowY: "scroll"
                    }}>
                        {
                            item.description
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href={item.demo} target="_blank" rel="noopener noreferrer">DEMO</a>
                    </Button>
                    <Button size="small">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">CODE</a>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard