# Crypto API

## Endpoints:

- /api
  - Returns top 10 cryptocurrencies
Sample Data:
```json
{
  "Rank": "1",
  "Name": "Bitcoin",
  "Price": "$33,227.50",
  "24hr Change Rate": "6.88%",
  "7d Change Rate": "22.09%",
  "Market Cap": "$629.28B$629,282,579,916",
  "Volume(24hr)": "$30,809,996,482927,244 BTC",
  "Circulating Supply": "18,938,606 BTC",
  "Last 7 days": "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
  "Coin Symbol": "BTC"
}
```

- /api/
    - Returns news about crypto
Sample Data:
```json
{
    "baseLink": "https://www.investing.com/news/cryptocurrency-news?utm_source=google&utm_medium=cpc&utm_campaign=14712539458&utm_content=546922691691&utm_term=dsa-42114402488_&GL_Ad_ID=546922691691&GL_Campaign_ID=14712539458&gclid=CjwKCAiAzrWOBhBjEiwAq85QZ5Ur6faaX4PoxOo8E-GLFt5126iJjPPYTPL0kxmObd1s78P6xre93hoCDzUQAvD_BwE",
    "news": [
        {
        "heading": "Automotive Cybersecurity Market worth $5.3 billion by 2026 – Exclusive Report by MarketsandMarkets™",
        "link": "/news/cryptocurrency-news/automotive-cybersecurity-market-worth-53-billion-by-2026--exclusive-report-by-marketsandmarkets-2746205",
        "author": "By DailyCoin - 28 minutes ago",
        "desc": "\nAccording to the new market research report “Automotive Cybersecurity Market by Form (In-Vehicle, External Cloud Services), Offering (Hardware & Software),..."
        },
    ]
}
```