import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fname: Yup.string().required("First Name is required").min(2, "First Name should be at least 2 characters long"),
    lname: Yup.string().required("Last Name is required").min(2, "Last Name should be at least 2 characters long"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required").min(10, "Message should be at least 10 characters long"),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            alert("Submitted");
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: "auto",
                justifyContent: 'center',
                minHeight: '100vh',
                width: '70%',
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        variant="h3" 
                        gutterBottom 
                        sx={{
                            textAlign: "center",
                            fontWeight: 600,
                        }}
                    >
                        Contact Form
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id="fname" 
                        name="fname" 
                        label="First Name" 
                        variant="outlined" 
                        fullWidth 
                        value={formik.values.fname} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        error={formik.touched.fname && Boolean(formik.errors.fname)}
                        helperText={formik.touched.fname && formik.errors.fname}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id="lname" 
                        name="lname" 
                        label="Last Name" 
                        variant="outlined" 
                        fullWidth 
                        value={formik.values.lname} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        error={formik.touched.lname && Boolean(formik.errors.lname)}
                        helperText={formik.touched.lname && formik.errors.lname}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="email" 
                        name="email" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="message" 
                        name="message" 
                        label="Message" 
                        variant="outlined" 
                        multiline 
                        rows={4} 
                        fullWidth 
                        value={formik.values.message} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="success"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;