import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module'; // <-- The only import we need for jobs
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isSSL = configService.get<string>('DATABASE_SSL') === 'true';
        return {
          type: 'postgres',
          url: configService.get<string>('DATABASE_URL'),
          ssl: isSSL ? { rejectUnauthorized: false } : false,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    // We now import our entire Jobs feature with this one line
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}