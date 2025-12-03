export function searchProject(message, projects) {
  const words = message.toLowerCase().split(" ");

  return projects.find(project =>
    words.some(word =>
      project.name.toLowerCase().includes(word) ||
      project.tech.join(" ").toLowerCase().includes(word)
    )
  );
}
