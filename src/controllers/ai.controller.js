const openai = require("../config/openai");

exports.generateCompletion = async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.responses.create({
            model: "gpt-5",
            input: prompt,
        });

        res.json({
            success: true,
            data: response.output_text,
        });
    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err.message,
        });
    }
};