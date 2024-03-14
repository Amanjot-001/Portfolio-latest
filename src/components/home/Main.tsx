import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Main = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("col-start-1 col-end-4 row-start-1 row-end-3 p-4", className)} {...props}>
            <CardContent className="p-0">
                welcome
            </CardContent>
            <CardDescription>
                Hi, I'm Gianmarco Cavallo, a software developer with strong focus on the user experience, animations and micro interactions
            </CardDescription>
        </Card>
    )
}

export default Main;
