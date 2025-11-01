import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const UseCaseCard = ({ icon: Icon, title, description }: UseCaseCardProps) => {
  return (
    <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer">
      <div className="space-y-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="w-8 h-8 text-navy-deep" />
        </div>
        <h3 className="text-2xl font-heading font-bold">{title}</h3>
        <p className="text-muted-foreground font-body leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default UseCaseCard;
