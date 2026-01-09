function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateTimelineAdvice(breakdown, tone) {
  let timeline = {
    "7_days": [],
    "14_days": [],
    "30_days": []
  };

  // 🔴 Very weak profile
  if (tone === "savage") {
    timeline["7_days"].push(
      getRandom([
        "Complete your GitHub profile with a clear bio and profile picture",
        "Update your profile so visitors understand what kind of developer you are"
      ]),
      getRandom([
        "Start building one simple beginner-level project",
        "Create a small but complete project instead of unfinished experiments"
      ])
    );

    timeline["14_days"].push(
      getRandom([
        "Begin making small daily commits to build consistency",
        "Follow the no-zero-days rule to rebuild activity"
      ]),
      getRandom([
        "Learn how to write basic README files for your projects",
        "Add simple documentation explaining what each project does"
      ])
    );

    timeline["30_days"].push(
      getRandom([
        "Complete at least two simple but finished projects",
        "Focus on completing projects rather than starting new ones"
      ]),
      getRandom([
        "Organize repositories and remove unused or empty ones",
        "Clean up your profile to remove low-quality or abandoned repos"
      ])
    );
  }

  // 🟠 Friendly reality check
  if (tone === "friendly_reality") {
    timeline["7_days"].push(
      getRandom([
        "Finish one incomplete or partially done project",
        "Pick one half-built project and bring it to completion"
      ]),
      getRandom([
        "Archive or delete low-quality or unused repositories",
        "Reduce clutter by hiding experimental or outdated repos"
      ])
    );

    timeline["14_days"].push(
      getRandom([
        "Maintain daily commits to improve activity consistency",
        "Show steady progress through regular contributions"
      ]),
      getRandom([
        "Improve README files with proper descriptions and setup steps",
        "Rewrite documentation so others can understand your projects easily"
      ])
    );

    timeline["30_days"].push(
      getRandom([
        "Add two well-structured beginner-to-intermediate projects",
        "Publish projects that clearly demonstrate your core skills"
      ]),
      getRandom([
        "Clearly showcase your tech stack across repositories",
        "Make it obvious which technologies you are comfortable with"
      ])
    );
  }

  // 🟢 Motivational
  if (tone === "motivational") {
    timeline["7_days"].push(
      getRandom([
        "Start improving one strong project instead of creating many new ones",
        "Select one good project and focus on polishing it"
      ]),
      getRandom([
        "Make project documentation more professional and clear",
        "Improve README quality to match your coding effort"
      ])
    );

    timeline["14_days"].push(
      getRandom([
        "Refactor code and improve project structure",
        "Clean up code to improve readability and maintainability"
      ]),
      getRandom([
        "Keep commit activity consistent and meaningful",
        "Avoid long gaps in activity by committing regularly"
      ])
    );

    timeline["30_days"].push(
      getRandom([
        "Deploy a project or prepare a working demo",
        "Host a project so others can try it live"
      ]),
      getRandom([
        "Make your profile recruiter-ready with polished repositories",
        "Ensure your best work is clearly visible on your profile"
      ])
    );
  }

  // 🔵 Praise + push
  if (tone === "praise_push") {
    timeline["7_days"].push(
      getRandom([
        "Apply small improvements or bug fixes across existing projects",
        "Polish minor details to improve overall project quality"
      ])
    );

    timeline["14_days"].push(
      getRandom([
        "Start contributing to open-source repositories",
        "Look for beginner-friendly issues in open-source projects"
      ]),
      getRandom([
        "Engage with issues or discussions in the developer community",
        "Participate in discussions to show collaboration skills"
      ])
    );

    timeline["30_days"].push(
      getRandom([
        "Work on advanced or collaborative projects",
        "Build projects that involve multiple components or contributors"
      ]),
      getRandom([
        "Submit pull requests and improve public project impact",
        "Increase visibility through meaningful open-source contributions"
      ])
    );
  }

  // 🟣 Legacy but inactive
  if (tone === "legacy_inactive") {
    timeline["7_days"].push(
      getRandom([
        "Revive one strong older project with minor updates or fixes",
        "Revisit a past project and modernize it slightly"
      ])
    );

    timeline["14_days"].push(
      getRandom([
        "Restart consistent commit activity",
        "Rebuild consistency with small but regular updates"
      ]),
      getRandom([
        "Polish documentation to match your past project quality",
        "Update README files to reflect current standards"
      ])
    );

    timeline["30_days"].push(
      getRandom([
        "Make at least one revived project production-ready",
        "Prepare one older project for real-world use"
      ]),
      getRandom([
        "Show active maintenance and long-term ownership",
        "Demonstrate that you can maintain projects over time"
      ])
    );
  }

  // 🛡️ Fallback (never allow empty timeline)
  if (
    timeline["7_days"].length === 0 &&
    timeline["14_days"].length === 0 &&
    timeline["30_days"].length === 0
  ) {
    timeline["7_days"].push(
      "Review your GitHub profile and identify the weakest areas"
    );
    timeline["14_days"].push(
      "Work on consistency and improve documentation across projects"
    );
    timeline["30_days"].push(
      "Build or polish at least one complete, well-documented project"
    );
  }

  return timeline;
}

module.exports = { generateTimelineAdvice };
