# GPT-Portfolio

Un portfolio interactif de développeur inspiré de ChatGPT.  
Posez une question à l'assistant pour découvrir mes projets, mes compétences et mon parcours. Le design est moderne, épuré et inspiré du style Apple, avec animations fluides et expérience utilisateur premium.

## 🔥 Fonctionnalités

- Chat interactif type ChatGPT pour découvrir les projets
- Affichage dynamique des messages avec Markdown
- Base de connaissances locale (`projects.json`, `faq.json`, `about.json`)
- Animation d'ouverture du chat et des bulles messages
- Mode responsive et design épuré inspiré d’Apple

## 💻 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

## 🚀 Installation

1. Cloner le repo :

```bash
git clone https://github.com/este0207/GPT-Portfolio.git
```
Installer les dépendances :

```bash
cd GPT-Portfolio
npm install
# ou
yarn
```
Lancer le projet :

```bash
npm run dev
# ou
yarn dev
``` 
Le portfolio sera accessible sur http://localhost:3000.
## Structure du projet
```bash
/app
  /api
    /chat/route.ts
  /components
    ChatBox.tsx
/data
  projects.json
  faq.json
  about.json
/lib
  processMessage.ts
  searchProject.ts
``` 
## Ajouter un projet
Pour ajouter un projet à votre portfolio, éditez data/projects.json :

```json
[
  {
    "id": "react-dashboard",
    "name": "React Analytics Dashboard",
    "tech": ["React", "Tailwind", "Recharts"],
    "description": "Un dashboard complet avec analytics en temps réel.",
    "github": "https://github.com/tonpseudo/dashboard",
    "image": "/projects/dashboard.png"
  }
]
```
## Personnalisation
Modifiez le design dans components/ChatBox.tsx pour ajuster les couleurs, animations et styles

Ajoutez des images de vos projets dans public/projects/

Complétez faq.json et about.json pour enrichir la base de connaissances
