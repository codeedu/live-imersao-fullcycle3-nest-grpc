import { Test, TestingModule } from '@nestjs/testing';
import { ProductGrpcServerController } from './product-grpc-server.controller';

describe('ProductGrpcServerController', () => {
  let controller: ProductGrpcServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductGrpcServerController],
    }).compile();

    controller = module.get<ProductGrpcServerController>(ProductGrpcServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
