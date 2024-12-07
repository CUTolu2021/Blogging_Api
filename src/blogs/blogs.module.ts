import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService],
  imports: [TypeOrmModule.forFeature([Blog])],
})
export class BlogsModule {}
