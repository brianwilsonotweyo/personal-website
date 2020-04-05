import React, { useState, useReducer } from 'react';

import { validateMessage } from '../../utils/validations';
import Alert from '../../components/alert';
import { sendMessage } from '../../services/api';

import styles from './contact-form.module.scss';

const initialResult = {
    show: false,
    message: "",
    short: "",
    type: "primary"
}

const initialPayload = {
    name: "",
    email: "",
    subject: "New message from AlexLab",
    content: ""
}

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = React.useState(initialPayload);
    const [result, dispatch] = useReducer(resultReducer, initialResult);

    const handleChange = evt => {
        const value = evt.target.value;
        setPayload({
          ...payload,
          [evt.target.name]: value
        });
    }

    function resultReducer (state, action) {
        console.log(state, action)
        switch (action.type) {
            case "SUCCESS":
                return action.data = {
                    show: true,
                    message: "Tu mensaje fue enviado correctamente. ¡Gracias!",
                    short: "Muy bien,",
                    type: "success"
                }

            case "ERROR":
                    return action.data = {
                    show: true,
                    message: "No se pudo enviar tu mensaje, por favor reintenta.",
                    short: "Oops: ",
                    type: "danger"
                }

            case "VALIDATION":
                return action.data

            case "NONE":
                return action.data = initialResult;
        
            default:
                break;
        }

    }

    const send = () => {

        setLoading(true)

        sendMessage(payload).then(() => {
            setLoading(false);
            dispatch({
                type: "SUCCESS"
            });
            
            setPayload(initialPayload);

        }).catch(err => {
            setLoading(false);

            dispatch({
                type: "ERROR"
            });

            console.log('Error', err);
        });
    }

    const validateForm = async (e) => {

        e.preventDefault();

        const result = validateMessage(payload);

        if(result.error) {

            dispatch({
                type: "VALIDATION",
                data: {
                    show: true,
                    message: result.error.details[0].message,
                    short: "Hey,",
                    type: "warning"
                }
            });

            return false
        }

        send()
        
        return result;
    }



    return (
        <div className={styles.c__area + " wow fadeInUp"}>
            <form onSubmit={validateForm}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="icons icon-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Tu nombre completo"
                                
                                 name="name"
                                 disabled={loading}
                                 value={payload.name}
                                 onChange={handleChange}/>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="icons icon-envelope"></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Tu Email"
                                
                                 name="email"
                                 disabled={loading}
                                 value={payload.email}
                                 onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Tu mensaje" cols="30" rows="3"
                            
                             name="content"
                             disabled={loading}
                             value={payload.content}
                             onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        {
                            result.show ? <Alert type={result.type} short={result.short} message={result.message}  /> : null
                        }
                        <div className="form-group mb-0 text-right">
                            <button type="submit" className="btn btn-primary cta" disabled={loading}>
                                {loading ? 'Enviando...' : 'Enviar mensaje' }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;