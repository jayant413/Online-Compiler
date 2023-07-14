import axios from "axios";

let BASE_URL = `https://judge0-ce.p.rapidapi.com`

const fetchApiData = async (query) => {

    const options = {
        method: 'GET',
        url: `${BASE_URL}/${query}`,
        headers: {
            'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
            // 'X-RapidAPI-Host': `${process.env.JUDGE0_HOST}`,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        }
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error in API");
        // console.error("Error in API:", error);
    }
};

const createApiSubmission = async (data) => {
    const options = {

        method: 'POST',
        url: `${BASE_URL}/submissions`,
        params: {
            base64_encoded: true,
            // fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
            // 'X-RapidAPI-Host': `${process.env.JUDGE0_HOST}`,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
        data: {
            language_id: data.language_id,
            source_code: data.source_code,
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error("Error while creating Submission");
        return {
            message: "Error while creating Submission through api"
        }
    }
}

const getApiSubmission = async (token) => {

    const options = {
        method: 'GET',
        url: `${BASE_URL}/submissions/${token}`,
        params: {
            base64_encoded: true,
            fields: '*'
        },
        headers: {
            'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
            // 'X-RapidAPI-Host': `${process.env.JUDGE0_HOST}`,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        return {
            message: "Error while fetching submission through api"
        }
    }
}

export { fetchApiData, createApiSubmission, getApiSubmission }