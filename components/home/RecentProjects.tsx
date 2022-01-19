import Project from './Project'

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = () => {
  return (
    <div className="flex flex-col space-y-3 mb-16" id="projects">
      <Project
        link="https://github.com/Seifbarouni/go-create"
        title="go-create"
        description="A tool that helps me create my apps (console apps, back-end web apps, full-stack web apps)."
        stars={0}
        learned={[]}
      />
      <Project
        link="https://github.com/Seifbarouni/BraveBlog-frontend"
        title="Brave Blog"
        description="A blog built with React that has a simple livestream feature."
        stars={0}
        learned={['React', 'Typescript', 'PostgreSQL', 'Tailwind']}
      />
      <Project
        link="https://github.com/Seifbarouni/Project-Management-Web-App"
        title="Project Management Web App"
        description="A Spring Boot application that helps teams and individuals organize their projects. "
        stars={1}
        learned={['Java', 'Spring Boot', 'VanillaJS', 'PostreSQL', 'Thymeleaf']}
      />
      <Project
        link="https://github.com/Seifbarouni/Comm"
        title="Comm"
        description="A social media app inspired by Reddit."
        stars={0}
        learned={['Svelte', 'PostgreSQL', 'Tailwind']}
      />
      <Project
        link="https://github.com/Seifbarouni/svelte-covid19-tracker"
        title="Covid-19 Tracker"
        description="An app that displays news about covid-19 from covid19api.com."
        stars={0}
        learned={['Svelte', 'Tailwind']}
      />
    </div>
  )
}

export default RecentProjects
