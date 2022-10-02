import './inputHandler.styles.scss'

interface Props {
    type: string
    name: string
    label?: string
    value: string | number
    onChange: any
    placeholder?: string
}

function InputHandler(props: Props) {
    return (
        <div className="group">
            <label
                className={`${
                    props.value.toString().length ? 'shrink' : ''
                } form-input-label`}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <input
                className="form-input"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputHandler
