const mongoose = require('mongoose');
const User = require('../models/User');

// ✅ Fetch user by ID, ensuring age > 21
const getUserById = async (req, res) => {
    const { id } = req.params;

    // Validate incoming ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID format" });
    }

    try {
        console.log("Fetching user with ID:", id);

        // ✅ Query to find user with matching ID and age > 21
        const user = await User.findOne({ _id: id, age: { $gt: 21 } });

        // If no user is found, return a 404 response

        console.log(res)
        if (!user) {
            return res.status(404).json({ error: "User not found or does not meet age criteria" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getUserById };  