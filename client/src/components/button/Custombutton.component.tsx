import React from 'react'
import './customButton.styles.scss'

interface Props {
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    buttonText?: string
    disabled?: boolean
    buttonType?: string
}

function Custombutton(props: Props) {
    return (
        <button
            className={`button-container ${props.buttonType}`}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.buttonText}
        </button>
    )
}

export default Custombutton
