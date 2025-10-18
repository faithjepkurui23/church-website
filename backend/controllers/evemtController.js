import EventRegistration from "../models/EventRegistration.js";

export const registerForSundayService = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    const registration = await EventRegistration.create({ name, email });
    res.status(201).json({ message: "Registration successful!", registration });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
