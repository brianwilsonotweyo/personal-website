import React, { useState } from 'react';
import Alert from '../../components/alert';
import styles from './contact-form.module.scss';

const initialResult = {
    show: false,
    message: "",
    short: "",
    type: "primary"
}

const ContactForm = () => {

    const [result, setResult] = useState(initialResult);

    return (
        <div className={styles.c__area}>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="icons icon-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Tu nombre completo"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="icons icon-envelope"></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Tu Email"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Tu mensaje" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        {
                            result.show ? <Alert type={result.type} short={result.short} message={result.message}  /> : null
                        }
                        <div className="form-group mb-0 text-right">
                            <button type="button" className="btn btn-primary cta">Enviar mensaje</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;