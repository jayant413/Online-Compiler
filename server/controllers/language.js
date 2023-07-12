import { fetchApiData } from "../utils/api.js";


const getLanguages = async (req, res) => {
    try {
        let query = 'languages'
        // let query = req.body.query 
        const data = await fetchApiData(query);
        res.status(200).json({
            success: true,
            message: "Languages fetched successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while fetcing languages",
            error: error
        })
    }
}

const getLanguage = async (req, res) => {
    try {
        const language_id = req.params.language_id
        let query = `languages/${language_id}`
        const data = await fetchApiData(query);
        res.status(200).json({
            success: true,
            language_id: language_id,
            message: `language with ${language_id} fetched successfully`,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while fetcing language ",
            error: error
        })

    }
}

export { getLanguages, getLanguage };