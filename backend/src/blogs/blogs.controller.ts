import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  //   UsePipes,
  //   ValidationPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/CreateBlog.dto';
import mongoose from 'mongoose';
import { UpdateBlogDto } from './dto/UpdateBlog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Post()
  //   @UsePipes(new ValidationPipe()) if we want to not apply pipes globally in main.ts
  createBlog(@Body() createBlogDto: CreateBlogDto) {
    console.log(createBlogDto);
    return this.blogsService.createBlog(createBlogDto);
  }

  @Get()
  getBlogs() {
    return this.blogsService.getBlogs();
  }

  @Get(':id')
  async getBlogbyId(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Blog not found', 404);
    }
    const findBlog = await this.blogsService.getBlogById(id);
    if (!findBlog) {
      throw new HttpException('Blog Not found', 404);
    }
    return findBlog;
  }

  @Patch(':id')
  async updateBlog(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid ID', 404);
    }

    const updatedBlog = await this.blogsService.updateBlog(id, updateBlogDto);
    if (!updatedBlog) {
      throw new HttpException('Blog not Found', 404);
    }
    return updatedBlog;
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid ID', 404);
    }
    const deletedUser = await this.blogsService.deleteBlog(id);
    if (!deletedUser) throw new HttpException('Blog not found', 404);
    return;
  }
}
