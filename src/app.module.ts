import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { RestaurantResolvers } from './restaurants/restaurants.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { RestaurantService } from './restaurants/restaurant.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
  ],
  controllers: [],
  providers: [PrismaService, RestaurantResolvers, RestaurantService],
})
export class AppModule {}
