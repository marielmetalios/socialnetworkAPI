//we need POST, PUT, DELETE for users and thoughts
//we need to reate and delete reactions and add and remove friends to a user's friend list

import { reactionSchema, User } from '../models/index.ts'

//get ALL USERS:

const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch(error: any){
    console.error(error)
    res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { username } = req.params;
    try {
      const user = await Users.findById(username);
      if(user) {
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

const removeFriend  = async (_req: Request, res: Response) => {
    try {
        const friends = await User.findOneAndDelete({ _id: req.params.ObjectId});

        if(User.friends.length < 0) {
            res.statusText(400).json({
                message: 'User has no friends'
            });
        } else {
        await user.deleteOne ({ _id: {$in: User.friends}})
        }


    } catch(error) {

    }
}



