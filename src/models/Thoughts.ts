// import mongoose from "mongoose";
import { Schema, model, type Document } from 'mongoose';
// schema: structure of MongoDB doc
// model: creating Mongoose model, based on schema:
// document: type from Mongoose, used to build our interfaces (documents)

interface IThoughts extends Document {
    thoughtText: string,
    username: string,
    createdAt: Date,
    reactions: Schema.Types.ObjectId[];
    // friendCount: number; //virtual!
}

// new collection User -- 
const thoughtSchema = new Schema<IThoughts> (
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true, 
        },
        username: {
            type: String,
            required: true,
            trim: true, 
        },
        reactions: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought=model<IThoughts>('Thought', thoughtSchema);
export default Thought;