import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>

const Education = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("col-start-4 col-end-5 row-start-4 row-end-5", className)} {...props}>
            <CardTitle>
                welcome
            </CardTitle>
            <CardDescription>
                Hi, I'm Gianmarco Cavallo, a software developer with strong focus on the user experience, animations and micro interactions
            </CardDescription>
        </Card>
    )
}

export default Education;
