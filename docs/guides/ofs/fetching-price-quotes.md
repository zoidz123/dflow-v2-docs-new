---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fetch Price Quote

The following provides an overview of the quote request process and will be updated with full code examples.

## Step 1: Endorse Request

**This only applies if you are requesting for a Firm Quote.**

The first step is to have your Endorsement Server endorse your request.

```json
// TODO
// This is the schema for requesting an endorsement for your request.
```

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
// This is the way to send an endorsement request.
```

</TabItem>

</Tabs>

## Step 2: Request For Price Quote

Once your request is endorsed, you can send a quote request with the following schema:

```json
// TODO
// This is the schema for a quote request
```

### Indicative Quote

An Indicative Quote responds with pricing information from the market, but not a DFlow order transaction. If your user has intention of filling the order, see below for Firm Quote.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
// This is the way to request for an Indicative Quote.

// This is the response from your request.
```

</TabItem>

</Tabs>

### Firm Quote

A Firm Quote responds with a DFlow order transaction which can be signed and submitted by the user. Note clients should adhere to the rule of using the Indicative Quote by default for price displays and only the Firm Quote when user intends on submitting the order. This quote request will be rate limited.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
// This is the way to request for an Firm Quote.

// This is the response from a Firm Quote.
```

</TabItem>

</Tabs>
