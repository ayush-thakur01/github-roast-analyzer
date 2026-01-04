function generateTimelineAdvice(breakdown, tone) {
  let timeline = {
    "7_days": [],
    "14_days": [],
    "30_days": []
  };

  // 🔴 Very weak / savage
  if (tone === "savage") {
    timeline["7_days"].push(
      "GitHub profile bio likh + profile picture set kar",
      "1 simple beginner project start kar"
    );
    timeline["14_days"].push(
      "Daily small commits start kar (no zero days)",
      "Basic README likhna seekh"
    );
    timeline["30_days"].push(
      "2 real projects complete kar",
      "GitHub profile clean aur organized bana"
    );
  }

  // 🟠 Friendly reality
  if (tone === "friendly_reality") {
    timeline["7_days"].push(
      "1 incomplete project finish kar",
      "Old useless repos delete ya archive kar"
    );
    timeline["14_days"].push(
      "Daily commits ki habit bana",
      "README improve kar"
    );
    timeline["30_days"].push(
      "2 decent projects add kar",
      "Tech stack clearly show kar"
    );
  }

  // 🟢 Motivational
  if (tone === "motivational") {
    timeline["7_days"].push(
      "1 strong project pe kaam start kar",
      "README ko professional bana"
    );
    timeline["14_days"].push(
      "Project polish + refactor",
      "Commits consistent rakho"
    );
    timeline["30_days"].push(
      "Project deploy ya demo ready kar",
      "Profile ko recruiter-ready bana"
    );
  }

  // 🔵 Praise + push
  if (tone === "praise_push") {
    timeline["7_days"].push(
      "Small improvements ya bug fixes"
    );
    timeline["14_days"].push(
      "Open-source contribution start kar"
    );
    timeline["30_days"].push(
      "Advanced projects ya PRs pe kaam kar"
    );
  }

  // 🟣 Legacy but inactive
  if (tone === "legacy_inactive") {
    timeline["7_days"].push(
      "1 old strong project revive kar"
    );
    timeline["14_days"].push(
      "Daily commits restart kar",
      "Docs polish kar"
    );
    timeline["30_days"].push(
      "Project ko production-ready bana"
    );
  }

  return timeline;
}

module.exports = { generateTimelineAdvice };
