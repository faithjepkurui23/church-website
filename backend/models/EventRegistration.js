import mongoose from "mongoose";

const eventRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const EventRegistration = mongoose.model("EventRegistration", eventRegistrationSchema);

export default EventRegistration;
