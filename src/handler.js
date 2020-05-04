export const hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };
};

export const hello2 = async event => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(
            {
                message: 'hello world',
            },
            null,
            2
        ),
    };
};
