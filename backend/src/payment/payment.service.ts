import { Injectable } from '@nestjs/common';
import Razorpay from 'razorpay';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class PaymentService {

  private razorpay: Razorpay;

  constructor() {
    this.razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
  }

  async createOrder(
  createOrderDto: CreateOrderDto,
) {

  const options = {
    amount: createOrderDto.amount * 100,
    currency: 'INR',
    receipt: createOrderDto.bookingId,
  };

  const order = await this.razorpay.orders.create(options);

  return {
    success: true,
    message: 'Order created successfully',
    data: order,
  };
}
}
