import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export function ImageCarousel({ images }: { images: string[] }) {
    return (
        <Carousel>
            <CarouselContent>
                {images?.map((image, index) => (
                    <CarouselItem key={index}>
                        <img className="w-full h-auto" src={image} alt="" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
