import { Formik, Form, Field, FieldArray } from 'formik';
// material-ui
import {
    Checkbox,
    FormControl,
    InputLabel,
    TextField,
    Button,
    FormHelperText,
    Radio,
    RadioGroup,
    FormLabel,
    Select,
    MenuItem,
    Grid,
    FormControlLabel
} from '@mui/material';
import { gridSpacing } from 'store/constant';
import React from 'react';

// ==============================|| FormikComp ||============================== //
const validate = (values) => {
    const errors = {
        friends: [{ checked: '' }, { checked: '' }, { checked: '' }]
    };
    console.log('values', values);
    if (!values.checkbox) {
        errors.checkbox = 'Required';
    }
    if (!values.textield) {
        errors.textield = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.gender) {
        errors.gender = 'Required';
    }
    if (!values.age) {
        errors.age = 'Required';
    }
    if (!values.friends[0].checked) {
        errors.friends[0].checked = 'Required';
    }
    if (!values.friends[1].checked) {
        errors.friends[1].checked = 'Required';
    }
    if (!values.friends[2].checked) {
        errors.friends[2].checked = 'Required';
    }
    return errors;
};
const FormikComp = () => (
    <Formik
        initialValues={{
            textield: '',
            password: '',
            gender: '',
            age: '',
            checkbox: false,
            // friends: ['jared', 'ian', 'brent']
            friends: [
                { myname: 'jared', checked: false },
                { myname: 'ian', checked: false },
                { myname: 'brent', checked: false }
            ]
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {(props) => (
            <Form>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field name="textield">
                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta
                            }) => (
                                <TextField
                                    {...field}
                                    error={Boolean(meta.error)}
                                    label="Textield"
                                    helperText={meta.touched && meta.error && meta.error}
                                />
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field name="password">
                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta
                            }) => (
                                <TextField
                                    type="password"
                                    {...field}
                                    error={Boolean(meta.error)}
                                    label="Password"
                                    helperText={meta.touched && meta.error && meta.error}
                                />
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field name="gender">
                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta
                            }) => (
                                <FormControl error={Boolean(meta.error)}>
                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" {...field}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    <FormHelperText>{meta.touched && meta.error && meta.error}</FormHelperText>
                                </FormControl>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field name="checkbox">
                            {({ field, form, meta }) => (
                                <FormControl error={Boolean(meta.error)} component="fieldset" sx={{ m: 3 }} variant="standard">
                                    <FormControlLabel control={<Checkbox checked={meta.value} {...field} />} label="Checkbox" />
                                    <FormHelperText>{meta.touched && meta.error && meta.error}</FormHelperText>
                                </FormControl>
                            )}
                        </Field>
                    </Grid>

                    <FieldArray
                        name="friends"
                        render={(arrayHelpers) => (
                            <>
                                {props.values.friends && props.values.friends.length > 0 ? (
                                    props.values.friends.map((friend, index) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                            <Field name={`friends[${index}].checked`}>
                                                {({ field, form, meta }) => (
                                                    <FormControl
                                                        error={Boolean(meta.error)}
                                                        component="fieldset"
                                                        sx={{ m: 3 }}
                                                        variant="standard"
                                                    >
                                                        {console.log('meta', meta)}
                                                        <FormControlLabel
                                                            control={<Checkbox checked={meta.value} {...field} />}
                                                            label={`${props.values.friends[index].myname}`}
                                                        />
                                                        <FormHelperText>{meta.touched && meta.error && meta.error}</FormHelperText>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Grid>
                                    ))
                                ) : (
                                    <div />
                                )}
                            </>
                        )}
                    />

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field name="age">
                            {({ field, form, meta }) => (
                                <FormControl error={Boolean(meta.error)} sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="Age" {...field}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{meta.touched && meta.error && meta.error}</FormHelperText>
                                </FormControl>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button type="submit" color="primary" variant="contained" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        )}
    </Formik>
);
export default FormikComp;
