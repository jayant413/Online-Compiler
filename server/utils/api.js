import axios from "axios";


const fetchApiData = async (query) => {

    const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/${query}`,
        headers: {
            'X-RapidAPI-Key': 'c8f2825b2bmsh3a09c4e5d82671fp1a8948jsn47cd0c571bde',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
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

export { fetchApiData }