import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username }).select('+password');

        if (!user) return res.status(404).json({ error: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) return res.status(400).json({ error: 'Incorrect Password' });


        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: 15 * 60 * 60 * 24 * 1000 }
        );

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 15 * 60 * 60 * 24 * 1000,
            secure: false,
            sameSite: true
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error in signIn controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const signUp = async (req, res) => {
    try {
        const { username, password, bio } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            password: hashedPassword,
            bio
        });

        const user = await newUser.save();

        return res.status(200).json(user)
    } catch (error) {
        console.log("Error in signUp controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const signOut = async (req, res) => {
    try {
        res.cookie('token', '', {
            maxAge: 0,
        });
        res.status(200).json({
            message: 'Signout Successful'
        });
    } catch (error) {
        console.log("Error in signOut controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUser controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const verifyUser = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(200).json(false)
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid Token" })
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const isVerified = true;

        res.status(200).json({ user, isVerified });
    } catch (error) {
        console.log("Error in verifyUser controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}