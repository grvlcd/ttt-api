import mongoose from "mongoose";

const HistorySchema = mongoose.Schema(
  {
    player1: {
      type: String,
      required: true,
    },
    player2: {
      type: String,
      required: true,
    },
    wins: [
      {
        player: {
          type: String,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
    ],
    losses: [
      {
        player: {
          type: String,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
    ],
    draws: [
      {
        player: {
          type: String,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const History = mongoose.model("History", HistorySchema);
