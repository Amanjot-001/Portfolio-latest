import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Contact = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("col-start-1 col-end-2 row-start-3 row-end-5 p-4", className)} {...props}>
            <CardTitle>
                welcome
            </CardTitle>
            <CardDescription>
                Hi, I'm Gianmarco Cavallo, a software developer with strong focus on the user experience, animations and micro interactions
            </CardDescription>
        </Card>
    )
}

export default Contact;
