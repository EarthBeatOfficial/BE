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
import { WalkLogModule } from 'src/walk-log/walk-log.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    PrismaModule,
    UsersModule,
    RouteModule,
    SignalModule,
    ResponseModule,
    WalkSessionModule,
    WalkLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
