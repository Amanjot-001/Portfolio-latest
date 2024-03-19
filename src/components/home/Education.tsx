import React from "react";
import Autoplay from "embla-carousel-autoplay"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>

const Education = ({ className, ...props }: CardProps) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Card className={cn("flex flex-col justify-between col-start-4 col-end-5 row-start-4 row-end-5", className)} {...props}>
            <CardTitle>
                Education
            </CardTitle>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="font-Satoshi">
                            <div>
                                2021 - 2025
                            </div>
                            <div>
                                &#10153;
                                Computer Science Engineering
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="font-Satoshi">
                            <div>
                                2020
                            </div>
                            <div>
                                &#10153;
                                12th - CBSE
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="font-Satoshi">
                            <div>
                                2018
                            </div>
                            <div>
                                &#10153;
                                10th - CBSE
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Card>
    )
}

export default Education;
