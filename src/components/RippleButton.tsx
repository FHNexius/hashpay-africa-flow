import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const RippleButton = ({ children, className, onClick, size = "lg", type = "button", variant = "default" }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.();
  };

  return (
    <Button
      type={type}
      size={size}
      variant={variant}
      onClick={addRipple}
      className={cn(
        "relative overflow-hidden group font-semibold",
        "hover:shadow-lg transition-all duration-300 hover:scale-105",
        className
      )}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-primary-foreground/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Button>
  );
};

export default RippleButton;
