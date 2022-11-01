# DFlow Endorsement Server

The goal of endorsements is to gate keep malicious actors from sending toxic order flow and spam. Every order flow source routing orders to DFlow will run an Endorsement Server, an off-chain program that is a core part of DFlow's open and fair PFOF model. An Endorsement Server endorses actions like fetching price quotes and sending order to DFlow.

A successful PFOF model depends on filtering for order flow with low levels of adverse selection, which is valuable to market makers. Associating intent with order flow is one solution.

## Background on Trading Intent

Where users trade can say a few things about who they are and why they trade. Every trading venue markets towards a specific type of users and uses UI/UX or authentication to target that group of people. In stocks, the Robinhood users have a very different persona than Interactive Brokers users. In crypto, this is the same.

## Endorsing Transactions

Each order flow source has an endorsement keypair (an Ed25519 key pair) associated with its DFlow account used to endorse incoming transactions. The account is created through the DFlow interface, when the first auction is created. In addition, the order flow source can implement custom logic to decide whether to endorse.

The endorsed price quote request or new order transaction will be sent to a Signatory Server, which will verify the endorser signed properly. All others will be rejected.
