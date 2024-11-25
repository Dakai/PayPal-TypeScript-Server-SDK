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
import {
  OrderAuthorizeResponsePaymentSource,
  orderAuthorizeResponsePaymentSourceSchema,
} from './orderAuthorizeResponsePaymentSource';
import { OrderStatus, orderStatusSchema } from './orderStatus';
import { Payer, payerSchema } from './payer';
import { PurchaseUnit, purchaseUnitSchema } from './purchaseUnit';

export interface OrderAuthorizeResponse {
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
  /** The ID of the order. */
  id?: string;
  /** The payment source used to fund the payment. */
  paymentSource?: OrderAuthorizeResponsePaymentSource;
  /** The intent to either capture payment immediately or authorize a payment for an order after order creation. */
  intent?: CheckoutPaymentIntent;
  processingInstruction?: unknown;
  payer?: Payer;
  /** An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant. */
  purchaseUnits?: PurchaseUnit[];
  /** The order status. */
  status?: OrderStatus;
  /** An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions. */
  links?: LinkDescription[];
}

export const orderAuthorizeResponseSchema: Schema<OrderAuthorizeResponse> = object(
  {
    createTime: ['create_time', optional(string())],
    updateTime: ['update_time', optional(string())],
    id: ['id', optional(string())],
    paymentSource: [
      'payment_source',
      optional(lazy(() => orderAuthorizeResponsePaymentSourceSchema)),
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
  }
);
