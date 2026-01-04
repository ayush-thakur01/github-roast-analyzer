function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRoast(score) {

    // 🟣 Legacy but inactive
if (score >= 70 && recentActive < 2 && legacyCount >= 2) {
  return {
    tone: "legacy_inactive",
    message: getRandom([
      "Yeh GitHub clearly batata hai ki tu pehle kaafi strong tha 🔥 Bas thoda break aa gaya.",
      "Strong profile hai, lagta hai life thodi beech me aa gayi. Wapas aaye toh shine karega.",
      "Legacy solid hai bhai, bas consistency missing hai."
    ]),
    advice: [
      "1 old project revive kar",
      "Next 14 din daily small commits",
      "README + docs polish kar"
    ]
  };
}


  // 🔴 0–30 : SAVAGE
  if (score <= 30) {
    return {
      tone: "savage",
      message: getRandom([
        "Sach bolun? Yeh GitHub dekh ke lagta hai account bas username book karne ke liye banaya hai 😭",
        "GitHub hai bhai, Google Drive nahi. Thoda kaam bhi dikha de.",
        "Agar recruiter yeh GitHub dekhe, toh bina scroll kiye band kar dega."
      ]),
      advice: [
        "1 simple project bana (7 days)",
        "Har repo me README add kar",
        "Roz ek chhota commit kar (no zero days)"
      ]
    };
  }

  // 🟠 31–50 : FRIENDLY REALITY
  if (score <= 50) {
    return {
      tone: "friendly_reality",
      message: getRandom([
        "Effort thoda dikhta hai, par consistency missing hai bhai.",
        "GitHub zinda hai, par ICU me hai 😄",
        "Basics theek hain, par profile abhi strong nahi lagti."
      ]),
      advice: [
        "2 beginner–level real projects bana",
        "Old repos clean kar",
        "15 din daily commit kar"
      ]
    };
  }

  // 🟢 51–75 : MOTIVATIONAL
  if (score <= 75) {
    return {
      tone: "motivational",
      message: getRandom([
        "Theek jaa raha hai bhai 👍 bas thoda push chahiye.",
        "Effort dikh raha hai, ab isko polish karna hai.",
        "GitHub dead nahi hai, bas consistency chahiye."
      ]),
      advice: [
        "1 strong project add kar",
        "README ko professional bana",
        "Commits ko regular rakho"
      ]
    };
  }

  // 🔵 76–100 : PRAISE + PUSH
  return {
    tone: "praise_push",
    message: getRandom([
      "Solid GitHub 🔥 Recruiter yahan ruk ke dekhega.",
      "Profile strong hai bhai, bas thoda aur shine chahiye.",
      "Yeh GitHub job-ready lag raha hai."
    ]),
    advice: [
      "Open-source contribution start kar",
      "Project documentation improve kar",
      "Issues + PRs pe active reh"
    ]
  };
}

module.exports = { getRoast };
