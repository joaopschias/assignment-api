import { NestFactory } from '@nestjs/core';
import { BootstrapConsole } from 'nestjs-console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  const boot = new BootstrapConsole({
    module: AppModule,
    useDecorators: true,
    contextOptions: {
      logger: ['error', 'warn', 'log'],
    },
  });

  await boot.init();

  try {
    await boot.boot();
    await app.close();
    process.exit(0);
  } catch (e) {
    console.error(e);
    await app.close();
    process.exit(1);
  }
}

bootstrap();
