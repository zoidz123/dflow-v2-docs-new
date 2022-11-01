---
sidebar_position: 2
---

# Create Auction

This section shows you how to create an auction on DFlow to sell your order flow. The DFlow interface is designed to make this entire process highly intuitive.

Before creating your first auction, make sure to have enough USDC in your account to pay for the auction creation fee. Follow the steps from [Transfer USDC](/docs/guides/general/depositing-withdrawing.md).

## Step 1: Define Your Auction

Head over to the DFlow interface and click **Create Auction** to enter the auction creation page. On this page, you will see the full list of parameters as defined in [Auction Parameters](/docs/concepts/core/decentralized-auctions/auction-parameters.md) and when you are finished, click **Submit Auction** to deploy your auction.

## Step 1B: Create DFlow Account

**This is only required for first-time auction creators.** If it's your first time creating an auction, you will see a "Set Endorsement Key" page pop up from the side.

If you've already fully set up your Endorsement Server, input the same key you used to set up the server.

If not, you can directly generate one from the interface by clicking **Generate**. Don't forget to download and save your key! Since any key on the Ed25519 curve is a valid Endorsement Key, you can also generate one elsewhere and input into the box.

When you click **Continue**, your wallet will prompt you to sign a transaction, which will create your DFlow account for you.

## Step 2: Create and Deploy Your Auction

**It is recommended you have your Endorsement Server set up before deploying your first auction because you won't be able to send order transactions without an Endorsement Server.** Go back to the previous step to [Set Up DFlow Endrosement Server](/docs/guides/ofs/setting-up-an-endorsement-server.md).

When you are ready, click **Create Auction** to deploy your auction. Once creation is successful, you can click **View Auction** to view your created auction.

Your auction will be accepting bids immediately! Head to the next section to learn how to fetch price quotes.

<!-- Insert short video tutorial / screen recording of someone going through the entire process  -->
