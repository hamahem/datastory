# Data Collection & Preprocessing

## Overview

This section details the comprehensive methodology employed in gathering and preprocessing the NASDAQ market data that forms the foundation of our dynasty analysis.

## Primary Data Sources

### NASDAQ Historical Data

- **Source**: Official NASDAQ historical archives
- **Time Period**: 1985-2024 (40 years of market history)
- **Frequency**: Daily closing prices and trading volumes
- **Coverage**: 8,000+ companies tracked over the period

### Key Metrics Collected

1. **Price Data**

   - Opening price
   - Closing price
   - High/Low values
   - Adjusted close (for splits and dividends)

2. **Volume Metrics**

   - Daily trading volume
   - Volume-weighted average price (VWAP)
   - Turnover ratios

3. **Market Capitalization**
   - Daily market cap calculations
   - Sector classifications
   - Industry categorizations

## Data Preprocessing Pipeline

### Step 1: Data Cleaning

We removed outliers and handled missing values to ensure data quality:

- Dropped records with missing close prices or volumes
- Filtered out zero-volume trading days
- Validated price ranges against historical norms

### Step 2: Normalization

We applied min-max normalization to ensure comparability across different scales:

$$
x_{\text{norm}} = \frac{x - x_{\text{min}}}{x_{\text{max}} - x_{\text{min}}}
$$

This transformation maps all values to the range $[0, 1]$, where $x_{\text{min}}$ and $x_{\text{max}}$ represent the minimum and maximum values in the dataset.

> "Normalization ensures that companies of vastly different sizes can be meaningfully compared within the same analytical framework."

### Step 3: Feature Engineering

Generated derived features including:

- **Moving averages** (7-day, 30-day, 90-day): $MA_n = \frac{1}{n}\sum_{i=0}^{n-1} p_{t-i}$
- **Volatility measures** (standard deviation of returns): $\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(r_i - \bar{r})^2}$
- **Momentum indicators**
- **Relative strength indexes**

## Quality Assurance

Our quality assurance process included:

- Cross-validation with multiple data sources
- Statistical outlier detection
- Temporal consistency checks
- Expert domain validation

## Next Steps

With clean, normalized data in hand, we proceed to the clustering analysis described in the next book.
