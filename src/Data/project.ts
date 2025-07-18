export interface Project {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Cliven",
    description:
      "RAG-based CLI tool for chatting with PDFs using embeddings and llm.",
    live: "https://cliven.kreyon.in/",
    sourceCode: "https://github.com/krey-yon/Cliven",
  },
  {
    id: "2",
    name: "Eatopia",
    description: "A Zomato-like food ordering platform clone.",
    live: "https://eatopia.kreyon.in/",
    sourceCode: "https://github.com/krey-yon/Eatopia",
  },
  {
    id: "3",
    name: "DevLink Bot",
    description:
      "A utility bot which help in many managing community like sending scrapped job from wellfound and creating workflow diagram of any codebase publicaly availble on github and more features(Join my server to test it)",
    live: "https://discord.gg/PGgpcXdqdw",
    sourceCode: "https://github.com/krey-yon",
  },
  {
    id: "4",
    name: "100xRPC",
    description:
      "Show your 100xDevs learning progress on Discord automatically! This Chrome extension displays your current course activity as Discord Rich Presence.",
    live: "https://github.com/krey-yon/100xRPC",
    sourceCode: "https://github.com/krey-yon/100xRPC",
  },
  {
    id: "5",
    name: "Memeverse",
    description: "A meme-only social media platform built end-to-end.",
    live: "https://memeverse.kreyon.in/",
    sourceCode: "https://github.com/krey-yon/Memeverse",
  },
  {
    id: "6",
    name: "LetterGen",
    description:
      "An AI-powered cover letter generator to help you land your dream job.",
    live: "https://lettergen.kreyon.in/",
    sourceCode: "https://github.com/krey-yon/LetterGen",
  },
  {
    id: "7",
    name: "T3Arena",
    description:
      "A real-time online Tic Tac Toe game — play with people around the world.",
    live: "https://t3arena.kreyon.in/",
    sourceCode: "https://github.com/krey-yon/T3Arena",
  },
  {
    id: "8",
    name: "Passport Photo Compliance Checker",
    description:
      "Checks passport photos for compliance with official guidelines using Face API.",
    live: "https://passport-photo-compliance-checker.vercel.app/",
    sourceCode: "https://github.com/krey-yon/Passport-Photo-Compliance-Checker",
  },
  {
    id: "9",
    name: "Eatopia Mobile Apk (React Native)",
    description:
      "Android application for eatopia a food delivery application.",
    live: "https://github.com/krey-yon/Eatopia_Mobile_App/releases/tag/Apk",
    sourceCode: "https://github.com/krey-yon/Eatopia_Mobile_App",
  },
];
