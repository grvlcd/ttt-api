import mongoose from "mongoose";

const HistorySchema = mongoose.Schema(
  {
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    wins: {
      type: Object,
      required: true,
      properties: {
        [String]: { type: Number, default: 0 },
      },
    },
    losses: {
      type: Object,
      required: true,
      properties: {
        [String]: { type: Number, default: 0 },
      },
    },
    draws: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const History = mongoose.model("History", HistorySchema);
