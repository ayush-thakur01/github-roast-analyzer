function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRoast(score, recentActive = 0, legacyCount = 0) {

  //  Legacy but inactive (strong past, weak present)
  if (score >= 70 && recentActive < 2 && legacyCount >= 2) {
    return {
      tone: "legacy_inactive",
      message: getRandom([
        "This profile shows strong past work, but recent activity is missing. It looks like you paused at your peak.",
        "You clearly built solid projects earlier, but consistency has dropped recently. A comeback would make this profile shine.",
        "There’s real experience here — it just needs to be revived with fresh activity."
      ]),
      advice: [
        "Revive one strong older project with small improvements",
        "Resume consistent commits over the next two weeks",
        "Polish documentation to match the quality of past work"
      ]
    };
  }

  //  0–30 : Very weak / savage honesty
  if (score <= 30) {
    return {
      tone: "savage",
      message: getRandom([
        "This GitHub profile feels empty and inactive, which may raise concerns for recruiters.",
        "There is very little visible work here — it does not currently reflect your potential as a developer.",
        "At the moment, this profile lacks the basic signals recruiters look for."
      ]),
      advice: [
        "Build and publish at least one simple project within a week",
        "Add README files explaining what each repository does",
        "Start making small daily commits to show consistency"
      ]
    };
  }

  //  31–50 : Friendly reality check
  if (score <= 50) {
    return {
      tone: "friendly_reality",
      message: getRandom([
        "Some effort is visible, but the profile still feels incomplete.",
        "You have started, but consistency and depth are missing.",
        "This profile shows learning in progress, not yet confidence."
      ]),
      advice: [
        "Add two beginner-friendly but complete projects",
        "Clean up unused or low-quality repositories",
        "Maintain daily commits for at least 15 days"
      ]
    };
  }

  //  51–75 : Motivational push
  if (score <= 75) {
    return {
      tone: "motivational",
      message: getRandom([
        "This is a decent GitHub profile with room for polishing.",
        "Your effort is visible — a bit more consistency can make a big difference.",
        "You are on the right track; focus on refinement and regular activity."
      ]),
      advice: [
        "Add one strong, well-structured project",
        "Make README files more professional and detailed",
        "Keep your commit history consistent"
      ]
    };
  }

  //  76–100 : Praise + push
  return {
    tone: "praise_push",
    message: getRandom([
      "This is a strong GitHub profile that stands out positively.",
      "Your profile reflects real effort and solid development work.",
      "Recruiters are likely to take this profile seriously."
    ]),
    advice: [
      "Start contributing to open-source projects",
      "Improve documentation and project presentation further",
      "Stay active through issues, pull requests, and collaborations"
    ]
  };
}

module.exports = { getRoast };
