import userModel from "../models/userModel.js"
import { hashPassword, comparePassword } from "../helpers/authHelper.js"
import JWT from 'jsonwebtoken'

// Register Controller
export const signUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // validation
        if (!name) {
            return res.send({ message: 'Name is Required' })
        }
        if (!email) {
            return res.send({ message: 'Email is Required' })
        }
        if (!password) {
            return res.send({ message: 'Password is Required' })
        }


        // existing user 
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register please login'
            })
        }

        // register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({ name, email, password: hashedPassword }).save();

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}


// POST LOGIN
export const logInController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        //token 
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET_ONLINE_COMPILER, { expiresIn: '7d' })
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}