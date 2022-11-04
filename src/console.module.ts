import { Module } from '@nestjs/common';
import { SampleCommand } from './commands/sample.command';

@Module({
  imports: [],
  controllers: [],
  providers: [
    SampleCommand
  ],
})
export class ConsoleModule {}
