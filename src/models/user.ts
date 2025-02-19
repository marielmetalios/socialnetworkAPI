// import mongoose from "mongoose";
import { Schema, model, type Document } from 'mongoose';
// schema: structure of MongoDB doc
// model: creating Mongoose model, based on schema:
// document: type from Mongoose, used to build our interfaces (documents)

interface IUser extends Document {
    username: string,
    email: string,
    thoughts: Schema.Types.ObjectId[];
    friends: Schema.Types.ObjectId[];
    // friendCount: number; //virtual!
}

// new collection User -- 
const userSchema = new Schema<IUser> (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true, 
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            }
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User=model<IUser>('User', userSchema);
export default User;