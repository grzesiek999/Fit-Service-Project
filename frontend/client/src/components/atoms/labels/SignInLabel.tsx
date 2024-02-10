import React from "react"
import "../../../styles/index.scss";


type SingInLabelProps = {
    context: string
}

const SignInLabel = ({context}: SingInLabelProps) => {

    return (
        <label className='signin-label'>{context}</label>
    );
}

export default SignInLabel;