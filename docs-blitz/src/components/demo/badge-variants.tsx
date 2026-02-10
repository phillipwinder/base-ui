import { Badge } from '@phillip-ui-components/react/badge';

export default function BadgeVariants() {
  return (
    <div className="flex w-full justify-center flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
