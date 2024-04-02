import { History } from "../models/history.model.js";

const saveHistory = async (req, res) => {
  try {
    const { player1, player2, wins, losses, draws } = req.body;

    const gameData = await History.create({
      player1,
      player2,
      wins,
      losses,
      draws,
    });
    res.json({
      message: "success",
      data: gameData,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

const getHistory = async (req, res) => {
  try {
    const gameDatas = await History.find();

    res.json({
      data: gameDatas,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

export { saveHistory, getHistory };
