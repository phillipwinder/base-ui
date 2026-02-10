import { buttonVariants } from '@phillip-ui-components/react/button';
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@phillip-ui-components/react/tooltip';

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger className={buttonVariants({ variant: 'outline' })}>Hover</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  );
}
