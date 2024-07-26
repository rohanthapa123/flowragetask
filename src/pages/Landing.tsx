import { Box, Typography, Grid } from "@mui/material";
import image from "../assets/image.jpg";

export const Landing = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
      <Grid container spacing={2} sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { sm: '100%', md: '50%' } }}>
          <Box>
            <Typography variant="h4" gutterBottom>Hi</Typography>
            <Typography variant="h3" gutterBottom>It's me Rohan Thapa</Typography>
            <Typography variant="h6" gutterBottom>
              Aspiring React.Js Developer with strong front-end development skills in ReactJS, Redux, and JavaScript.
              Experienced in building dynamic web applications and managing complex data operations.
            </Typography>
            <Typography variant="h5" gutterBottom>Learning !!!</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { sm: '100%', md: '50%' } }}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: '#f0f0f0',

          }}>
            <img src={image} alt="my info" loading="lazy" style={{ width: '65%', borderRadius: '50%', aspectRatio: '1/1', objectFit: 'cover' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
