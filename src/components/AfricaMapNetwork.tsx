import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AfricaMapNetwork = () => {
  const [nodes] = useState([
    { x: 45, y: 25, delay: 0 },
    { x: 35, y: 45, delay: 0.2 },
    { x: 55, y: 50, delay: 0.4 },
    { x: 40, y: 65, delay: 0.6 },
    { x: 60, y: 70, delay: 0.8 },
    { x: 48, y: 80, delay: 1 },
  ]);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Abstract Africa shape */}
      <svg
        viewBox="0 0 200 300"
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M90,20 L110,25 L120,40 L125,60 L130,80 L128,100 L125,120 L120,140 L115,160 L110,180 L105,200 L95,220 L85,235 L75,245 L65,250 L55,245 L50,230 L48,210 L50,190 L55,170 L60,150 L62,130 L60,110 L55,90 L52,70 L55,50 L65,35 L80,25 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(253, 198, 57)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(253, 198, 57)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Network nodes and connections */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {/* Draw connections between nodes */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((targetNode, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="rgba(253, 198, 57, 0.2)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: node.delay + 0.5 }}
            />
          ))
        )}

        {/* Draw nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="none"
              stroke="rgb(253, 198, 57)"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
              }}
            />
            
            {/* Node dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="rgb(253, 198, 57)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
            >
              <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </motion.circle>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AfricaMapNetwork;
