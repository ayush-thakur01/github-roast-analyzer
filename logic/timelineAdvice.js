function generateTimelineAdvice(breakdown, tone) {
  let timeline = {
    "7_days": [],
    "14_days": [],
    "30_days": []
  };

  // 🔴 Very weak profile (savage)
  if (tone === "savage") {
    timeline["7_days"].push(
      "Complete your GitHub profile with a clear bio and profile picture",
      "Start building one simple beginner-level project"
    );

    timeline["14_days"].push(
      "Begin making small daily commits to build consistency",
      "Learn how to write basic README files for your projects"
    );

    timeline["30_days"].push(
      "Complete at least two simple but finished projects",
      "Organize repositories and remove unused or empty ones"
    );
  }

  // 🟠 Friendly reality check
  if (tone === "friendly_reality") {
    timeline["7_days"].push(
      "Finish one incomplete or partially done project",
      "Archive or delete low-quality or unused repositories"
    );

    timeline["14_days"].push(
      "Maintain daily commits to improve activity consistency",
      "Improve README files with proper descriptions and setup steps"
    );

    timeline["30_days"].push(
      "Add two well-structured beginner-to-intermediate projects",
      "Clearly showcase your tech stack across repositories"
    );
  }

  // 🟢 Motivational (decent profile)
  if (tone === "motivational") {
    timeline["7_days"].push(
      "Start improving one strong project instead of creating many new ones",
      "Make project documentation more professional and clear"
    );

    timeline["14_days"].push(
      "Refactor code and improve project structure",
      "Keep commit activity consistent and meaningful"
    );

    timeline["30_days"].push(
      "Deploy a project or prepare a working demo",
      "Make your profile recruiter-ready with polished repositories"
    );
  }

  // 🔵 Praise + push (strong profile)
  if (tone === "praise_push") {
    timeline["7_days"].push(
      "Apply small improvements or bug fixes across existing projects"
    );

    timeline["14_days"].push(
      "Start contributing to open-source repositories",
      "Engage with issues or discussions in the developer community"
    );

    timeline["30_days"].push(
      "Work on advanced or collaborative projects",
      "Submit pull requests and improve public project impact"
    );
  }

  // 🟣 Legacy but inactive
  if (tone === "legacy_inactive") {
    timeline["7_days"].push(
      "Revive one strong older project with minor updates or fixes"
    );

    timeline["14_days"].push(
      "Restart consistent commit activity",
      "Polish documentation to match your past project quality"
    );

    timeline["30_days"].push(
      "Make at least one revived project production-ready",
      "Show active maintenance and long-term ownership"
    );
  }

  return timeline;
}

module.exports = { generateTimelineAdvice };
