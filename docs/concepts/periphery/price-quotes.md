# Price Quotes

DFlow sources off-chain liquidity from professional market makers through a RFQ system. Order flow sources can retrieve price quotes from market makers on DFlow by requesting one of two types of price quotes – either an Indicative or Firm Quote.

## Indicative Quote

An Indicative Quote is provided by market makers to give a continuous stream of price quotes for order flow sources to display to users. This is a high throughput endpoint that can be called to give users an approximation of the "real" price, where DFlow defines the "real" price as the executable price.

## Firm Quote

A Firm Quote is an executable price, meaning users will be able to have their orders filled at the Firm Quote. I.e when fetched, the receive quantity will be calculated from the Firm Quote and displayed to users, and users will be guaranteed that receive quantity assuming fill success.

Fetching a Firm Quote, unlike an Indicative Quote, also returns a crafted DFlow transaction, which the user can then sign to complete the order transaction.

### When to Request Firm Quotes

Note this price quote endpoint is rate-limited which means order flow sources should refrain from retrieving Firm Quotes unless user has intent of submitting an order. For example, order flow sources should fetch Indicative Quotes when displaying continuous prices to users and Firm Quotes on trade confirmations.
