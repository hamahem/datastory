# The Dynasty Chronicles

For each rolling time window, once clusters are identified, history can begin. This book records how NASDAQ dynasties are constructed from rolling clusters. It interprets their evolution as struggles of power, dominance, and disappearance across market history. How clusters are linked together to form a Dynasty Graph, mapping falls, merges, divisions and continuations across the NASDAQ lifetime.

## The Secret Algorithm

The algorithm focuses on the tickers contained in each cluster, it looks at the overlap of elements of cluster A at time window $t=n$ and links it or not to elements of time window $t=n+1$. The algorithm, to match the historical outcome of dynasties, decides on one of the following outcome between time windows:

•⁠ ⁠*Continuation*: The code uses the Hungarian Algorithm to find for each current time window cluster, the cluster with the most overlap in the next time window. If this overlap is superior to a certain threshold, the dynasty survives: it is the same entity just moved forward in time and with actualized members.

•⁠ ⁠*Merges*: If two or more clusters from the past contribute a significant percentage of their tickers to a single new cluster, the algorithm marks it as a merge. Dynasties can thus lose their individuality, absorbed into a larger power, their former identities preserved only as ancestral lines within a new dominant entity.

•⁠ ⁠*Splits*: If one large cluster from the past breaks apart into two distinct groups in the next window, we obtain a division, a split. Dynasties can fracture when internal unity no longer holds.

•⁠ ⁠*Fall*: If a cluster has no significant overlap with anything in the next window, it is marked as a "fall"—the dynasty has vanished from the record. No successor claims its legacy; it disappears as abruptly as it emerged, leaving only a gap in the historical ledger.

•⁠ ⁠*Rise*: If a new cluster appears that has no "ancestors" from the previous window, it is marked as a new rising dynasty. A new power enters history.

{% include growth_chart.html %}

## Reference

[1] _Arratia, A. & Cabaña, A._ (2011). <a href="https://arxiv.org/pdf/1111.3127">Tracing the temporal evolution of clusters in a financial stock market</a>.
