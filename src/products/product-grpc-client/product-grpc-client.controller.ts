import { OnModuleInit } from '@nestjs/common';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs'; //reactive x

interface ProductGrpcService {
  create(data: { name: string; price: number }): Observable<any>;
}

@Controller('product-grpc-clients')
export class ProductGrpcClientController implements OnModuleInit {
  private productGrpcService: ProductGrpcService;

  constructor(@Inject('PRODUCT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.productGrpcService =
      this.client.getService<ProductGrpcService>('ProductService');
  }

  @Post()
  async create(@Body() data) {
    try {
      await this.productGrpcService.create(data).toPromise();
    } catch (e) {
      throw new RpcException({ code: e.code, message: e.message });
    }
  }
}

//Mensageria - Apache kafka - fila
