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
        <Card className={cn("flex col-start-1 col-end-4 row-start-1 row-end-3", className)} {...props}>
            <div className="w-2/3">
                <CardTitle className="p-0 opacity-20 font-normal text-sm font-Satoshi">
                    welcome
                </CardTitle>
                <CardContent className="p-0 text-lg font-Satoshi">
                    Hi, I'm Amanjot Singh, a fullstack software developer from India. <br />
                    From interactive designs to scaleable backend systems, single-page applications to something more experimental. I build ambitious yet accessible web projects - the wilder, the better.
                </CardContent>
            </div>
            <div className="w-1/3 h-full">
                <img className="object-cover object-center h-full w-full" src="/src/assets/images/profile.jpg" alt="" />
            </div>
        </Card>
    )
}

export default Main;
