import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const About = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("col-start-4 col-end-5 row-start-1 row-end-4 p-4", className)} {...props}>
            <CardTitle>
                welcome
            </CardTitle>
            <CardDescription>
                Hi, I'm Gianmarco Cavallo, a software developer with strong focus on the user experience, animations and micro interactions
            </CardDescription>
        </Card>
    )
}

export default About;
