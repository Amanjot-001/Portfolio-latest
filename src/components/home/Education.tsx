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
                Education
            </CardTitle>
            <div>
                <div>
                    2021 - 2025
                </div>
                <div>
                    Computer Science Engineering
                </div>
            </div>
        </Card>
    )
}

export default Education;
