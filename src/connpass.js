import axios from "axios"

export const events = async event => {
    const url = "https://connpass.com/api/v1/event/"
    const params = {
        series_id: 1712
    }
    const results = await axios.get(url,{params})
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                events: results.data
            }
        ),
    };
};
