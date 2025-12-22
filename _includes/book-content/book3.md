# The Dynasty Chronicles

For each rolling time window, once clusters are identified, history can begin. This book records how NASDAQ dynasties are constructed from rolling clusters. It interprets their evolution as struggles of power, dominance, and disappearance across market history. How clusters are linked together to form a Dynasty Graph, mapping falls, merges, divisions and continuations across the NASDAQ lifetime.

## The Secret Algorithm

The algorithm focuses on the tickers contained in each cluster, it looks at the overlap of elements of cluster A at time window $t=n$ and links it or not to elements of time window $t=n+1$. The algorithm, to match the historical outcome of dynasties, decides on one of the following outcome between time windows:

•⁠ ⁠*Continuation*: The code uses the Hungarian Algorithm to find for each current time window cluster, the cluster with the most overlap in the next time window. If this overlap is superior to a certain threshold, the dynasty survives: it is the same entity just moved forward in time and with actualized members.

•⁠ ⁠*Merges*: If two or more clusters from the past contribute a significant percentage of their tickers to a single new cluster, the algorithm marks it as a merge. Dynasties can thus lose their individuality, absorbed into a larger power, their former identities preserved only as ancestral lines within a new dominant entity.

•⁠ ⁠*Splits*: If one large cluster from the past breaks apart into two distinct groups in the next window, we obtain a division, a split. Dynasties can fracture when internal unity no longer holds.

•⁠ ⁠*Fall*: If a cluster has no significant overlap with anything in the next window, it is marked as a "fall"—the dynasty has vanished from the record. No successor claims its legacy; it disappears as abruptly as it emerged, leaving only a gap in the historical ledger.

•⁠ ⁠*Rise*: If a new cluster appears that has no "ancestors" from the previous window, it is marked as a new rising dynasty. A new power enters history.

## Dynasty Dominance Score Definition

For each dynasty $ d $ at year $ t $, dominance is defined as a weighted composite score:

$$
\text{Dominance}_{d,t} =
0.35 \cdot MS_{d,t}

- 0.20 \cdot SP\_{d,t}
- 0.15 \cdot M\_{d,t}
- 0.10 \cdot B\_{d,t}
- 0.10 \cdot R\_{d,t}
- 0.10 \cdot S\_{d,t}
$$

where each component captures a distinct structural dimension of market power:

•⁠ ⁠*Market Share ($MS$)* — the dynasty’s share of total market capitalization, capturing economic scale.

•⁠ ⁠*Sector Purity ($SP$)* — the degree to which the dynasty is concentrated within a single sector, reflecting coherence and focus.

•⁠ ⁠*Maturity ($M$)* — a logarithmic function of dynasty age, capturing institutional depth and historical embeddedness.

•⁠ ⁠*Breadth ($B$)* — the number of constituent firms relative to the largest dynasty, measuring organizational reach.

•⁠ ⁠*Returns ($R$)* — normalized annual return performance, reflecting short-term competitive success.

•⁠ ⁠*Survival Rate ($S$)* — the proportion of firms still listed, capturing resilience and continuity.

Together, these components define dominance not as size alone, but as a balance between scale, coherence, performance, and persistence.

## Growth Chart

Before descending further into the analysis, we pause to present the first graph of the data story. This view captures the evolution of the market across time, focusing on dynasties rather than individual stocks. It reveals how dynasties grow in scale as the NASDAQ itself expands, illustrating the gradual elevation of market power across successive eras.

{% include growth_chart.html %}

## Reference

[1] _Arratia, A. & Cabaña, A._ (2011). <a href="https://arxiv.org/pdf/1111.3127">Tracing the temporal evolution of clusters in a financial stock market</a>.
