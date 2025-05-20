import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @ApiOperation({ summary:'Get reviews by product ID'})
  @Get('/product/:productId')
  getReviews(@Param('productId', ParseIntPipe) productId: number) {
    return this.reviewsService.getReviewsByProduct(productId);
  }

  @ApiOperation( {summary:'Add a new review'})
  @Post()
  addReview(@Body() dto: CreateReviewDto) {
    return this.reviewsService.addReview(dto);
  }
}
