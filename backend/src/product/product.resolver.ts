import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.entity.js';
import { ProductService } from './product.service.js';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  public async products(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
