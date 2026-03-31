export const CATEGORIES = [
  'All', 'AI Writing', 'AI Design', 'AI Coding', 'AI Marketing',
  'AI Video', 'AI Productivity', 'AI Agents'
]

export const tools = [
  // AI Writing
  {
    id: 1, name: 'ChatGPT', category: 'AI Writing',
    description: 'The world\'s leading conversational AI. Generate content, answer questions, write code, and more.',
    logo: '🤖', pricing: 'Freemium', trending: true, featured: true,
    url: 'https://chat.openai.com', tags: ['Chat', 'Writing', 'Code'],
  },
  {
    id: 2, name: 'Jasper AI', category: 'AI Writing',
    description: 'Professional AI writing assistant for marketers and content teams. 50+ templates included.',
    logo: '✍️', pricing: 'Paid', trending: false, featured: false,
    url: 'https://jasper.ai', tags: ['Marketing', 'Content', 'Copywriting'],
  },
  {
    id: 3, name: 'Copy.ai', category: 'AI Writing',
    description: 'Craft compelling copy for ads, blogs, social media, and sales pages in seconds.',
    logo: '📝', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://copy.ai', tags: ['Copywriting', 'Marketing'],
  },
  {
    id: 4, name: 'Notion AI', category: 'AI Writing',
    description: 'AI built right into your workspace. Summarize, brainstorm, and write better inside Notion.',
    logo: '📄', pricing: 'Paid', trending: true, featured: false,
    url: 'https://notion.so', tags: ['Workspace', 'Notes', 'Writing'],
  },
  {
    id: 5, name: 'Grammarly', category: 'AI Writing',
    description: 'Real-time writing suggestions, grammar checks, and tone adjustments across every platform.',
    logo: '🟢', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://grammarly.com', tags: ['Grammar', 'Writing', 'Polish'],
  },
  // AI Design
  {
    id: 6, name: 'Midjourney', category: 'AI Design',
    description: 'Create stunning AI-generated artwork and photorealistic images from text prompts.',
    logo: '🎨', pricing: 'Paid', trending: true, featured: true,
    url: 'https://midjourney.com', tags: ['Image Gen', 'Art', 'Design'],
  },
  {
    id: 7, name: 'Canva AI', category: 'AI Design',
    description: 'Design anything with AI-powered tools — presentations, social media, flyers, and more.',
    logo: '🖌️', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://canva.com', tags: ['Design', 'Graphics', 'Templates'],
  },
  {
    id: 8, name: 'Adobe Firefly', category: 'AI Design',
    description: 'Adobe\'s generative AI model for creating images, text effects, and design variations.',
    logo: '🔥', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://firefly.adobe.com', tags: ['Adobe', 'Image Gen', 'Creative Cloud'],
  },
  {
    id: 9, name: 'DALL·E 3', category: 'AI Design',
    description: 'OpenAI\'s most capable image generation model. Integrated into ChatGPT and the API.',
    logo: '🖼️', pricing: 'Paid', trending: false, featured: false,
    url: 'https://openai.com/dall-e-3', tags: ['Image Gen', 'OpenAI'],
  },
  {
    id: 10, name: 'Figma AI', category: 'AI Design',
    description: 'AI-powered features inside Figma for generating designs, auto-layouts, and prototypes.',
    logo: '🎭', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://figma.com', tags: ['Design', 'Prototype', 'UI/UX'],
  },
  // AI Coding
  {
    id: 11, name: 'GitHub Copilot', category: 'AI Coding',
    description: 'Your AI pair programmer. Get suggestions for entire functions in any language, in your editor.',
    logo: '🐙', pricing: 'Paid', trending: true, featured: true,
    url: 'https://github.com/features/copilot', tags: ['Code', 'IDE', 'GitHub'],
  },
  {
    id: 12, name: 'Cursor', category: 'AI Coding',
    description: 'The AI-first code editor. Built on VS Code with deeply integrated AI for writing and refactoring.',
    logo: '⚡', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://cursor.sh', tags: ['Editor', 'Code', 'VSCode'],
  },
  {
    id: 13, name: 'Replit AI', category: 'AI Coding',
    description: 'Code, collaborate, and deploy from anywhere. AI-powered coding in the browser.',
    logo: '🔧', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://replit.com', tags: ['Code', 'Cloud', 'Collaboration'],
  },
  {
    id: 14, name: 'Tabnine', category: 'AI Coding',
    description: 'AI code completions that learn your codebase. Supports all major languages and IDEs.',
    logo: '💡', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://tabnine.com', tags: ['Autocomplete', 'Code', 'IDE'],
  },
  // AI Marketing
  {
    id: 15, name: 'HubSpot AI', category: 'AI Marketing',
    description: 'AI-powered CRM, email marketing, and content generation for growth teams.',
    logo: '🎯', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://hubspot.com', tags: ['CRM', 'Email', 'Marketing'],
  },
  {
    id: 16, name: 'Surfer SEO', category: 'AI Marketing',
    description: 'Audit, research, write, and optimize content for top Google rankings with AI.',
    logo: '🏄', pricing: 'Paid', trending: true, featured: false,
    url: 'https://surferseo.com', tags: ['SEO', 'Content', 'Ranking'],
  },
  {
    id: 17, name: 'AdCreative.ai', category: 'AI Marketing',
    description: 'Generate conversion-focused ad creatives at scale using AI. 10x your ad performance.',
    logo: '📣', pricing: 'Paid', trending: false, featured: false,
    url: 'https://adcreative.ai', tags: ['Ads', 'Creatives', 'Conversion'],
  },
  // AI Video
  {
    id: 18, name: 'Runway Gen-3', category: 'AI Video',
    description: 'Generate and edit videos with AI. Text-to-video, image-to-video, and video-to-video.',
    logo: '🎬', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://runwayml.com', tags: ['Video Gen', 'Editing', 'Creative'],
  },
  {
    id: 19, name: 'Sora', category: 'AI Video',
    description: 'OpenAI\'s revolutionary text-to-video model. Create cinematic videos from text descriptions.',
    logo: '🎥', pricing: 'Paid', trending: true, featured: false,
    url: 'https://openai.com/sora', tags: ['Text-to-Video', 'OpenAI', 'Cinematic'],
  },
  {
    id: 20, name: 'Synthesia', category: 'AI Video',
    description: 'Create professional AI videos with avatars. No camera, cast, or studio needed.',
    logo: '🧑‍💻', pricing: 'Paid', trending: false, featured: false,
    url: 'https://synthesia.io', tags: ['Avatar', 'Training', 'Corporate'],
  },
  // AI Productivity
  {
    id: 21, name: 'Perplexity AI', category: 'AI Productivity',
    description: 'AI-powered search that answers questions with sources. Better than Google for research.',
    logo: '🔍', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://perplexity.ai', tags: ['Search', 'Research', 'Q&A'],
  },
  {
    id: 22, name: 'Claude', category: 'AI Productivity',
    description: 'Anthropic\'s safe and helpful AI assistant. Excellent for long documents and nuanced reasoning.',
    logo: '🧠', pricing: 'Freemium', trending: true, featured: false,
    url: 'https://claude.ai', tags: ['Chat', 'Analysis', 'Writing'],
  },
  {
    id: 23, name: 'Otter.ai', category: 'AI Productivity',
    description: 'Transcribe meetings, interviews, and lectures in real-time with AI accuracy.',
    logo: '🦦', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://otter.ai', tags: ['Transcription', 'Meetings', 'Notes'],
  },
  {
    id: 24, name: 'Motion', category: 'AI Productivity',
    description: 'AI that auto-schedules your tasks and calendar so you always work on what matters.',
    logo: '📅', pricing: 'Paid', trending: false, featured: false,
    url: 'https://usemotion.com', tags: ['Scheduling', 'Tasks', 'Calendar'],
  },
  // AI Agents
  {
    id: 25, name: 'AutoGPT', category: 'AI Agents',
    description: 'An autonomous AI agent that can browse the web, write code, and complete complex tasks.',
    logo: '🤖', pricing: 'Free', trending: true, featured: false,
    url: 'https://agpt.co', tags: ['Autonomous', 'Agent', 'Open Source'],
  },
  {
    id: 26, name: 'LangChain', category: 'AI Agents',
    description: 'Build LLM-powered applications and agents with memory, tools, and composable chains.',
    logo: '⛓️', pricing: 'Free', trending: true, featured: false,
    url: 'https://langchain.com', tags: ['Framework', 'LLM', 'Open Source'],
  },
  {
    id: 27, name: 'CrewAI', category: 'AI Agents',
    description: 'Framework for orchestrating role-playing autonomous AI agents to solve complex problems.',
    logo: '👥', pricing: 'Free', trending: true, featured: false,
    url: 'https://crewai.com', tags: ['Multi-Agent', 'Orchestration', 'Open Source'],
  },
  {
    id: 28, name: 'Zapier AI', category: 'AI Agents',
    description: 'Connect 6000+ apps and automate workflows with AI agents that act on your behalf.',
    logo: '⚡', pricing: 'Freemium', trending: false, featured: false,
    url: 'https://zapier.com', tags: ['Automation', 'Workflows', 'No-Code'],
  },
]

export const featuredTools = tools.filter(t => t.featured)
export const trendingTools = tools.filter(t => t.trending).slice(0, 8)
