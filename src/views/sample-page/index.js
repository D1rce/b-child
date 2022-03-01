// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CountPage from './Count';
import PersonPage from './Person';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card 这是一个redxu的demo">
        <CountPage />
        <br />
        <PersonPage />
    </MainCard>
);

export default SamplePage;
