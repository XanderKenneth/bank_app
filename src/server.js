// import express from 'express';
// import users from './users.js'; // Adjust the path to match your directory structure

// const app = express();
// const port = 3500;

// app.get('/get-users', (req, res) => {
//     return res.json({
//         status: 'success',
//         message: 'These are the users',
//         data: users,
//     });
// });

// // Get single user
// app.get('/get-user/:id', (req, res) => {
//     const { id } = req.params;
//     const user = users.find((user) => user.id === parseInt(id));
//     if (!user) {
//         return res.status(404).json({
//             message: 'User not found',
//         });
//     }
//     return res.json({
//         message: 'This is a user',
//         data: user,
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
