---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set Up DFlow Endorsement Server

This guide walks over the steps to set up the Endorsement Server, which is required for fetching prices and submitting orders.

**It is recommended you complete this process before creating your first auction.**

## Step 1: Generate Key

To complete the Endorsement Server setup, you will need to generate an endorsement key, which can be any Ed25519 keypair. You can either generate one on your own or use the DFlow interface.

Remember, you will need to enter the public key when you create your first auction and this keypair will be required for sending orders to your auctions in the future.

## Step 2A: Configure and Deploy DFlow Endorsement Server

You can run and deploy DFlow's version of the Endorsement Server to get started quickly.

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
// This is how to set up the server.
```

</TabItem>

</Tabs>

## Step 2B: Write and Deploy Your Own

DFlow intends on giving you the flexibility to create and deploy your own Endorsement Servers. This gives you power to add additional checks. You will just have to adhere to the following Endorsement schema:

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
// TODO
// This is the format for Endorsements.
```

</TabItem>

</Tabs>
