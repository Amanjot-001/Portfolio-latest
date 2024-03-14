import { Main, About, Contact, Timezone, ProjectsSlider, Education } from "@/components/home";

const Home = () => {
    return (
        <div className="min-h-screen grid grid-cols-4 grid-rows-4 gap-4 py-8 px-48">
            <Main />
            <About />
            <Contact />
            <Timezone />
            <ProjectsSlider />
            <Education />
        </div>
    )
}

export default Home;
