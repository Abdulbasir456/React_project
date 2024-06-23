
/*import fetch from 'node-fetch';

export const askQuestion = async (req, res) => {
    const { question } = req.body;

    // Mock AI response for demonstration
    const aiResponse = `This is a mocked response for the question: ${question}`;

    res.json({ response: aiResponse });
};
*/
export const askQuestion = async (req, res) => {
    const { question } = req.body;
  
    // Mock AI response for demonstration
    const aiResponse = `This is a mocked response for the question: ${question}`;
  
    res.json({ response: aiResponse });
  };
  