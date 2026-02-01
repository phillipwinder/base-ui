import fs from 'fs/promises';
import path from 'path';
import { cn, ImportType } from '@/lib/utils';
import { components } from '@/registry/__index__';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/components/ui/tabs';
import { CodeBlock } from './code-block';
import { ImportTypeSelect } from './import-type-select';

export default async function ComponentPreview({
  name,
  center = true,
  constrainHeight = true,
  importType = ImportType.Dependency,
}: {
  name: string;
  center?: boolean;
  constrainHeight?: boolean;
  importType?: ImportType;
}) {
  const { component: Component, src } = components[name];
  const code = await fs.readFile(path.join(process.cwd(), src), 'utf-8');

  return (
    <div className="not-prose">
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between mb-2">
          <TabsList className="h-8">
            <TabsTrigger value="preview" className="data-[selected]:shadow-xs">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[selected]:shadow-xs">
              Code
            </TabsTrigger>
          </TabsList>

          <ImportTypeSelect value={importType} />
        </div>

        <TabsContent
          value="preview"
          className={cn('border rounded-lg p-2 min-h-[400px] flex overflow-y-auto', {
            'items-center justify-center': center,
            'max-h-[400px]': constrainHeight,
          })}
        >
          <Component />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            lang="tsx"
            code={code}
            importType={importType}
            className={cn(
              'bg-background p-0 overflow-hidden rounded-md',
              '[&_pre]:text-sm [&_pre]:font-normal [&_pre_span]:leading-[1.75]',
              '[&>div:has(pre)]:min-h-[400px] my-0',
              { '[&>div:has(pre)]:max-h-[400px]': constrainHeight },
            )}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
