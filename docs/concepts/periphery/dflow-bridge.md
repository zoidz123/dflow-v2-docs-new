---
sidebar_position: 2
---

# DFlow USDC Bridge

Since all auctions are hosted on the DFlow appchain, order flow sources will need to transfer USDC to DFlow to create auctions and market makers will need to transfer USDC to pay for order flow. This can be done through the DFlow interface.

## Supported Chains

DFlow chose Solana as the USDC on-ramp to DFlow. E.g. if you are a wallet on Ethereum, you will need to create an account on Solana.

## Supported Assets

The bridge only supports USDC.

## Transfer Time

Transfer should be confirmed within a few minutes.

:::info Important Point on Risk Mitigation

The DFlow USDC Bridge mitigates risks that come with connecting multiple chains and a list of assets. The intended behavior of the DFlow appchain is to solely support order flow auctions and not other DeFi protocols. It's expected there won't be large amounts of long-term capital sitting in the bridge, and funds will be bridged on an as-needed basis for auction creation and payments.
:::
