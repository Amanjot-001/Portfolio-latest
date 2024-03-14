import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils";

const About = ({ className, ...props }: CardProps) => {
    return (
            <ScrollArea className="col-start-4 col-end-5 row-start-1 row-end-4 overflow-hidden">
            <Card className={cn("h-full", className)} {...props}>
                <CardTitle>
                    Skills
                </CardTitle>
                <div>
                    <div>
                        Programming Languages
                    </div>
                    <ul style={{ listStyleType: "disc" }} className="px-4">
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div>
                    <div>
                        Web Domains
                    </div>
                    <ul style={{ listStyleType: "disc" }} className="px-4">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>SQL</li>
                        <li>AWS</li>
                        <li>Docker</li>
                    </ul>
                </div>
                <div>
                    <div>
                        Other
                    </div>
                    <ul style={{ listStyleType: "disc" }} className="px-4">
                        <li>Git</li>
                        <li>Linux</li>
                        <li>DBMS</li>
                        <li>Operation Systems</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </Card>
        </ScrollArea>
    )
}

export default About;
