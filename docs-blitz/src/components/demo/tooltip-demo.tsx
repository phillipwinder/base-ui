import { buttonVariants } from '@blitz-ui/react/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@blitz-ui/react/tooltip';

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger className={buttonVariants({ variant: 'outline' })}>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
