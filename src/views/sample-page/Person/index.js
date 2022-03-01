// material-ui
import { Typography, Box, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { ADD_PERSON } from 'store/actions/person';
// project imports
import MainCard from 'ui-component/cards/MainCard';

const PersonPage = () => {
    const count = useSelector((state) => state.count);
    const name = useRef('');
    const age = useRef('');
    const dispatch = useDispatch();

    const addPerson = () => {
        const data = {
            name: name.current.children[1].children[0].value,
            age: age.current.children[1].children[0].value
        };
        dispatch({ type: ADD_PERSON, data });
    };
    return (
        <MainCard title="Person">
            <Typography variant="body2">count： {count}</Typography>
            <Typography variant="body2">==========================</Typography>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}
            >
                <TextField id="outlined-basic" ref={name} label="name" variant="outlined" />
                <TextField id="outlined-basic" ref={age} label="age" variant="outlined" />
            </Box>
            <Button variant="contained" onClick={(e) => addPerson(e)}>
                addPerson
            </Button>
        </MainCard>
    );
};

export default PersonPage;
