interface InputComponentProps extends Partial<HTMLInputElement> {
    label: string;
    name: string;
}
export const InputComponent = (props: InputComponentProps) => {
    const { label, name, required, type } = props;
    return (
        <div className="custom__form--item">
            <label htmlFor={name}>{label}</label>
            <input type={type || 'text'} required={required} name={name} id={name} />
        </div>
    )
}

export default InputComponent;