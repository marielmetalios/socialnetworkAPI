// import mongoose from "mongoose";
import { Schema, Types, type Document } from 'mongoose';

interface IReaction extends Document {
    reactionId: Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date
}

const reactionSchema = new Schema<IReaction>(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

reactionSchema.virtual('formattedCreatedAt').get(function() {
    return this.createdAt.toString(); 
});

export default reactionSchema;


