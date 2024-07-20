import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { AppDispatch, RootState } from "../store/store";
import { resetContactForm, setEmail, setFname, setLname, setMessage } from "../store/slices/contactData"

interface ButtonProps {
    primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const validationSchema = Yup.object({
    fname: Yup.string().required("First Name is required").min(2, "First Name should be at least 2 characters long"),
    lname: Yup.string().required("Last Name is required").min(2, "Last Name should be at least 2 characters long"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required").min(10, "Message should be at least 10 characters long"),
});

const Contact: React.FC = () => {

    const dispatch = useAppDispatch<AppDispatch>();
    const contact = useAppSelector((state: RootState) => state.contact);

    const formik = useFormik({
        initialValues: {
            fname: contact.fname,
            lname: contact.lname,
            email: contact.email,
            message: contact.message,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            alert("Submitted");
            dispatch(resetContactForm());
        },
        enableReinitialize: true,
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
                minHeight: '90vh',
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
                        onChange={(e) => {
                            formik.handleChange;
                            dispatch(setFname(e.target.value));
                        }}
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
                        onChange={(e) => {
                            formik.handleChange;
                            dispatch(setLname(e.target.value));
                        }}
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
                        onChange={(e) => {
                            formik.handleChange;
                            dispatch(setEmail(e.target.value));
                        }}
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
                        onChange={(e) => {
                            formik.handleChange;
                            dispatch(setMessage(e.target.value));
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <StyledButton primary
                        type="submit"
                    >
                        Submit
                    </StyledButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;
