---
sidebar_position: 2
---

# Transfer USDC

This guide covers the process of transferring USDC to the DFlow appchain.

## Deposit USDC

### Step 1: Enter Bridge Interface

Click on the tab **Transfer Funds** and then **Deposit**.

### Step 2: Connect Wallet

DFlow Bridge only supports on-ramp from Solana. Click **Connect Wallet** to connect your preferred Solana wallet app.

### Step 3: Confirm Asset and Deposit

The bridge also only supports USDC transfers, since auction creation and payments are made in USDC. On successful connection, you will see your USDC balance on Solana.

Enter the amount you want to transfer and click **Review Transfer** and then **Submit Transfer**. The deposit transaction should only take _a few minutes at most_.

### Step 4: View Transfers

Click **View Transfers** to manage your transfers and see a history of your requests.

## Withdraw USDC

### Step 1: Enter Bridge Interface

Click on the tab **Transfer Funds** and then **Withdraw**.

### Step 2: Connect Wallet

DFlow Bridge only supports off-ramp to Solana. Click **Connect Wallet** to connect your preferred Solana wallet app.

### Step 3: Confirm Asset and Withdraw

Enter the amount you want to transfer and click **Review Transfer** and then **Submit Transfer**. Note here, you will need to approve both the withdraw on DFlow and Solana.

- Approve withdraw request on DFlow in your preferred Cosmos wallet.
- Approve withdraw request on Solana in your preferred Solana wallet.

The withdraw transaction should only take _a few minutes at most_.

### Step 3B: Create Nonce Account

**This only applies for first time withdraw requests.**

If it's your first withdraw, you will have to additionally approve an account creation transaction in your preferred Solana wallet.

You need to create a [durable nonce account](https://docs.solana.com/offline-signing/durable-nonce) on Solana to bypass the typically short lifetime of a Solana transaction. This ensures a smoother user experience.

### Step 4: View Transfers

Click **View Transfers** to manage your transfers and see pending and historical requests.
