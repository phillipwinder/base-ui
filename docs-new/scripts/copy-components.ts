import fs from 'fs-extra';
import path from 'path';

function toKebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .slice(1)
    .toLowerCase();
}

async function copyFile(source: string, destination: string) {
  try {
    await fs.copy(source, destination);
    // eslint-disable-next-line no-console
    console.log(`Folder copied from "${source}" to "${destination}" successfully.`);
  } catch (err) {
    console.error('Error copying folder:', err);
  }
}

const components = [
  'Accordion',
  'AlertDialog',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Carousel',
  'Checkbox',
  'Collapsible',
  'ComboBox',
  'Command',
  'ContextMenu',
  'Dialog',
  'Input',
  'Label',
  'Menu',
  'Menubar',
  'NavigationMenu',
  'Popover',
  'PreviewCard',
  'Progress',
  'RadioGroup',
  'ScrollArea',
  'Select',
  'Separator',
  'Sheet',
  'Skeleton',
  'Slider',
  'Switch',
  'Tabs',
  'Toggle',
  'ToggleGroup',
  'Tooltip',
];

components.forEach((component) => {
  const source = path.join(
    import.meta.dirname,
    `../../packages/react-phillip/src/${toKebabCase(component)}/${component}.tsx`,
  );
  const destination = path.join(
    import.meta.dirname,
    `../src/registry/components/ui/${toKebabCase(component)}.tsx`,
  );
  copyFile(source, destination);
});

copyFile(
  path.join(import.meta.dirname, `../../packages/react-phillip/src/hooks`),
  path.join(import.meta.dirname, `../src/registry/hooks`),
);
