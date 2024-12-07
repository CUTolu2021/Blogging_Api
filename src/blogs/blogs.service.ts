import { Injectable, Query } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { ILike, In, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}
  async create(createBlogDto: CreateBlogDto) {
    const user = await this.blogRepository.save(createBlogDto);
    return user;
  }

  /*async findAll(tag?: string) {
    if(tag){
      console.log(tag)
      const query = `SELECT * FROM blog WHERE tags::text[] @> ARRAY[$1]`;
      if(!query) throw new NotFoundException();
      const params = [tag];
       return await this.blogRepository.query(query, params);
    }
    const user = await this.blogRepository.find();
    console.log("No tags")
    return user;
  }*/
    async findAll(searchTerm?: string) {
      if (!searchTerm) {
        const user = await this.blogRepository.find();
        console.log("No tags")
        return user;
      }
      const query = `SELECT * FROM blog WHERE title ILIKE $1 OR content ILIKE $1 OR category ILIKE $1`;
      const params = [`%${searchTerm}%`];
      const result = await this.blogRepository.query(query, params);
      return result;
    }

  async findOne(id: number) {
    const user = await this.blogRepository.findOneBy({ id });
    if(!user) throw new NotFoundException();
    return user;  
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const user = await this.blogRepository.update(id, updateBlogDto);
    if (user.affected === 0) {
      throw new NotFoundException();
    }
    return user;
  }

  async put(id: number, createBlogDto: CreateBlogDto) {
    const user = await this.blogRepository.update(id, createBlogDto);
    if (user.affected === 0) {
      throw new NotFoundException();
    }
    return user;
  }
  

  async remove(id: number) {
    const user = await this.blogRepository.delete(id);
    if (user.affected === 0) {
      throw new NotFoundException();
    }
    return user;
  }
}
