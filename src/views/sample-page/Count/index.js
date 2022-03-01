// material-ui
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { INCREMENT } from 'store/actions/count';

const CountPage = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    const persons = useSelector((state) => state.persons);
    const increment = () => {
        dispatch({ type: INCREMENT, data: 1 });
    };

    return (
        <MainCard title="Count Card">
            <Typography variant="body2">Number: {count}</Typography>
            {persons.map((p, index) => (
                <Typography variant="body2" key={index}>
                    {`名字：${p.name} 年龄：${p.age}岁`}
                </Typography>
            ))}
            <Button variant="contained" onClick={(e) => increment(e)}>
                +++++
            </Button>
        </MainCard>
    );
};

export default CountPage;
