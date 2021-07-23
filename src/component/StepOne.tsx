import { StepFormprops } from "types/types";
import InputComponent from "./InputComponent";

export const StepOne = (props: StepFormprops) => {
    //hidden parameters to switch user view
    const { hidden } = props;
    return (
        <div style={{ display: hidden ? 'none' : 'block' }}>
            <InputComponent required name="name" label="Name" type="text" />
            <InputComponent name="age" label="Age" type="number" />
        </div>
    )
}

export default StepOne;