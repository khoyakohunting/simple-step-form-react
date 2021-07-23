import { LoadingComponent } from "component/LoadingComponent";
import StepOne from "component/StepOne";
import StepTwo from "component/StepTwo";
import SuccessComponent from "component/SuccessComponent";
import { useState } from "react";
import { createUser } from "sdk";
import './Form.scss';

const Form = () => {
    //state to track current step of multi step form, It will be usefull for multiple step extensibility
    const [step, setStep] = useState(1);

    const [loading, setLoading] = useState(false);

    //state to record response 
    const [response, setResponse] = useState(false);

    //define total steps for extensibility
    const totalSteps = 2;

    //function to handle form submission
    const onSubmit = (values: any) => {
        values.preventDefault();

        if (step < totalSteps) {
            setStep(step + 1)
        }
        else {
            const data = new FormData(values.target)
            console.log(data.get('email'))
            const value = Object.fromEntries(data.entries());
            console.log(value)
            getResponseFromSDK(value)
        }

    }

    // firing createUser function once form complete
    const getResponseFromSDK = (value: any) => {
        setLoading(true)
        createUser(value).then(response => {
            setResponse(true);
            setStep(0);
            setLoading(false)
        })
    }


    return (
        <div className="container">
            <div className="card card--shadow">
                {!loading && <h1>Create User</h1>}
                <br />
                <br />
                <form className="custom__form" onSubmit={onSubmit}>
                    <LoadingComponent loading={loading}>
                        <StepOne hidden={step !== 1} />
                        <StepTwo hidden={step !== 2} />
                        {response && <SuccessComponent />}
                        {!response && <button type="submit" value="Submit" >{step < totalSteps ? 'Next' : 'Submit'}</button>}
                        {step > 1 && <a href="/" onClick={(e) => { setStep(step - 1); e.preventDefault() }}>Back</a>}
                    </LoadingComponent>
                </form>
            </div>
        </div>
    )
}

export default Form;