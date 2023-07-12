import { createApiSubmission, getApiSubmission } from "../utils/api.js";


const createSubmission = async (req, res) => {
    try {
        // to pass language_id and source_code in data
        let data = req.body

        const response = await createApiSubmission(data);
        res.status(200).json({
            success: true,
            message: "Created submission successfully",
            data: response
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while creating submission",
            error: error
        })
    }
}

const getSubmission = async (req, res) => {
    try {
        const token = req.params.token
        const data = await getApiSubmission(token);
        res.status(200).json({
            success: true,
            message: "Fetched submission successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while fetching submission",
            error: error
        })
    }
}



export { createSubmission, getSubmission } 