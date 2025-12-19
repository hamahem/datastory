# The Clustering Records

<video src="{{ '/assets/video/Section.mp4' | relative_url }}" autoplay loop muted playsinline style="width: 70%; height: auto; display: block; margin: 0 auto;"></video>

In this book, we move beyond individual companies and search for structure. By comparing patterns of growth, decline, and survival across time, we reconstruct lineages, groups of firms shaped by similar economic forces. This book is devoted to explaining how such patterns are identified. It presents the theoretical framework and mathematical tools used to compare tickers across time, and to reconstruct dynasties from opaque records.

## The Clustering Recipe

### The Technique

The technique of time-series clustering in the unsupervised scenario (no labels at disposition) is our main tool. Regression explains relationships under assumed models; classification assigns predefined categories. Neither is suited to uncovering structures that are not known in advance. Clustering time-series, by contrast, allows patterns to emerge from the records themselves. It does not impose dynasties onto history; it tests whether history contains them.

### Feature Extraction

The principle of the method is to extract from each cumulative log-return time series a vector of descriptive statistics capturing its distributional, temporal, and structural properties; clustering is then performed in this derived feature space. The library TSfresh contains a built-in function to extract $\approx 800$ features per time series to which we add statistical elements (mean, max, q25, q75..) and multiple financial features of which:

- _$\beta$ Value:_

  Stock returns are highly correlated with overall market movements (systematic risk). For each stock, we estimate its sensitivity to the market (e.g., the S&P 500 represented by SPY) using the market model:

  $$r_{i,t} = \alpha_i + \beta_i \, r_{m,t} + \varepsilon_{i,t}$$

  where:

  - $r_{i,t}$ = return of stock i at time t,
  - $r_{m,t}$ = market (SPY) return at time t,
  - $\alpha_i$ = intercept term,
  - $\varepsilon_{i,t}$ = idiosyncratic (residual) return.

  The slope $\beta_i$ measures how much the stock moves with the market and is given by:

  $$\beta_i = \frac{\operatorname{Cov}(r_i, r_m)}{\operatorname{Var}(r_m)}$$

- _Sharpe Ratio:_

  The Sharpe ratio measures the risk-adjusted performance of a stock by comparing its expected excess return to its volatility. It is defined as

  $$\mathrm{Sharpe_i} = \frac{\mathbb{E}[r_i - r_f]}{\sigma(r_i - r_f)}$$

  where:

  - $r_i$ = return of stock i
  - $r_f$ = the risk-free rate, which is assumed to be 0
  - $\sigma(\cdot)$ = the standard deviation of returns

  A higher Sharpe ratio indicates better compensation for the risk taken.

The extraction algorithm is deliberately exhaustive: rather than presupposing which characteristics matter, it allows a wide range of potential patterns to be represented before dimensionality reduction with the UMAP algorithm.

### Clustering and Evaluation

After much testing, historians will find that the K-Means algorithm will be the most suitable to obtain the desired results. K-Means is one of the most widely used clustering algorithms. It partitions the dataset into k clusters by minimizing the within-cluster sum of squared distances. This result is found, choosing between the different clustering algorithms, by finding the maximum value of the heuristic:

$$h = \text{Sil} - 0.5 \cdot\text{DB}$$

where:

- ⁠Sil = the silhouette score of the clustering assesses the cohesion and separation of the datapoints within each cluster and to neighbouring ones.
- ⁠DB = the Davies-Boulding score of the clustering assesses the distance between clusters and assesses their separation.

This heuristic favors compact, well-separated clusters while penalizing artificial fragmentation, reflecting the historical objective of identifying coherent lineages rather than extremely distinct separations.

## Reference

[1] _Enes, J., Expósito, R. R., Fuentes, J., López Cacheiro, J., & Touriño, J._ (2023). <a href="https://doi.org/10.1016/j.inffus.2022.12.017">A pipeline architecture for feature-based unsupervised clustering using multivariate time series from HPC jobs</a>
