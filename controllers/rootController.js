let root = (req, res) => {
    res.status(200).json({ msg: "Welcome to API of Control of Family Expenses" })
};

module.exports = { root };