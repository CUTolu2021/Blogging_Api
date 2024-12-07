import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class CreateBlogDto {
    
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;
    @IsString({ message: 'Content must be a string' })
    @IsNotEmpty({ message: 'Content is required' })
    content: string;
    @IsString({ message: 'Category must be a string' })
    @IsNotEmpty({ message: 'Category is required' })
    category: string;
    @IsArray({ message: 'Tags must be an array' })
    @IsNotEmpty({ message: 'Tags are required' })
    tags: string[];
    createdAt: Date
    
}
