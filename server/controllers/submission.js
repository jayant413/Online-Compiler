import { createApiSubmission, getApiSubmission } from "../utils/api.js";


const createSubmission = async (req, res) => {
    try {
        // to pass language_id and source_code in data
        let data = req.body

        const response = await createApiSubmission(data);
        if (!response.token) {
            return res.status(404).json({
                success: false,
                message: "Not able to create submission",
            })
        }
        res.status(200).json({
            success: true,
            message: "Created submission successfully",
            token: response.token
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
        const response = await getApiSubmission(token);
        res.status(200).json({
            success: true,
            message: "Fetched submission successfully",
            result: response
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