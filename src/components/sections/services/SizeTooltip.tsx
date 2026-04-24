import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconButtonWithTooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
  onClick: () => void;
}

const IconButtonWithTooltip: React.FC<IconButtonWithTooltipProps> = ({
  icon,
  tooltipText,
  onClick,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-18 w-16 border-2 border-myColor-gray !bg-myColor-black hover:!border-myColor-orange md:h-20 md:w-20"
            onClick={onClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!bg-myColor-gray">
          <p className="!bg-myColor-gray text-lg !text-white">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButtonWithTooltip;
