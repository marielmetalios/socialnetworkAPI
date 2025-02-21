import db from "../config/connection.js";
import mongoose from "mongoose";
import { User, Thought } from "../models/index.js";

const users = [
  { username: "JakeMason23", email: "jake23@example.com" },
  { username: "EmmaTaylor89", email: "emma89@example.com" },
  { username: "LiamCarter17", email: "liam17@example.com" },
  { username: "SophiaHall56", email: "sophia56@example.com" },
  { username: "NoahBennett34", email: "noah34@example.com" },
  { username: "AvaWilson92", email: "ava92@example.com" },
];

const seedDatabase = async () => {
  try {
    await db();
    await User.deleteMany(); // Clear existing data
    await Thought.deleteMany();  // Clear existing data
    console.log('User and thought data is cleared');

    await User.insertMany(users);
    console.log("Users seeded successfully!");

    const Thoughts = await Thought.insertMany([
      {
        thoughtText: 'Here is my thought!',
        username: users[0].username,
        reactions: [
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: "Wow",
            username: users[1].username,
            createdAt: new Date(),
          }]
      },
      {
        thoughtText: 'User 1 Thoughts here!',
        username: users[1].username,
        reactions: [
          {
            reactionId: new mongoose.Types.ObjectId(),
            reactionBody: "Hm",
            username: users[1].username,
            createdAt: new Date(),
          }
        ]
      },
    ])
    console.log(Thoughts);
    console.log('Thoughts and reactions seeded successfully')

    mongoose.connection.close();

  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
  console.table(users);
};

console.table(users);


seedDatabase();
export default seedDatabase;
