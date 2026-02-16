// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(express.json());

// app.post("/complain", (req, res) => {
//   const { name, issue, priority } = req.body;

//   // 1. Generate Ticket ID
//   const ticketId = "TKT-" + Math.floor(Math.random() * 100000);

//   const complaintData = `
// Ticket ID: ${ticketId}
// Name: ${name}
// Issue: ${issue}
// Priority: ${priority}
// ------------------------
// `;

//   // 2. Decide file based on priority
//   if (priority === "high") {
//     fs.appendFileSync("URGENT.txt", complaintData);
//   } else {
//     fs.appendFileSync("normal_complaints.txt", complaintData);
//   }

//   // 3. Send response
//   res.json({
//     ticketId: ticketId,
//     message: "We will solve your issue soon."
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


