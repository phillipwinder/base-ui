import { Checkbox } from '@phillip-ui-components/react/checkbox';
import { Label } from '@phillip-ui-components/react/label';

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
