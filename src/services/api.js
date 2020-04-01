const apiURL = "http://18.188.241.237:5100/api/leads/set";

export const sendMessage = async (payload) =>  {
    try {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }

        const response = await fetch(apiURL, options);
        const data = await response.json();

        return data;
        
    } catch (error) {
        throw new Error(error.message);
    }
}