import db from "../config/connection.js";
import mongoose from "mongoose";
import { User } from "../models/index.js";

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
    await User.insertMany(users);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
  console.table(users);
};

export default seedDatabase;
  