---
sidebar_position: 2
---

# Auction Parameters

Each auction is created from a list of user-defined parameters that determines the quality and grade of the order flow being auctioned. Order flow sources should understand each parameter before creating auctions.

The following are standard for all DFlow auctions.

## Network

DFlow supports order flow from multiple chains. Network defines the chain where order flow is coming from.

## Base and Quote Currency

Each auction specifies the order flow for one token pair. The Base Currency and Quote Currency determine what the token pair is. E.g. if an order flow source wants to sell WETH–USDC, WETH would be the Base Currency and USDC the Quote Currency.

## Notional

Each auction needs to specify the amount of order flow to sell. Notional specifies the amount, in USD, of order flow per epoch in the auction. E.g. if $100,000 is put down, this is the value per epoch.

## Min and Max Range

DFlow lets auction owners set the range on the order flow. Min and Max values are both in USD, where Min is inclusive and Max is exclusive. Orders following this range will be routed to the created auction.

## Genesis Epoch Duration

Setting the Genesis Epoch Duration marks the end of the Bid + Reveal period of the first epoch, also known as the Genesis Epoch. Auctions are structured to run sequentially so note the end of this period also marks the beginning of the second epoch or Epoch 1.

## Genesis Epoch Delivery Period

Setting the Genesis Epoch Delivery Period sets the maximum Delivery Period for the Genesis Epoch. Order flow sources must deliver the above Notional size by the end of this period (i.e. this is the maximum delivery period).

## Generic Delivery Period

Similarly, the Generic Delivery Period determines the maximum Delivery Period for all Generic Epochs.

## Fee Payer

Auction owners can choose who pays, either the market maker or their users, for the L1 settlement transaction. This option is only available on low gas cost chains as it is not feasible for market makers to cover gas fees on chains like Ethereum during high usage periods.

## Backup Liquidity Provider

As the name infers, the Backup Liquidity Provider is used as a backup when the winning market maker is not filling orders (i.e. goes offline).
