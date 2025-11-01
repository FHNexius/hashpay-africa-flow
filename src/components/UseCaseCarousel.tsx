import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import GlassPanel from "./GlassPanel";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCaseCarouselProps {
  useCases: UseCase[];
}

const UseCaseCarousel = ({ useCases }: UseCaseCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {useCases.map((useCase, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <GlassPanel className="h-[400px] flex flex-col justify-between relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(253, 198, 57, 0.1) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 rounded-2xl bg-gradient-gold flex items-center justify-center"
                  >
                    <useCase.icon className="w-12 h-12 text-navy-deep" />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-bold">{useCase.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="h-1 bg-gradient-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </GlassPanel>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious className="relative left-0 translate-y-0 glass-panel" />
        <CarouselNext className="relative right-0 translate-y-0 glass-panel" />
      </div>
    </Carousel>
  );
};

export default UseCaseCarousel;
