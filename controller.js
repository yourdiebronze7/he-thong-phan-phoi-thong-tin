const User = require('./models/User');

exports.getUserInfo = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};