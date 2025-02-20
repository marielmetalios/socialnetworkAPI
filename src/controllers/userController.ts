//we need POST, PUT, DELETE for users and thoughts
//we need to reate and delete reactions and add and remove friends to a user's friend list

import { Request, Response } from 'express';
// import { ObjectId } from 'mongodb';
import { User } from '../models/index.js'

//get ALL USERS:

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const createUser = async (req: Request, res: Response) => {
  const { username, email, thoughts } = req.body;
  try {
    const newUser = await User.create({
      username,
      email,
      thoughts: thoughts || []
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
    );

    if (!user) {
      res.status(404).json({ message: 'No user with this id!' });
      res.json(user)
    }

  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndDelete(
      { _id: req.params.userId },
    );

    if (!user) {
      res.status(404).json({ message: 'No user with this id!' });
      res.json(user)
    } else {
    res.json({ message: 'User deleted' })
    }

  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  };
};

  // export const removeFriend = async (_req: Request, res: Response) => {
  //   try {
  //     const { userId, friendId } = _req.params
  //     const user = await User.findById(userId)

  //     if (!user) {
  //       return res.status(404).json({ message: "User not found" });
  //     }

  //     if (!user.friends.includes(friendId)) {
  //       res.status(400).json({
  //         message: 'This person is not friends with the user'
  //       });

  //     } else {
  //       await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } });
  //       res.json({message: 'Friend removed successfully!'});
  //     }
  //   } catch (error: any) {
  //     res.status(500).json({ message: error.message });
  //   }
  // }



