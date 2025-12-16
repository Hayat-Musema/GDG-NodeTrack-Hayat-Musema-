import express from "express";

const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
  res.send(`
    <h1 style="color: green;">
      Welcome to the Home Page
    </h1>
  `);
});

app.get("/about", (req, res) => {
  res.send("This page gives information about our application.");
});

app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  res.json({
    id: studentId,
    department: department || "Not specified",
    status: "Active"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
