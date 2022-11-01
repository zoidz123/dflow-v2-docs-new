---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fetch Price Quote

The following provides an overview of the quote request process and will be updated with full code examples.

## Step 1: Endorse Request

The first step is to have your Endorsement Server endorse your request.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
```

</TabItem>

</Tabs>

## Step 2: Request For Price Quote

Once your request is endorsed, you can send a quote request with the following schema:

```TypeScript
{
    sendMint: string, // Send token
    receiveMint: string, // Receive token
    sendQty: string, // Send token quantity
    maxSlippageBps: number, // Max slippage percentage in bps
    wrapNativeSOL?: boolean,
    unwrapWrappedSOL?: boolean,
    orderFlowSource: string, // DFlow network public key identifying the order flow source
    endorsement: schemaEndorsement, // Order flow source endorsement of this quote
    retailTrader?: string, // Public key of the retail trader's wallet
}
```

### Indicative Quote

If the above request does not contain a `retailTrader` field, you will receive an Indicative Quote, which responds with pricing information from the market, but not a DFlow order transaction. If your user has intention of filling the order, see below for Firm Quote.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
```

</TabItem>

</Tabs>

### Firm Quote

If the above request contains a `retailTrader` field, you will receive a Firm Quote, which responds with a DFlow order transaction which can be signed and submitted by the user. Note clients should adhere to the rule of using the Indicative Quote by default for price displays and only the Firm Quote when user intends on submitting the order.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
```

</TabItem>

</Tabs>
