import projects from "@/data/projects.json";
import faq from "@/data/faq.json";
import about from "@/data/about.json";
import { searchProject } from "./searchProject";

export async function processMessage(message) {
  const text = message.toLowerCase();

  // 1. FAQ simple
  for (const item of faq) {
    if (text.includes(item.q.toLowerCase())) {
      return item.a;
    }
  }

  // HELP 
    if (text.includes("aide") || text.includes("help")) {
    return "Voici toutes les questions que vous pouvez me poser :\n\n" +
      faq.map(item => `- ${item.q}`).join("\n") +
      "\n\nVous pouvez aussi me demander des informations sur moi ou mes projets !";
  }

  // Bonjour / Salut
  if (text.includes("bonjour") || text.includes("salut")) {
    return "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
  }

  // 2. Infos perso
  if (text.includes("qui es") || text.includes("présente-toi")) {
    return `${about.name}, ${about.role}. ${about.bio}`;
  }

  // tech skills
  if (text.includes("compétences") || text.includes("skill") || text.includes("technologies")) {
    return `Je maîtrise les technologies suivantes : ${about.skills.join(", ")}.`;
  }

  // All projects
  if (text.includes("projets") || text.includes("réalisations")) {
    const projectList = projects.map(p => `**${p.name}**: ${p.description}`).join("\n\n");
    return `Voici quelques-uns de mes projets :\n\n${projectList}`;
  }

  // 3. Recherche de projet
  const project = searchProject(text, projects);
  if (project) {
    return `Voici **${project.name}** :\n${project.description}\n\n[Link](${project.github})`;
  }

  // 4. Default
  return "Je ne suis pas encore entraîné pour cette question, mais j'apprends vite ! 😊";
}
