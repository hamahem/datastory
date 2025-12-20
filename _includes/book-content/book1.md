# The Financial Ledger

Historians do not begin with stories. They begin with ledgers. This book gathers what has survived of the NASDAQ’s long history: prices, market capitalizations, sector classifications, and the names of companies that have vanished from the exchange. These records are incomplete, imperfect, and often misleading — yet they are all that remain. This ledger describes the data used in this study. It specifies the records collected, their scope, and their limitations.

## The Dataset

Scrapping the internet for lost clues, leads us to the yfinance library. It yields all the historical price data for all NASDAQ-traded symbols. However, the record is incomplete, tickers which have been delisted in the past have been erased, deleted from the record as if they had never existed.

The CRSP (Center for Research in Security Prices) database restores this missing past. It documents 17,231 delisted NASDAQ companies, together with their delisting dates and causes—bankruptcy, merger, regulatory failure, and other forms of institutional exit—allowing decline and disappearance to be studied directly.

To situate these firms within a broader economic structure, we obtain industrial classifications through the CRSP–Compustat Merged (CCM) dataset, which provides the GICS sector and sub-industry hierarchy necessary for dynasty analysis.

A ticker's power is captured through market capitalization, computed from CRSP monthly data as price multiplied by shares outstanding. It enables the evolution of a firm’s economic weight to be tracked over time.

## Financial Terms

The financial world hides itself under its opaque jargon, seeking to puzzle the wanderer. Galvanized archeologists, learn these concepts: unpronounceable names and hard mathematics. This knowledge will not deceive.

**Cumulative Log-Return**:

The cumulative log-return over the period, capturing the total compounded performance of a ticker:

$$
R_t^{\mathrm{cum}}
= \sum_{\tau=1}^{t} \ln\!\left(\frac{P_\tau^{(\mathrm{adj})}}{P_{\tau-1}^{(\mathrm{adj})}}\right)
$$

where:

- $P_t^{(\mathrm{adj})}$ is the adjusted closing price at time $t$,
- $P_0^{(\mathrm{adj})}$ is the adjusted closing price at the initial time,
- $r_\tau$ denotes the log-return at time $\tau$.

This value is more pertinent than the closing price. Prices are not stationnary, the mean and variance change as the stock grows: it is difficult to compare across different time periods or different stocks because of the scale. The Log-Return normalizes the data and smoothen out the comparaison. However, this Log-Return is an extremely noisely signal, better suited for clustering is taken as a cumulative sum.

**Volatility**:

The standard deviation of returns, capturing risk/uncertainty

$$
\sigma = \sqrt{\frac{1}{N - 1} \sum_{t=1}^{N} \left(r_t - \bar{r}\right)^2}
$$

where:

- $r_t$ is the log return at time \( t \),
- $\bar{r}$ is the mean log return over the window,
- $N$ is the number of observations in the window.

## Reference

[1] **Asset Mathematics:** Campbell, J. Y., Lo, A. W., & MacKinlay, A. C. (1997). _The Econometrics of Financial Markets_. Princeton University Press.
