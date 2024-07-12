import { Command, Console } from 'nestjs-console';
import { SeedService } from './seed.service';

@Console()
export class SeedCommand {
  constructor(private readonly seedService: SeedService) {}

  @Command({
    command: 'seed',
    description: 'Seed the database with initial data',
  })
  async seed() {
    const message = await this.seedService.seed();
    console.log(message);
  }
}
