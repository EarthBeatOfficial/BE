import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { SignalModule } from '../signal/signal.module';
import { ResponseModule } from '../response/response.module';
import { RouteModule } from '../route/route.module';
import { WalkSessionModule } from '../walk-session/walk-session.module';

@Module({
  imports: [
    HttpModule,
    PrismaModule,
    UsersModule,
    SignalModule,
    ResponseModule,
    RouteModule,
    WalkSessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
