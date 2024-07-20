import { Box, Typography, Grid } from "@mui/material";
import background from "../assets/background.jpg";

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

          }}>
            <img src={background} alt="my info" style={{ width: '65%', borderRadius: '50%', aspectRatio: '1/1' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
