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
        <Card className={cn("flex flex-col justify-between col-start-2 col-end-3 row-start-3 row-end-4", className)} {...props}>
            <CardTitle>
                Time zone
            </CardTitle>
            <div className="font-Satoshi font-bold text-2xl">
                {formattedTime} <br />
                IST
            </div>
        </Card>
    )
}

export default Timezone;
