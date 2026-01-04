function generateAdvice(breakdown) {
  let advice = [];

  // 👤 Profile weak
  if (breakdown.profile < 6) {
    advice.push(
      "Profile bio + profile picture improve kar — first impression matters."
    );
  }

  // 📦 Repos kam
  if (breakdown.repos < 10) {
    advice.push(
      "At least 2–3 real projects add kar (tutorial copy nahi)."
    );
  }

  // 📝 Documentation weak
  if (breakdown.readme < 10) {
    advice.push(
      "README files improve kar — problem, tech stack aur setup likh."
    );
  }

  // ⏳ Inconsistent activity
  if (breakdown.recentActivity < 5) {
    advice.push(
      "Next 14 din daily ek small commit kar (no zero days rule)."
    );
  }

  // ⭐ Impact missing
  if (breakdown.legacyQuality < 5) {
    advice.push(
      "Project impact badhao — stars, forks, ya real-world use cases."
    );
  }

  // Safety net
  if (advice.length === 0) {
    advice.push(
      "Overall profile strong hai. Ab open-source ya advanced projects pe focus kar."
    );
  }

  return advice;
}

module.exports = { generateAdvice };
