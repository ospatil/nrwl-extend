import { Rule, chain, externalSchematic } from '@angular-devkit/schematics';
import { wrapIntoFormat } from '@nrwl/schematics/src/utils/tasks';

export default function (options: any): Rule {
  return wrapIntoFormat(() => {
    return chain([
      externalSchematic('@nrwl/schematics', 'application', {
        ...options,
        style: 'scss'
      }),
    ]);
  });
}
