# Clustering & Dynasty Detection

<video src="{{ '/assets/video/Section.mp4' | relative_url }}" autoplay loop muted playsinline style="width: 70%; height: auto; display: block; margin: 0 auto;"></video>

## Methodology Overview

Using advanced clustering techniques, we identified distinct patterns of market behavior that define our "dynasties" - groups of companies that rise and fall together across market cycles.

## Clustering Algorithm Selection

### K-Means Clustering

We employed k-means clustering with the following parameters:

- **Number of clusters**: Determined via elbow method and silhouette analysis
- **Distance metric**: Euclidean distance on normalized features
- **Initialization**: K-means++ for robust centroid selection

### Feature Selection

Key features used for clustering:

1. **Price momentum** (30-day, 90-day, 180-day)
2. **Volatility patterns**
3. **Trading volume characteristics**
4. **Market cap trajectory**
5. **Sector correlation coefficients**

## Dynasty Identification

### Temporal Analysis

We analyzed cluster membership over rolling time windows to identify:

- **Stable dynasties**: Clusters maintaining core membership >5 years
- **Emerging dynasties**: New patterns forming in recent data
- **Declining dynasties**: Historical clusters losing cohesion

### Statistical Validation

Each dynasty was validated using:

- **Silhouette scores** (>0.6 threshold)
- **Inter-cluster distance** (maximization)
- **Intra-cluster cohesion** (minimization)

## Key Findings

Our analysis revealed **7 major dynasties** spanning the 40-year period:

1. **The Tech Pioneers** (1985-2000)
2. **The Dot-com Survivors** (2000-2008)
3. **The Financial Giants** (1990-2008)
4. **The FAANG Empire** (2010-2020)
5. **The Cloud Titans** (2015-present)
6. **The Biotech Innovators** (2012-present)
7. **The Clean Energy Wave** (2018-present)

## Visualization

Dynasty evolution can be visualized through:

- Temporal heatmaps showing cluster strength
- Network graphs revealing inter-dynasty relationships
- Time-series plots tracking dynasty dominance

## Interpretation

These dynasties represent more than statistical patterns - they reflect fundamental shifts in technology, consumer behavior, and economic conditions that shaped NASDAQ over four decades.
