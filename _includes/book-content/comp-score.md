<p style="text-align: justify;">Nice! After a few hours of brainstorming, we have come up with formula to score these dominant stocks. The approach is to compute a <strong>composite score</strong> for every stock in the dynasty using a weighted multi-factor approach. The composite score combines five key financial and structural metrics:</p>

- _Market Cap Score (30%)_: Measures absolute economic power by comparing each stock's market capitalization to the largest stock in the dynasty. A stock with the highest market cap receives a score of 1.0, while others are scaled proportionally.
- _Returns Score (25%)_: Captures performance and growth momentum using annualized returns. We normalize returns across all dynasty members to a 0-1 scale, where the best-performing stock scores 1.0 and the worst scores 0.
- _Stability Score (20%)_: Rewards low volatility as a sign of mature, reliable leadership. Calculated as 1 / (1 + annual_volatility), this metric gives higher scores to stocks with steadier price movements.
- _Dominance Score (15%)_: Measures what percentage of the dynasty's total market capitalization belongs to each stock. A stock representing 50% of the dynasty's value would score 0.5.
- _Consistency Score (10%)_: Accounts for dynasty tenure, rewarding dynasties that have existed longer. Calculated as min(dynasty_age / 10, 1.0), this ensures that young dynasties don't immediately claim full consistency points.

<p style="text-align: justify;">The final composite score is: 0.30 × MC + 0.25 × Returns + 0.20 × Stability + 0.15 × Dominance + 0.10 × Consistency. The stock with the highest composite score is crowned the <strong>emperor</strong> for that year. Once we identify the emperor and runner-up, we classify each dynasty's power structure into one of five regime types based on two key gap metrics:</p>

- _Score Gap Percentage_: The relative difference between the emperor's and runner-up's composite scores, calculated as (emperor_score - runner_up_score) / emperor_score. A 30% gap means the emperor scores 30% higher than their closest competitor.

- _Market Cap Gap Ratio_: The ratio of the emperor's market cap to the runner-up's. A ratio of 2.0 means the emperor is twice as large.

The classification logic follows this decision tree:

| Regime                  | Score Gap | MC Ratio | Description                                                        |
| ----------------------- | --------- | -------- | ------------------------------------------------------------------ |
| _True Emperor_          | > 30%     | > 2.0x   | Uncontested dominance—one stock clearly rules the dynasty          |
| _Strong Emperor_        | > 15% OR  | > 1.5x   | A clear leader exists but faces meaningful competition             |
| _Contested Throne_      | 5-15%     | 1.2-1.5x | Close competition between the top contenders                       |
| _Oligarchy_             | < 5%      | < 1.2x   | No clear leader—multiple stocks share power equally                |
| _Coordinated Oligarchy_ | < 5%      | < 1.2x   | Oligarchy where top 3 stocks have >60% correlation (move together) |

<p style="text-align: justify;">The <strong>correlation check</strong> distinguishes regular oligarchies from coordinated ones: if the top three stocks' daily returns are highly correlated (>60%), they effectively function as a unified bloc rather than independent competitors. This suggests the dynasty's leadership is shared among stocks that respond similarly to market conditions—potentially within the same industry segment or business ecosystem.</p>
