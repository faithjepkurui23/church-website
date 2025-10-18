import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ===== MongoDB Connection =====
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};
connectDB();

// ===== Models =====
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  avatar: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

const sermonSchema = new mongoose.Schema({
  title: String,
  preacher: String,
  date: String,
});

const Sermon = mongoose.model("Sermon", sermonSchema);

// ===== Routes =====
app.get("/", (req, res) => {
  res.send("Church Website Backend is running ✝️");
});

// Get all sermons
app.get("/api/sermons", async (req, res) => {
  try {
    const sermons = [
      { id: 1, title: "Sunday Service", preacher: "Pastor John", date: "2025-10-17" },
      { id: 2, title: "Youth Revival", preacher: "Pastor Mary", date: "2025-10-20" },
    ];
    res.json(sermons);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Join Us / Create Profile
app.post("/api/events/join", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=2e3cff&color=ffffff&size=128&rounded=true`;

    const user = await User.create({ name, email, phone, avatar });
    res.status(201).json({ message: "Profile created successfully!", user });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists." });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
