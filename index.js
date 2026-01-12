const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { calculateScore } = require("./logic/score");
const { getRoast } = require("./logic/roast");
const { generateAdvice } = require("./logic/advice");
const { generateTimelineAdvice } = require("./logic/timelineAdvice");
const { getInternshipReadiness } = require("./logic/readiness");
const { getMainWeakness } = require("./logic/weakness");



const app = express();
app.use(cors());
const PORT = 5000;

app.get("/analyze/:username", async (req, res) => {
  const username = req.params.username;



  try {
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);

   const result = calculateScore(userRes.data, repoRes.data);
const roast = getRoast(
  result.totalScore,
  result.recentActiveCount,
  result.legacyRepoCount
);
   const advice = generateAdvice(result.breakdown);

const timelineAdvice = generateTimelineAdvice(
  result.breakdown,
  roast.tone
);
 const readiness = getInternshipReadiness(result.totalScore);
    const weakness = getMainWeakness(result.breakdown);



res.json({
  username,
  score: result.totalScore,
  breakdown: result.breakdown,
  internshipReadiness: readiness,
  mainWeakness: weakness,
  tone: roast.tone,
  message: roast.message,
  advice: roast.advice,
  timelineAdvice: timelineAdvice
});
console.log("READINESS 👉", readiness);
console.log("WEAKNESS 👉", weakness);


  } catch (err) {
    res.status(404).json({ error: "GitHub user not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
