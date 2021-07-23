export interface RadioOptions {
    label?: string;
    value?: string;
}
interface RadioGroupProps {
    name: string;
    options: RadioOptions[];
    required?: boolean;
    label: string;
}
export const RadioGroup = (props: RadioGroupProps) => {
    const { label, name, required, options } = props;
    return (
        <div>
            <p className="label">{label}</p>
            {options?.map((option, index) => {
                return (
                    <div key={index} className="custom__form--item custom__form--item--inline">
                        <input required={required} type="radio" name={name} value={option.value} id={option.value} />
                        <label htmlFor={option.value}>{option.label}</label>
                    </div>
                )
            })
            }
        </div>
    )
}

export default RadioGroup;