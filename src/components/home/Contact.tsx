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
        <Card className={cn("flex flex-col justify-between col-start-1 col-end-2 row-start-3 row-end-5 overflow-hidden", className)} {...props}>
            <CardTitle>
                Let's start working together!
            </CardTitle>
            <CardContent className={cn("p-0")}>
                <CardTitle className={cn("text-opacity italic")}>
                    Contact Details
                </CardTitle>
                <a 
                    href="mailto:amanjotsingh2309@gmail.com"
                    className="font-Satoshi overflow-hidden"
                >
                    amanjotsingh2309@gmail.com
                </a>
            </CardContent>
            <CardContent className={cn("p-0")}>
                <CardTitle className={cn("text-opacity italic")}>
                    Socials
                </CardTitle>
                <div className="flex flex-col font-Satoshi">
                    <a href="https://github.com/Amanjot-001" target="_blank">&#10153;github.com/Amanjot-001</a>
                    <a href="https://www.linkedin.com/in/amanjot-singh-2298a6232/" target="_blank">&#10153;linkedin.com/in/amanjot-singh</a>
                    <a href="https://x.com/Amanjotsingh001?t=Y8pBfV71mb4zfZ_i-MoxgQ&s=09" target="_blank">&#10153;twitter.com/Amanjotsingh001</a>
                    <a href="https://leetcode.com/Amanjot_001/" target="_blank">&#10153;leetcode.com/Amanjot_001</a>
                </div>
            </CardContent>
        </Card>
    )
}

export default Contact;
