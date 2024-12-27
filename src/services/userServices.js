const { default: User } = require("@/models/User");
const { NextResponse } = require("next/server");
const { default: connect } = require("utils/db");

createUser = async (userData) => {
    try {
        await connect();
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Error creating user", { status: 500 });
    }
};

updateUser = async (userData) => {
    const { clerkId, firstName, lastName, photo, email, username } = userData;
    await connect();
    const existingUser = await User.findOne({ clerkId });
    if (!existingUser) {
        console.log("User not found for update");
        return NextResponse.json("Error: user not found", { status: 404 });
    }

    const updateData = {
        firstName: firstName ?? existingUser.firstName,
        lastName: lastName ?? existingUser.lastName,
        photo: photo ?? existingUser.photo,
        email: email ?? existingUser.email,
        username: username ?? existingUser.username,
    };

    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
        new: true,
    });
    return updatedUser;
};

deleteUser = async (clerkId) => {
    await connect();
    const deleteOneUser = await User.deleteOne({clerkId})
    return deleteOneUser;
};

module.exports = { createUser, updateUser, deleteUser };
