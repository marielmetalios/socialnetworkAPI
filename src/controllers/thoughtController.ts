
import { Request, Response } from 'express';
import { User } from "../models";
import Thought from "../models/Thoughts.js"

export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find().populate("reactions");

        if (!thoughts) {
            res.status(404).json({ message: 'No thoughts found' });
        } else {
            res.json(thoughts);
        }
    } catch (error: any) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}

export const getThoughtById = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const { thoughtId } = _req.params;
        const thought = await Thought.findById(thoughtId);

        if (!thought) {
            return res.status(404).json({ message: 'Singular thought not found' });
        }

        return res.json(thought);
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export const createThought = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { thoughtText, username } = req.body;

        if (!thoughtText || !username) {
            return res.status(404).json({ message: "Need thoughtText and username." });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Create thought
        const newThought: any = await Thought.create({ thoughtText, username });

        // Add the thought to the user's thoughts array
        user.thoughts.push(newThought._id);
        await user.save();

       return res.status(200).json(newThought);
    } catch (error: any) {
        console.error(error);
        return res.status(404).json({ message: error.message });
    }
};