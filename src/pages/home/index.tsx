import BasicLayout from "@/layouts/BasicLayout";
import { Main, About, Contact, Timezone, ProjectsSlider, Education } from "@/components/home";
import { Experience } from "@/components/home";

const Home = () => {
    return (
        <BasicLayout>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 h-full max-w-6xl">
                <Main />
                <About />
                <Contact />
                <Timezone />
                <ProjectsSlider />
                <Education />
                <Experience />
            </div>
        </BasicLayout>
    )
}

export default Home;
