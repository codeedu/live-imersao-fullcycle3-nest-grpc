import { Test, TestingModule } from '@nestjs/testing';
import { ProductGrpcClientController } from './product-grpc-client.controller';

describe('ProductGrpcClientController', () => {
  let controller: ProductGrpcClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductGrpcClientController],
    }).compile();

    controller = module.get<ProductGrpcClientController>(ProductGrpcClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
