import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blogs/entities/blog.entity';

@Module({
  imports: [BlogsModule, TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      entities: [Blog],
      synchronize: true,
    database: 'blogging_api',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
