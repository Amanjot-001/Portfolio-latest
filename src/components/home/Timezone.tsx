import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Timezone = ({ className, ...props }: CardProps) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    });

    return (
        <Card className={cn("col-start-2 col-end-4 row-start-3 row-end-4 p-4", className)} {...props}>
            <CardTitle>
                Time zone
            </CardTitle>
            <CardDescription className={cn("p-0")}>
                {formattedTime} IST
            </CardDescription>
        </Card>
    )
}

export default Timezone;
