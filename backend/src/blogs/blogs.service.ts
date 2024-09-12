import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from 'src/schemas/Blog.schema';
import { CreateBlogDto } from './dto/CreateBlog.dto';
import { UpdateBlogDto } from './dto/UpdateBlog.dto';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  createBlog(createBlogDto: CreateBlogDto) {
    const newBlog = new this.blogModel(createBlogDto);
    return newBlog.save();
  }

  getBlogs() {
    return this.blogModel.find();
  }

  getBlogById(id: string) {
    return this.blogModel.findById(id);
  }

  updateBlog(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogModel.findByIdAndUpdate(id, updateBlogDto, { new: true });
  }

  deleteBlog(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
