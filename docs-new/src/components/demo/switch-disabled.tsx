'use client';

import { Label } from '@phillip-ui-components/react/label';
import { Switch } from '@phillip-ui-components/react/switch';

export default function SwitchDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="toggle-theme" disabled />
      <Label htmlFor="toggle-theme">Toggle Theme</Label>
    </div>
  );
}
