import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Blog {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  authorImage: string;

  @Prop()
  date: string;

  @Prop()
  category: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
