import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import { useInView } from 'framer-motion';
import React from 'react'
import { useQuery } from 'react-query'

const Projects: React.FC = () => {


    const { data, error, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await axios.get("https://669b437b276e45187d34f77c.mockapi.io/api/projects/projects")
            return response.data;
        }
    })

    if (error) {
        return <h1>Error</h1>
    }
    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <Box sx={{
            width: "100%",
            backgroundColor: "rgba(0 , 0 , 0 , 0.1)",
            minHeight: 'calc(100dvh - 10vh)',
            padding: '15px'
        }}>
            <Grid container spacing={2} rowSpacing={2}>
                {
                    data?.map((item: any, index: number) => {

                        const ref = React.createRef<HTMLDivElement>();
                        const isInView = useInView(ref, { once: false })

                        return <Grid
                            item sm={12} lg={4} xl={3} md={6}
                            key={index}
                            ref={ref}
                            sx={{
                                opacity: isInView ? '1' : '0',
                                transition: "opacity 0.6s, transform 0.6s",
                                transform: isInView ? 'none' : 'translateY(20px)',
                            }} >
                            <Card sx={{ maxWidth: 345, margin: "auto" }}>
                                <CardMedia
                                    sx={{
                                        height: '250px',
                                        width: "full"
                                    }}
                                    component="img"
                                    alt="green iguana"
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
                                        <a target='blank' href={item.demo}>DEMO</a>
                                    </Button>
                                    <Button size="small">
                                        <a href={item.github} target="_blank" >CODE</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    })
                }


            </Grid>
        </Box>
    )
}

export default Projects