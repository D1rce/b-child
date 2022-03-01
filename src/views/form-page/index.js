import FormikComp from './formikComp';
import FormikHook from './formikHook';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// ==============================|| Form PAGE ||============================== //

const FormPage = () => (
    <>
        <MainCard title="这是一个FormikComp的demo">
            <FormikComp />
        </MainCard>
        <MainCard title="这是一个FormikHook的demo">
            <FormikHook />
        </MainCard>
    </>
);

export default FormPage;
