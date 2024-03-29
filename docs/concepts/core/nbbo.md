# Consolidated Best Price Index

The Consollidated Best Price Index (CBPI) is an analogue to the NBBO created by the SEC to ensure brokerage firms provide customers with the best publicly available prices.

:::note National Best Bid and Offer

In US equities, stocks are traded on 10+ different registered exchanges, primarily under NYSE, NASDAQ, and CBOE. The National Best Bid and Offer (NBBO) is a consolidated quote showing the highest bid and lowest offer price from across all exchanges. It's basically to serve as a benchmark for market makers.

:::

DFlow programmatically requires market makers to fill orders at prices at or better than the CBPI. Orders filled at prices within the the CBPI quote are called price improvements.
