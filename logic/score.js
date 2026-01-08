function calculateScore(user, repos) {
  let breakdown = {
    profile: 0,
    repos: 0,
    readme: 0,
    recentActivity: 0,
    legacyQuality: 0
  };

  /* =====================
     👤 Profile (max 10)
     ===================== */
  if (user.bio && user.bio.length > 20) breakdown.profile += 5;
  if (user.avatar_url) breakdown.profile += 5;

  /* =====================
     📦 Repository Count (max 20)
     ===================== */
  if (repos.length >= 12) breakdown.repos = 20;
  else if (repos.length >= 8) breakdown.repos = 15;
  else if (repos.length >= 5) breakdown.repos = 10;
  else if (repos.length >= 2) breakdown.repos = 5;
  else breakdown.repos = 0;

  /* =====================
     📝 Documentation (README / description) (max 15)
     ===================== */
  const documentedRepos = repos.filter(
    r => r.description && r.description.length > 30
  );

  if (documentedRepos.length >= 6) breakdown.readme = 15;
  else if (documentedRepos.length >= 3) breakdown.readme = 10;
  else if (documentedRepos.length >= 1) breakdown.readme = 5;
  else breakdown.readme = 0;

  /* =====================
     ⏳ Recent Activity (last 60 days) (max 25)
     ===================== */
  const activeRepos = repos.filter(r => {
    const days =
      (Date.now() - new Date(r.updated_at)) / (1000 * 60 * 60 * 24);
    return days <= 60;
  });

  if (activeRepos.length >= 10) breakdown.recentActivity = 25;
  else if (activeRepos.length >= 6) breakdown.recentActivity = 18;
  else if (activeRepos.length >= 3) breakdown.recentActivity = 10;
  else if (activeRepos.length >= 1) breakdown.recentActivity = 5;
  else breakdown.recentActivity = 0;

  /* =====================
     ⭐ Legacy / Impact (stars, forks) (max 30)
     ===================== */
  const popularRepos = repos.filter(
    r => r.stargazers_count >= 10 || r.forks_count >= 5
  );

  if (popularRepos.length >= 4) breakdown.legacyQuality = 30;
  else if (popularRepos.length >= 2) breakdown.legacyQuality = 20;
  else if (popularRepos.length >= 1) breakdown.legacyQuality = 10;
  else breakdown.legacyQuality = 0;

  /* =====================
     🔢 Total Score
     ===================== */
  let totalScore = Object.values(breakdown).reduce((a, b) => a + b, 0);

  /* =====================
     🚨 HARD PENALTIES (IMPORTANT)
     ===================== */

  // Very low effort profile should never cross 40
  if (
    repos.length < 3 &&
    activeRepos.length < 2 &&
    breakdown.readme === 0 &&
    totalScore > 35
  ) {
    totalScore = 35;
  }

  // No recent activity → strong penalty
  if (activeRepos.length === 0) {
    totalScore -= 15;
  }

  // Safety clamp
  if (totalScore < 0) totalScore = 0;
  if (totalScore > 100) totalScore = 100;

  return {
    totalScore,
    breakdown,
    recentActiveCount: activeRepos.length,
    legacyRepoCount: popularRepos.length
  };
}

module.exports = { calculateScore };
