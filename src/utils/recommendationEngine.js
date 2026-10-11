export default function recommendationEngine(answers, tools) {
  const selectedNeeds = (answers.accessibility || []).filter(
    (need) => !["No specific access support", "Not sure"].includes(need)
  );
  const selectedTasks = answers.tasks || [];
  const maxScore =
    selectedTasks.length * 4 +
    selectedNeeds.length * 3 +
    1; // preferred guidance level

  return tools
    .map((tool) => {
      let score = 0;
      const reasons = [];
      const gaps = [];

      selectedTasks.forEach((task) => {
        if (tool.tasks.includes(task)) {
          score += 4;
          reasons.push(`Supports the goal: ${task}`);
        }
      });

      selectedNeeds.forEach((need) => {
        if (tool.accessibilityNeeds.includes(need)) {
          score += 3;
          reasons.push(`Lists ${need.toLowerCase()} among its potential access areas`);
        } else {
          gaps.push(`No listed match for ${need.toLowerCase()} access`);
        }
      });

      if (tool.difficulty === answers.experience) {
        score += 1;
        reasons.push(`Guide level aligns with your preference (${answers.experience.toLowerCase()})`);
      }

      const percentage = maxScore ? Math.round((score / maxScore) * 100) : 0;
      let rating = "Explore with support";
      if (percentage >= 75) rating = "Stronger starting point";
      else if (percentage >= 45) rating = "Worth exploring";

      return {
        ...tool,
        score,
        percentage,
        rating,
        reasons,
        gaps,
      };
    })
    .sort((a, b) => b.percentage - a.percentage || a.name.localeCompare(b.name));
}
