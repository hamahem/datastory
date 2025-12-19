---
layout: default
title: "Hamahem | Market Dynasties"
subtitle: "A Data Story"
mathjax: true
---

{% include cover.html
  image="/assets/img/cover2.webp"
  title="The Rise and Fall of Market Dynasties"
  subtitle="An Archaeological Approach to NASDAQ's Lost Empires"
  team="A Data Story Project by <span class='hl' style='--hl-bg: #D93B3B;'>Team Hamahem</span>"
  authors="Mohamed Sharif • Rafic Abdallah • Ahmed Nadim • Bastien Gaussent • Léo Brückl"
%}

<!-- # **Introduction** -->

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Introduction</strong></h1>
</div>

<p style="text-align: justify;">As it’s often said, markets have short memories. Fortunes are made, empires rise, and just as quietly they fall into obscurity. On the NASDAQ, thousands of companies have walked this familiar path, yet the grand patterns that bind their stories together often remain hidden beneath daily price movements and quarterly headlines. We celebrate today’s tech titans, but what of the giants that once ruled the exchange and have since faded from memory?</p>

<p style="text-align: justify;">Like explorers sifting through the ruins of ancient civilizations, we turn our gaze to the past not to relive old triumphs, but to uncover the deeper forces that shape success and failure. Are market leaders solitary emperors commanding entire eras, or do true dynasties rise through the combined strength of many powerful players? And when one empire collapses, does another inevitably rise to take its place?</p>

> **Do stock markets form dynasties, and if so, can we trace their rise, reign, and eventual decline?**

<p style="text-align: justify;">By clustering decades of NASDAQ history into shared patterns of growth and decay, we seek to uncover the hidden lineages of market power. From identifying each dynasty’s Golden Age to tracking the shifting balance of leadership within them, this project ventures beneath surface-level trends to reveal the ancient forces still shaping modern finance. Beneath the noise of prices and time, the echoes of forgotten empires may still guide the future.</p>

<div class="laurel-title small center">
  <img src="{{ '/assets/img/laurel_L.png' | relative_url }}" alt="Left laurel">
  <h3><strong>The Royal Hamahem Family</strong></h3>
  <img src="{{ '/assets/img/laurel_R.png' | relative_url }}" alt="Right laurel">
</div>

{% include team_members.html %}

### **The Imperial Archives**

Let us explore the records that remain.

{% include datasets.html %}

## **The Codex of Methods**

This codex records the tools and procedures through which raw market data is transformed into structure, patterns, and dynasties. <span class="hl" style="--hl-bg: #56bce4;">Click on the books</span> to learn more.

{% include bookshelf.html %}

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>The Grand Panorama</strong></h1>
</div>

### Seeing the Market from Above

Before any excavation begins, historians step back. Individual ruins tell compelling stories, but they rarely explain the shape of a civilization. To understand how power was distributed and how eras were structured, one must first observe the landscape as a whole.
In this section, we deliberately step away from firm-level narratives. We examine the NASDAQ as a historical landscape, shaped by successive regimes of dominance. This is the map before the expedition.
This initial distance is not a retreat from detail, but a necessary condition for making sense of it.
From this elevated vantage point, the first task is to determine whether the market’s evolution exhibits large-scale structure at all. The objective of this section is therefore to identify persistent patterns in the NASDAQ across time, beyond short-term fluctuations and individual success stories.
Specifically, we examine whether market dominance is continuous or episodic, whether it is concentrated within a single dynasty or shared among several, and whether multiple dynasties coexist during the same historical periods. To address these questions, we analyze how many dynasties are active at any given time, whether their periods of influence overlap or succeed one another, and how market power is distributed among them.
Only once these broad contours are established does it become meaningful to examine transitions, internal structures, or decline.
With these objectives in mind, we begin at the finest temporal resolution considered in this section: the year. Observing the market year by year allows us to capture the immediate configuration of power before aggregating or smoothing it over longer periods.

For each year, firms are grouped into dynasties, and each dynasty is represented as a circle whose size reflects its total market capitalization. The color of each circle corresponds to the dynasty’s primary sector, allowing economic scale and sectoral identity to be read simultaneously. Each year can thus be interpreted as a snapshot of the market’s internal structure at a given historical moment.

<!-- INSERT HTML FILE: circle_packing_plot.html -->

{% include circle_packing_plot.html %}

Viewed in this way, the market rarely appears uniform. Most years are composed of multiple dynasties of varying sizes, coexisting within the same historical moment. The relative balance between these dynasties shifts over time: in some years, one dynasty occupies a noticeably larger share of the space, while in others, power is more evenly distributed.
The changing palette of colors further indicates that dynastic influence is closely tied to broader sectoral configurations, which evolve across periods rather than remaining fixed. Even without focusing on individual firms, this perspective already suggests that the market’s structure is dynamic, layered, and shaped by recurring collective forces rather than isolated actors.
However, year-by-year observations alone do not reveal whether such configurations are stable or fleeting.

To move beyond annual variation and assess persistence over time, we shift to a decadal perspective. Aggregating results at this scale allows transient fluctuations to recede and recurring patterns of prominence to become visible.

Rather than tracking precise market sizes, this perspective summarizes how often different dynasties occupy positions of prominence within a given decade, based on a composite measure that captures

Interpreting dominance at this scale requires a definition that extends beyond sheer size. Dominance is therefore not reduced to market capitalization alone, but understood as a composite form of influence reflecting several structural dimensions of a dynasty’s position within the market during a given year.

Market share captures scale, sectoral focus reflects coherence of economic identity, temporal depth accounts for institutional embeddedness, and measures of breadth and concentration describe how unified or fragmented influence is across firms and sectors. By combining these elements, dominance is defined as a balance between scale, coherence, maturity, and structural reach.

At the decadal level, this definition allows us to observe how often different dynasties attain positions of prominence, without assuming that dominance must be constant or uncontested.

<!-- INSERT HTML FILE: dynasty_reign_by_decade.html -->

{% include decade_embed.html %}

Seen through this lens, decades are not governed by uninterrupted continuity. Leadership shifts within the same period, and dominance, when it emerges, tends to be partial rather than absolute. This reinforces the idea that market history unfolds through overlapping regimes rather than clean successions.

Yet prominence does not necessarily imply economic magnitude.

To disentangle influence from size, we finally examine dynasties at the decadal scale through the lens of average market capitalization alone. This comparison isolates economic magnitude from other structural characteristics, allowing dynasties within the same period to be contrasted on scale alone.

This view highlights the diversity of dynastic profiles: some dynasties grow to substantial size, others remain more modest, and several coexist at comparable scales. Importantly, economic magnitude varies independently of other dimensions of influence, suggesting that no single metric fully captures a dynasty’s role within the broader landscape.

{% include radar_embed_theme.html %}

Taken together, these perspectives form a continuous progression rather than isolated observations. By starting with yearly configurations, extending to decadal prominence, and finally isolating economic scale, the market gradually reveals itself as a structured historical landscape.

Dynasties coexist, expand, contract, and overlap, producing patterns that only become visible when individual trajectories and short-term fluctuations are set aside. This large-scale view establishes the terrain on which the remainder of the analysis unfolds, preparing the transition from static structure to historical movement in the sections that follow.

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Shifts in the Balance of Power</strong></h1>
</div>
<!-- 
<video src="{{ '/assets/video/Section.mp4' | relative_url }}" autoplay loop muted playsinline style="width: 70%; height: auto; display: block; margin: 0 auto;"></video>  -->

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Entering a Dynasty</strong></h1>
</div>

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Internal Regimes</strong></h1>
</div>

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Culture and Identity</strong></h1>
</div>

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Succession and Inheritance</strong></h1>
</div>

<div class="laurel-title small center">
  <img src="{{ '/assets/img/laurel_L.png' | relative_url }}" alt="Left laurel">
  <h1><strong>The Succession Game</strong></h1>
  <img src="{{ '/assets/img/laurel_R.png' | relative_url }}" alt="Right laurel">
</div>

Observation reveals patterns. Construction reveals understanding.

You are given a fixed budget of <span class="hl" style="--hl-bg: #D93B3B;">**$15.0M**</span> and asked to build a dynasty of **10 stocks**. Your objective is simple in form but difficult in execution: allocate your capital across these 10 choices in a way that produces the strongest and most resilient portfolio.

Each stock has a cost. Selecting one reduces the capital available to the others. Concentrating your budget on a few dominant players may deliver strength, while spreading it more evenly may offer stability. The constraints are intentional, they mirror the limits under which every historical dynasty was formed.

To begin, search the archive to find stocks and add them to your selection. Once chosen, drag and drop each stock into the portfolio grid to define your dynasty. You may rearrange or replace holdings at any time, as long as you remain within the budget and select exactly ten stocks.
