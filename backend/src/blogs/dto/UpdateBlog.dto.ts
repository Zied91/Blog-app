import { IsOptional } from 'class-validator';

export class UpdateBlogDto {
  @IsOptional()
  image?: string;

  @IsOptional()
  title?: string;

  @IsOptional()
  author?: string;

  @IsOptional()
  authorImage?: string;

  @IsOptional()
  date?: string;

  @IsOptional()
  category?: string;
}
