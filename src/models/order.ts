/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  CheckoutPaymentIntent,
  checkoutPaymentIntentSchema,
} from './checkoutPaymentIntent';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import { OrderStatus, orderStatusSchema } from './orderStatus';
import { Payer, payerSchema } from './payer';
import {
  PaymentSourceResponse,
  paymentSourceResponseSchema,
} from './paymentSourceResponse';
import { PurchaseUnit, purchaseUnitSchema } from './purchaseUnit';

/** The order details. */
export interface Order {
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
  /** The ID of the order. */
  id?: string;
  /** The payment source used to fund the payment. */
  paymentSource?: PaymentSourceResponse;
  /** The intent to either capture payment immediately or authorize a payment for an order after order creation. */
  intent?: CheckoutPaymentIntent;
  processingInstruction?: unknown;
  payer?: Payer;
  /** An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant. */
  purchaseUnits?: PurchaseUnit[];
  /** The order status. */
  status?: OrderStatus;
  /** An array of request-related HATEOAS links. To complete payer approval, use the `approve` link to redirect the payer. The API caller has 6 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) from the time the order is created, to redirect your payer. Once redirected, the API caller has 6 hours for the payer to approve the order and either authorize or capture the order. If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you include `application_context.return_url` is specified or you will get "We're sorry, Things don't appear to be working at the moment" after the payer approves the payment. */
  links?: LinkDescription[];
}

export const orderSchema: Schema<Order> = object({
  createTime: ['create_time', optional(string())],
  updateTime: ['update_time', optional(string())],
  id: ['id', optional(string())],
  paymentSource: [
    'payment_source',
    optional(lazy(() => paymentSourceResponseSchema)),
  ],
  intent: ['intent', optional(checkoutPaymentIntentSchema)],
  processingInstruction: ['processing_instruction', optional(unknown())],
  payer: ['payer', optional(lazy(() => payerSchema))],
  purchaseUnits: [
    'purchase_units',
    optional(array(lazy(() => purchaseUnitSchema))),
  ],
  status: ['status', optional(orderStatusSchema)],
  links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
});
