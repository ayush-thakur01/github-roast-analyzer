function calculateScore(user, repos) {
  let breakdown = {
    profile: 0,
    repos: 0,
    readme: 0,
    recentActivity: 0,
    legacyQuality: 0
  };

  // 👤 Profile
  if (user.bio) breakdown.profile += 5;
  if (user.avatar_url) breakdown.profile += 5;

  // 📦 Repo Count
  if (repos.length >= 5) breakdown.repos += 20;
  else if (repos.length >= 3) breakdown.repos += 10;

  // 📝 README / Description
  const documentedRepos = repos.filter(r => r.description);
  breakdown.readme = Math.min(documentedRepos.length * 5, 20);

  // ⏳ Recent Activity (last 60 days)
  const activeRepos = repos.filter(r => {
    const days =
      (Date.now() - new Date(r.updated_at)) / (1000 * 60 * 60 * 24);
    return days < 60;
  });
  breakdown.recentActivity = Math.min(activeRepos.length * 3, 10);

  // ⭐ Legacy Quality
  const popularRepos = repos.filter(
    r => r.stargazers_count >= 5 || r.forks_count >= 3
  );
  breakdown.legacyQuality = Math.min(popularRepos.length * 5, 10);

  const totalScore = Object.values(breakdown).reduce(
    (a, b) => a + b,
    0
  );

  return {
    totalScore: Math.min(totalScore, 100),
    breakdown,
    recentActiveCount: activeRepos.length,
    legacyRepoCount: popularRepos.length
  };
}

module.exports = { calculateScore };
