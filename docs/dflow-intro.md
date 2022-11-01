---
sidebar_position: 1
---

# DFlow Intro

DFlow is a decentralized order flow marketplace, powered by DFlow Protocol's open and fair payment-for-order-flow (PFOF) model.

![Image title](../static/img/DFlow%20Overview.svg)

### DFlow

DFlow is an interface for order flow sources to sell their order flow to market makers in a transparent, competitive, and permissionless way. DFlow provides efficient market-driven price discovery for order flow, which are buy and sell orders that are sold in an opaque environment, in traditional markets. DFlow is designed to support order flow from various L1 chains and rollups.

On one side, brokerages create, manage, monitor, and analyze order flow auctions. On the other side, market makers submit bids into auctions. The winner of the auction receive the exclusive right to fill the underlying orders.

### DFlow Protocol

The DFlow Protocol is the suite of on-chain programs, built as a standalone Cosmos based blockchain, and off-chain programs that together create the infrastructure defining the first open and fair PFOF model. An _open and fair_ PFOF model means verifiable best execution, transparent order flow pricing, and open competition amongst market makers.

The Protocol is made up of three main components.

#### DFlow Node

The [DFlow Node](/docs/architecture/dflow-node.md) or validator is the on-chain entity that is responsible for validating transactions on the DFlow appchain. The DFlow appchain is intended to be run by a decentralized network of nodes. Nodes will also store auction related data, including information about auction status, order fill quality, payments made by market makers etc.

#### Signatory Server

Each DFlow node will run a [Signatory Server](/docs/architecture/signatory-server.md), an off-chain sidecar that handles periphery applications including processing quote requests, crafting blockchain transactions, monitoring bridge transactions etc.

#### Endorsement Server

DFlow Protocol's open and fair PFOF model associates user intent with order flow, which improves order flow price discovery. A crypto brokerage routing orders to DFlow incorporates intent into order flow by running an [Endorsement Server](/docs/architecture/endorsement-server.md). Order flow is best priced not only according to a set of user-defined parameters but also external factors (e.g. who is sending the order, why is the order being placed).

## Why DFlow?

:::note What is Order Flow
In crypto, order flow has been used to mean any transaction that changes the blockchain state. Here, order flow strictly means trader buy and sell orders as opposed to transactions like bundles, blocks etc.
:::

DFlow is inspired and built from the following observations:

- **Decentralization of order flow is necessary to ensure the most optimal execution environment for retail.** Private order, meaning order flow sent exclusively to a market maker, leads to centralization and less competition.
- **Blockchain technology redistributes power from institutions back to individuals by reducing trust assumptions in the entire finance supply chain.** Algorithmically enforcing order execution on-chain guarantees best execution and lets the public easily verify the legitimacy of any transaction.
- **There is an intense market need for monetization of order flow safely, freely, and with maximum competition.** Enabling the _proper_ monetization of order flow allows the crypto application layer to develop novel features for the end users.

### Built For Consumers

Individual traders who trade on venues that are routing orders to DFlow can expect the following:

- **Zero Fee Swapping.** No hidden fees for all trades. Neither DFlow nor participating market makers take a trading or "convenience" fee.
- **Zero Slippage.** DFlow's RFQ system prevents negative price slippage.
- **Guaranteed Best Execution.** The DFlow PFOF model uses a decentralized price index to algorithmically guarantee market makers fill at minimum the best available price.
- **MEV Protection.** All consumer trades are protected from frontrunning.

<!-- ![Image title](/diagrams/DFlow-Protocol.svg) -->
