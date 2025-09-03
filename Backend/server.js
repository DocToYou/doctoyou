/**
 * * This is the main server file and the lines are migrated to ./app.js file
 * ! use this file as the entry point not to write express codes
 */

// Create an Express application
const app= require("./app");
const PORT = process.env.PORT; // TODO : create a entry in .env file as -----> PORT=3000

// Start the server
app.listen(PORT, () => {
  console.log(`==============> Server is running on port ${PORT}`);
});