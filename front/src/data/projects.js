import calderonThumb from "../assets/media/calderon-thumbnail.webp";
import cupncoThumb from "../assets/media/cupnco.webp";
import unlvThumb from "../assets/media/unlvchecker-2.webp";
import sonicThumb from "../assets/media/sonicai-sc.webp";
import professorBThumb from "../assets/media/pbdesc.webp";
import huntingpackThumb from "../assets/media/huntingpackThumb.webp";
import portfolio from "../assets/media/portfolio-sc.png";
import scholarchips from "../assets/media/scholarchips-sc.png";

const projects = [
  {
    id: "1",
    slug: "calderon-law-website",
    title: "Calderon Law Website",
    description:
      "Developed and maintained a professional React website for a local law firm.",
    detailed_description:
      "Developed and maintained a professional React website for a local law firm, integrating AWS Amplify for hosting, optimizing SEO, accessibility, and mobile responsiveness to enhance user experience. The site features a modern design with intuitive navigation, comprehensive service information, and an integrated contact form for client inquiries.",
    thumbnail: calderonThumb,
    images: [calderonThumb],
    technologies: ["React.js", "AWS", "HTML", "CSS"],
    website: "https://calderonlaw.com",
  },
  {
    id: "2",
    slug: "scholarchips",
    title: "ScholarChips",
    description:
      "My team's submission for Rebel Hacks 2026, UNLV's annual Hackathon.",
    detailed_description:
      "ScholarChips is a gamified attendance platform where students earn virtual \"chips\" for showing up to school, redeemable for prizes like food vouchers and merchandise. Teachers manage attendance through a simple dashboard, while leaderboards and minigames like a Prize Wheel keep students engaged and motivated to attend. This project was our team's submission for Rebel Hacks 2026, UNLV's annual Hackathon.",
    thumbnail: scholarchips,
    images: [scholarchips],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
    ],
    source: "https://github.com/ignacioparraparra/ScholarChips",
  },
  {
    id: "3",
    slug: "sonic-drive-thru-ai-assistant",
    title: "Sonic Drive-Thru - AI Assistant",
    description: "AI-powered drive-thru assistant prototype.",
    detailed_description:
      "AI-powered drive-thru assistant prototype that demonstrates conversational ordering workflows and automated responses using OpenAI. The assistant can understand natural language queries, make recommendations, and process orders with high accuracy. Includes video demonstration of real-world usage.",
    thumbnail: sonicThumb,
    images: [sonicThumb],
    technologies: ["OpenAI", "Node.js", "HTML", "CSS"],
    showcase: "https://www.youtube.com/watch?v=wvswuT8gdro",
    source: "https://github.com/rysuri/SonicMenu",
  },
  {
    id: "4",
    slug: "unlv-class-alert",
    title: "UNLV Class Alert",
    description:
      "Python application that checks UNLV class availability. Made using the official UNLV website.",
    detailed_description:
      "Serverless app that checks UNLV class availability and notifies students via SMS. Useful for grabbing open seats quickly. The application uses web scraping with Beautiful Soup to monitor class rosters, Selenium for browser automation, and sends instant SMS notifications when seats become available.",
    thumbnail: unlvThumb,
    images: [unlvThumb],
    technologies: ["Python", "Beautiful Soup", "Selenium"],
    showcase: "https://www.youtube.com/watch?v=fGZCPPwg4sg",
    source: "https://github.com/rysuri/unlvclasschecker",
  },
  {
    id: "5",
    slug: "cupncoshop-storefront",
    title: "CupnCoShop Storefront",
    description:
      "E-commerce storefront for premium coffee accessories and coffee.",
    detailed_description:
      "E-commerce storefront for premium coffee accessories. Theme customization, product configuration and ongoing maintenance on Shopify. The store features a modern design with optimized product pages, secure payment integration, and inventory management. Includes custom CSS styling and HTML modifications for enhanced user experience and conversion optimization.",
    thumbnail: cupncoThumb,
    images: [cupncoThumb],
    technologies: ["Shopify", "HTML", "CSS"],
    website: "https://cupncoshop.com",
  },
  {
    id: "6",
    slug: "professor-b-ai-discord-bot",
    title: "Professor B - AI Discord Bot",
    description:
      "An AI Discord bot that answers user questions in real time. The ultimate fact-checker.",
    detailed_description:
      "An AI Discord bot that answers user questions and provides context-aware replies in real time using OpenAI and Discord.py. The bot integrates seamlessly with Discord servers, maintains conversation context, and provides helpful responses across various topics. Join the community server to experience it live.",
    thumbnail: professorBThumb,
    images: [professorBThumb],
    technologies: ["Python", "OpenAI", "Discord.py"],
    website: "https://discord.com/invite/QZqghTe2k8",
  },
  {
    id: "7",
    slug: "hunting-pack-roblox-game",
    title: "HUNTING PACK - Roblox Game",
    description:
      "A bomb-rigged heavy truck racing to the deactivation zone versus the hunters.",
    detailed_description:
      'In "HUNTING PACK", A bomb-rigged heavy truck must stay in motion to survive. Hunters race to bring it down, while Protectors fight to keep it moving. This game features dynamic teamwork mechanics, intense gameplay, and custom 3D models created in Blender. The experience showcases advanced Lua scripting and game design principles.',
    thumbnail: huntingpackThumb,
    images: [huntingpackThumb],
    technologies: ["Roblox Studio", "Lua", "Blender", "Game Design"],
    website: "https://www.roblox.com/games/5206826689/HUNTING-PACK",
  },
  {
    id: "8",
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern portfolio website showcasing projects and skills.",
    detailed_description:
      "Modern portfolio website showcasing projects and skills. Built with React Router for navigation, GSAP for animations, and features a responsive design with contact form integration. The portfolio demonstrates advanced frontend development techniques including smooth animations, and SEO optimization. Hosted on AWS with continuous deployment.",
    thumbnail: portfolio,
    images: [portfolio],
    technologies: ["React.js", "Node.js", "GSAP", "MongoDB", "AWS"],
    website: "https://rysuri.com",
    source: "https://github.com/rysuri/rysuri-website",
  },
];

export default projects;
