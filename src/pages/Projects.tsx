import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await axios.get("https://669b437b276e45187d34f77c.mockapi.io/api/projects/projects");
            return response.data;
        }
    });

    if (error) {
        return <h1>Error</h1>;
    }
    if (isLoading) {
        return <h1>Loading</h1>;
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
                       

                        return (
                            <ProjectCard item={item} key={index} />
                        );
                    })
                }
            </Grid>
        </Box>
    );
}

export default Projects;
