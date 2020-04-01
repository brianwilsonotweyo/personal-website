import React from 'react';

const Alert = props => {

    const { short, message, type } = props;

    const alertType = type ? 'alert-' + type : 'alert-primary';

    return (
        <div className={"alert " + alertType}>
            { short ? <span>{short}</span> : null } {message}
        </div>
    )

}

export default Alert;
