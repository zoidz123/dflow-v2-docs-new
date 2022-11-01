# Flow Price

On DFlow, a _flow price_ is the purchase price of a batch of order flow, for a specific token pair. For example, $1M of ETH–USDC flow between $10 and $50 may be currently worth $1000. Each auction is created based on a set of standardized specs – see [Auction Parameters](/docs/concepts/core/decentralized-auctions/auction-parameters.md) for exact auction parameters.

Order flow sources can use this live price to make calculations for what this means for their potential earnings. Similarly, market makers can use it as a reference when bidding for order flow. The flow price is updated after a new winning market maker is announced.

:::note PFOF in Traditional Markets
In traditional stock and options markets, PFOF is conducted behind-the-scenes over contracts between the brokerage firm and the market maker (e.g. Robinhood and Citadel). Price and contract terms are both opaque, leading to a nonideal form of price discovery of order flow.
:::

## See Order Flow Prices

Order flow pricing will be shown like stock prices and be an integral part of the DFlow interface. Prices are retrieved live from DFlow auctions, where market makers compete by bidding into auctions. By introducing live, market-based pricing for order flow, DFlow brings transparency to the gated PFOF model found in traditional markets.
