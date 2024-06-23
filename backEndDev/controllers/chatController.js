import Chat from '../models/Chat.js';

export const saveChat = async (req, res) => {
  const { userId, question, response } = req.body;

  const chat = new Chat({
    user: userId,
    question,
    response,
  });

  await chat.save();

  res.status(201).json(chat);
};

export const getChats = async (req, res) => {
  const chats = await Chat.find().populate('user', 'username');
  res.json(chats);
};
