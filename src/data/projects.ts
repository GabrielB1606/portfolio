export interface ProjectType {
  name: string
  description: string
  image: string
  codeUrl?: string
  demoUrl?: string
  tools: string[]
}

export const projectsList: ProjectType[] = [
  {
    name: 'Wordle game',
    description:
      'Unravel word puzzles in 6 tries!\nTest your vocab skills and conquer the challenge. Addictive and fun!',
    image: 'wordle.webp',
    codeUrl: 'https://github.com/noel-lopez/react-wordle',
    demoUrl: 'https://noel-wordle.vercel.app',
    tools: ['JSX', 'React', 'CSS', 'Vercel']
  },
  {
    name: 'Dev Blog',
    description: 'My personal blog where I share some of my coding knowledge and experience.',
    image: 'devBlog.webp',
    codeUrl: 'https://github.com/noel-lopez/blog',
    demoUrl: 'https://nlpz-blog.vercel.app',
    tools: ['Typescript', 'NextJS', 'Tailwind CSS', 'MDX']
  },
  {
    name: 'Art Gallery',
    description:
      'Art portfolio website that I built for my girlfriend.\nA place to showcase her art and connect with her audience.',
    image: 'artPortfolio.webp',
    codeUrl: 'https://github.com/noel-lopez/art-portfolio',
    demoUrl: 'https://arumxchan-portfolio.vercel.app',
    tools: ['Typescript', 'NextJS', 'Tailwind CSS']
  },
  {
    name: 'Code Toolkit @nlpz',
    description:
      'My own code utilities and two React libraries. Published on NPM and available for use.\nEmpowering developers to build faster and better!',
    image: 'npmLibraries.webp',
    codeUrl: 'https://github.com/noel-lopez/nlpz',
    tools: ['Typescript', 'React', 'NPM', 'Turborepo']
  }
]
