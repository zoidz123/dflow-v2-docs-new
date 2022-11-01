---
sidebar_position: 1
---

# Introduction

DFlow order flow auctions is fully decentralized and on-chain. Order flow is tranched and batched into auctions created by order flow sources. Market makers then bid on auctions to receive the right to fill the underlying order flow.

## DFlow PFOF vs. Traditional PFOF

DFlow reinvents the PFOF model by introducing transparency and fairness to the PFOF model seen in the traditional markets. Traditionally, order flow is sold using long-term contracts with opaque terms between brokerages and market makers.

On DFlow, any order flow source can create and run auctions and any market maker can bid and fill order flow from the auctions. Decentralizing the process of order flow distribution prevents private or exclusive order flow.

Why is private order flow bad? Worse prices and monetization for users and wallets, respectively. In uncompetitive and inefficient markets, the sole market maker has no incentive to price the order flow fairly (i.e. it will under pay the fair amount).

In replacement of opaque terms found in traditional PFOF, DFlow standardizes order flow auction design and specs. In addition, created auctions are viewable by anyone in the public. Standardization of auctions ensures clear commitments and terms between parties. The seller knows exactly what it’s selling, and the buyer knows exactly what it’s buying. Core to criticisms of PFOF in traditional markets is the lack of understanding how order flow is being sold and purchased.

## Auction High-Level Structure

DFlow auctions are first-price sealed-bid auctions that run in a parallel, sequential manner. Order flow sources can run multiple auctions at the same time, where each auction has a set of predetermined specs that identify the order flow.

Each auction is (automatically) sold repeatedly – an epoch number is incremented to identify the vintage of the auction. The auction only requires a one-time setup and will last as long as it's not canceled.

![Image title](../../../../static/img/Auction%20Overview.svg)

:::note Pricing Future Order Flow
On DFlow, market makers bid in auctions to fill future batches of order flow, eliminating the speculation that market makers can see order details before paying for order flow. Market makers price auctions based on the predetermined specs and external factors like where these order flow came from.
:::

## Auction Rollover

As mentioned, an auction runs automatically after initial setup and can have an indefinite number of epochs.

For each epoch, the following periods happen sequentially and the sum defines the epoch's length:

- **Bid Period:** In the Bid Period, market makers submit blind bids to auctions.
- **Reveal Period:** In the Reveal Period, no more bids can be submitted and market makers choose to reveal bids to determine the auction winner.
- **Delivery Period:** Order flow sources deliver order flow to the auction winner in the Delivery Period.

:::info Why Reveal Period
A Reveal Period is needed because DFlow auctions are first-price sealed-bid auctions, meaning bids are blind (encrypted). All auctions are run on the DFlow appchain so revealing bids, making the bids public to everyone, without banning new bids can result in a bidding war.
:::

How does an auction move from one epoch to another? First, the two types of epochs need to be defined.

### Genesis Epoch

Genesis Epoch is the first epoch of an auction. Auction owners define the Bid and Reveal Period of this epoch by setting the Genesis Epoch Duration. They must also define the max Delivery Period by setting the Genesis Epoch Delivery Period.

The reason behind a different treatment for the Genesis Epoch is to let auction owners prepare for the auction like ensuring their system is properly set up, promoting their auction (i.e. on social media) etc.

![Image title](../../../../static/img/Genesis%20Epoch.svg)

### Generic Epoch

All epochs, excluding the first epoch, are classified as Generic Epoch. Generic Epoch Bid and Reveal Periods are no longer user-defined and will depend on the previous epoch's Delivery Period. However, the user must still define the max Delivery Period by specifying the Generic Epoch Delivery Period.

![Image title](../../../../static/img/Generic%20Epoch.svg)

### Rollover Behavior

The end of the current epoch's Delivery Period marks the beginning of the next epoch's Delivery Period. The beginning of one epoch's Delivery Period also starts the next epoch's Bid Period.

For example, in an auction, if Epoch 5 is done delivering order flow, Epoch 6 will start delivering order flow and Epoch 7 will start accepting bids from market makers.

As a result, it's important to track an epoch's Delivery Period. DFlow lets the user specify the max Delivery Period but the realized Delivery Period may be shorter, depending on how quickly the Notional size is delivered.

On DFlow, _Notional Time_ increments time as order flow is delivered to the winning market maker. Notional Time ends when the specified Notional is fully delivered. An epoch's Delivery Period will end if Notional Time is reached before the user-defined max Delivery Period.

See [Auction Parameters](/docs/concepts/core/decentralized-auctions/auction-parameters) for the full list of required parameters and [Auction Rollover Example](/docs/concepts/core/decentralized-auctions/auction-rollover-example) for a more detailed explanation of this process.
