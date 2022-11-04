import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'sample',
})
export class SampleCommand extends CommandRunner {
  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    console.log(`Works!`);
  }
}
