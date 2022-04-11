const express = require("express");
const router = express.Router();
const db = require("../database/db");

// getting all users
router.get("/", async (request, response) => {
    try {
        let users = await db.any ('SELECT * FROM  users');
        response.json({
            message: "retrieved all available users from database",
            payload: users,
            error: null
        });
    } catch (error) {
        console.log(error);
    }
});