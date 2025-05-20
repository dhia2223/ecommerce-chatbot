// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateReviewDto } from './dto/create-review.dto';

// @Injectable()
// export class ReviewsService {
//   constructor(private prisma: PrismaService) {}

//   async getReviewsByProduct(productId: number) {
//     return this.prisma.review.findMany({
//       where: { productId },
//       include: { user: { select: { name: true } } },
//       orderBy: { createdAt: 'desc' },
//     });
//   }

//   async addReview(dto: CreateReviewDto) {
//     console.log('Adding review: in server', dto);
//     return this.prisma.review.create({
//       data: {
//         userId: dto.userId,
//         productId: dto.productId,
//         comment: dto.comment,
//         rating: dto.rating ?? null,
//       },
//     });
//   }
// }


import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviewsByProduct(productId: number) {
    return this.prisma.review.findMany({
      where: { productId },
      include: { user: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async addReview(dto: CreateReviewDto) {
    console.log('Adding review: in server', dto);

    // 1️⃣ Create the review first
    const review = await this.prisma.review.create({
      data: {
        userId: dto.userId,
        productId: dto.productId,
        comment: dto.comment,
        rating: dto.rating ?? null,
      },
    });

    // 2️⃣ Recalculate average rating for the product
    const average = await this.prisma.review.aggregate({
      where: { productId: dto.productId },
      _avg: { rating: true },
    });

    // 3️⃣ Update the product's ratingScore
    await this.prisma.product.update({
      where: { id: dto.productId },
      data: { ratingScore: average._avg.rating || 0 },
    });

    return review;
  }
}
