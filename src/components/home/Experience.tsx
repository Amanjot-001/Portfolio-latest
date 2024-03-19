import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Experience = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("col-start-3 col-end-4 row-start-3 row-end-4", className)} {...props}>
            <CardTitle>
                Experience
            </CardTitle>
        </Card>
    )
}

export default Experience;
