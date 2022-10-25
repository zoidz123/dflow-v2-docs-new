---
sidebar_position: 1
---

# Submit Bid

## Overview

To win the right to fill order flow of an auction, you have to have the highest bid in the epoch. All DFlow auctions are organized as first-price sealed-bid auctions, meaning you can not see the other existing bids of the epoch during the Bid period.

During the Bid period, you can:

- Submit only one bid
- Resubmit bid, if a higher or lower bid is desired
- Cancel bid

There is no limit on the number of auctions you can bid into. If you are taking delivery of order flow of the previous epoch, you can still submit bids into the current epoch of the same auction.

:::info Bid vs. Reveal Period

Each auction epoch has both a Bid and Reveal period. The Bid period lasts as long as the Delivery Period of the previous epoch multiplied by a factor (e.g. `Time Factor` or `Notional Factor`), to ensure a smooth epoch rollover process. Immediately after Bid period ends, you can no longer place a new bid and can reveal your bid, which will reveal the winner of that epoch.
:::

:::info Actual Delivery Period Length

Every auction defines its own _maximum_ Delivery Period but the _actual_ length is based off the Notional amount and Generic Epoch Delivery Period (or Genesis Epoch Delivery Period for the first epoch), whichever comes first.

:::

<!-- ## A Bidding Example

=== "TypeScript"

    ``` ts
    TODO
    ```

=== "Python"

    ``` python
    TODO
    ```

=== "Rust"

    ``` rust
    TODO
    ``` -->
