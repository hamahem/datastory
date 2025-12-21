## Methodology

The approach is to compute a _composite score_ for every stock in the dynasty using a weighted multi-factor approach. The composite score combines five key financial and structural metrics:

- _Market Cap Score (30%)_: Measures absolute economic power by comparing each stock's market capitalization to the largest stock in the dynasty. A stock with the highest market cap receives a score of 1.0, while others are scaled proportionally.
- _Returns Score (25%)_: Captures performance and growth momentum using annualized returns. We normalize returns across all dynasty members to a 0-1 scale, where the best-performing stock scores 1.0 and the worst scores 0.
- _Stability Score (20%)_: Rewards low volatility as a sign of mature, reliable leadership. Calculated as $\frac{1}{1 + \text{annual\_volatility}}$, this metric gives higher scores to stocks with steadier price movements.
- _Dominance Score (15%)_: Measures what percentage of the dynasty's total market capitalization belongs to each stock. A stock representing 50% of the dynasty's value would score 0.5.
- _Consistency Score (10%)_: Accounts for dynasty tenure, rewarding dynasties that have existed longer. Calculated as $\text{min}(\frac{\text{dynasty\_age}}{10}, 1.0)$, this ensures that young dynasties don't immediately claim full consistency points.

The final composite score is: $0.30 \cdot \text{MC} + 0.25 \cdot \text{Returns} + 0.20 \cdot \text{Stability} + 0.15 \cdot \text{Dominance} + 0.10 \cdot \text{Consistency}$. The stock with the highest composite score is crowned the _emperor_ for that year. Once we identify the emperor and runner-up, we classify each dynasty's power structure into one of five regime types based on two key gap metrics:

- _Score Gap Percentage_: The relative difference between the emperor's and runner-up's composite scores, calculated as $\frac{\text{emperor\_score} - \text{runner\_up\_score}}{\text{emperor\_score}}$. A 30% gap means the emperor scores 30% higher than their closest competitor.

- _Market Cap Gap Ratio_: The ratio of the emperor's market cap to the runner-up's. A ratio of 2.0 means the emperor is twice as large.

The classification logic follows this decision table:

| Regime                  | Score Gap | MC Ratio | Description                                                        |
| ----------------------- | --------- | -------- | ------------------------------------------------------------------ |
| _True Emperor_          | > 30%     | > 2.0x   | Uncontested dominance, one stock clearly rules the dynasty         |
| _Strong Emperor_        | > 15% OR  | > 1.5x   | A clear leader exists but faces meaningful competition             |
| _Contested Throne_      | 5-15%     | 1.2-1.5x | Close competition between the top contenders                       |
| _Oligarchy_             | < 5%      | < 1.2x   | No clear leader, multiple stocks share power equally               |
| _Coordinated Oligarchy_ | < 5%      | < 1.2x   | Oligarchy where top 3 stocks have >60% correlation (move together) |

The _correlation check_ distinguishes regular oligarchies from coordinated ones: if the top three stocks' daily returns are highly correlated (>60%), they effectively function as a unified bloc rather than independent competitors. This suggests the dynasty's leadership is shared among stocks that respond similarly to market conditions, potentially within the same industry segment or business ecosystem.
