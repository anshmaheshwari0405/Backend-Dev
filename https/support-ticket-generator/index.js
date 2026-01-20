const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/complain", (req, res) => {
  const { name, issue, priority } = req.body;

  const ticketId = "TKT-" + Math.floor(Math.random() * 1000000);

  const logData = `
Ticket ID: ${ticketId}
Name: ${name}
Issue: ${issue}
Priority: ${priority}
------------------------
`;

  if (priority === "high") {
    fs.appendFileSync("URGENT.txt", logData);
  } else {
    fs.appendFileSync("normal_complaints.txt", logData);
  }

  res.json({
    ticketId: ticketId,
    message: "We will solve your issue soon."
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
