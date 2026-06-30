import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreateOrderDto } from './dto/create-order.dto';


@ApiTags('Payment')
@Controller('payment')
export class PaymentController {

  constructor(
    private readonly paymentService: PaymentService,
  ) {}

  @Post('create-order')
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.paymentService.createOrder(
      createOrderDto,
    );
  }
}
