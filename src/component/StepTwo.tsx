import { StepFormprops } from "types/types";
import InputComponent from "./InputComponent";
import RadioGroup, { RadioOptions } from "./RadioGroup";

export const StepTwo = (props: StepFormprops) => {
    //hidden parameters to switch user view
    const { hidden } = props;

    //options for radio group
    //define as a variable for extensibility
    const radioOptions: RadioOptions[] = [
        {
            label: 'Daily',
            value: 'daily',
        },
        {
            label: 'Weekly',
            value: 'weekly',
        },
        {
            label: 'Monthly',
            value: 'monthly',
        }
    ]
    return (
        <div style={{ display: hidden ? 'none' : 'block' }}>
            <InputComponent required={!hidden} name="email" label="Email" type="email" />
            <RadioGroup label="Newsletter" name="newsletter" options={radioOptions} />
        </div>
    )
}

export default StepTwo;