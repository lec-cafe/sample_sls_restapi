import axios from "axios"

export const issues = async event => {
    const url = "https://api.github.com/repos/lec-cafe/lec-cafe/issues"
    const results = await axios.get(url,{
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                issues: results.data
            }
        ),
    };
};

export const nippo = async event => {
    const url = "https://api.github.com/repos/lec-cafe/lec-cafe/issues"
    const results = await axios.post(url,{
        title: `日報`,
        body: `本日の勤務記録を作成してください。`
    },{
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        },
    })
    return {
        statusCode: 200,
        body: JSON.stringify({}),
    };
};
