import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ziedkhanfir:c49gfmGu7Q0NqnQO@cluster0.wofcxl8.mongodb.net/blogs',
    ),
    BlogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
