const resultReducer = (state, action) => {
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

        case "VALIDATION_ERROR":
            return action.data

        case "NONE":
            return action.data = {
                show: false,
                message: "",
                short: "",
                type: "primary"
            };
    
        default:
            return state
    }

}

export default resultReducer;