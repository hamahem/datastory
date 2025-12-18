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


# PART I — The Grand Panorama  
## Seeing the Market from Above

Before any excavation begins, historians step back. Individual ruins tell compelling stories, but they rarely explain the shape of a civilization. To understand how power was distributed and how eras were structured, one must first observe the landscape as a whole.

In this section, we deliberately step away from firm-level narratives. We examine the NASDAQ as a historical landscape, shaped by successive regimes of dominance. This is the map before the expedition.

---

## Analytical Scope

The objective of this section is to identify large-scale structures in the NASDAQ across time. Specifically, we examine whether market dominance is continuous or episodic, whether it is concentrated within a single dynasty or shared among several, and whether multiple dynasties coexist during the same historical periods.

To address these questions, we analyze how many dynasties are active at any given time, whether their periods of influence overlap or succeed one another, and how market power is distributed among them. This high-level perspective allows us to assess whether the market’s evolution follows a unified regime or is instead characterized by recurring phases of competition and dominance.

---

## Yearly Dynastic Structure

At the widest scale, we begin by observing the market year by year through a dynastic lens. For each year, firms are grouped into dynasties, and each dynasty is represented as a circle whose size reflects its total market capitalization. The color of each circle corresponds to the dynasty’s primary sector, allowing economic scale and sectoral identity to be read simultaneously. This representation treats each year as a snapshot of the market’s internal structure, offering an immediate sense of how power is distributed at any given moment.

<!-- INSERT JSON FILE: dynasty_data_circle_packing.json -->

Viewed in this way, the market rarely appears uniform. Most years are composed of multiple dynasties of varying sizes, coexisting within the same historical moment. The relative balance between these dynasties shifts over time: in some years, one dynasty occupies a noticeably larger share of the space, while in others, power is more evenly distributed.

The changing palette of colors further indicates that dynastic influence is closely tied to broader sectoral configurations, which evolve across periods rather than remaining fixed. Without focusing on individual firms, this view already suggests that the market’s structure is dynamic, layered, and shaped by recurring collective forces rather than isolated actors.

---

## Dominance Across Decades

To step back from annual variation and gain a longer-term perspective, we then consider how dynastic presence unfolds across decades. Instead of tracking precise market sizes, this perspective summarizes how often different dynasties occupy positions of prominence within a given decade, based on a composite measure that captures multiple dimensions of influence.

### Defining a Dominant Dynasty

To interpret dominance at a longer time scale, we must first clarify what we mean by a *dominant dynasty*. Dominance here is not reduced to size alone. Instead, it is understood as a composite form of influence, capturing several dimensions of a dynasty’s position within the market during a given year.

Market share plays a central role, reflecting the proportion of total market capitalization controlled by the dynasty. This is complemented by measures of sectoral focus, which capture whether a dynasty is concentrated around a coherent economic identity or dispersed across unrelated activities. Temporal depth also matters: older dynasties tend to be more established, benefiting from accumulated presence and institutional embeddedness. Finally, breadth and sectoral concentration are taken into account, reflecting both the number of constituent firms and the extent to which influence is unified rather than fragmented.

By combining these elements, dominance is defined not as a single metric but as a balance between scale, coherence, maturity, and structural reach. At the decadal level, this allows us to observe how often different dynasties attain such a position of prominence over time, without assuming that dominance must be constant or absolute.

<!-- INSERT JSON FILE: dynasty_reign_by_decade.json -->

The resulting representation emphasizes that decades are not governed by uninterrupted continuity. Leadership changes hands within the same period, and dominance, when it emerges, tends to be partial rather than absolute. This reinforces the idea that market history is composed of overlapping regimes rather than clean successions.

---

## Economic Scale at the Decadal Level

Finally, we examine dynasties at the decadal scale through the lens of average market capitalization alone. This comparison highlights the diversity of dynastic profiles within the same period: some dynasties grow to substantial size, others remain more modest, and several coexist at comparable scales.

Importantly, this view does not privilege any single form of influence. Instead, it reveals that economic magnitude varies independently of other structural characteristics, and that no single dimension fully captures a dynasty’s role within the broader landscape.

<!-- INSERT JSON FILE: dynasty_decade_market_cap.json -->

---

## Synthesis

Taken together, these perspectives establish the purpose of this opening section. By stepping back from individual trajectories and short-term fluctuations, the market reveals itself as a structured historical landscape. Dynasties coexist, expand, contract, and overlap, producing patterns that only become visible at distance.

This large-scale view sets the stage for the deeper analysis that follows, where we move from observing the terrain to tracing how it shifts over time.

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Market Dynasties</strong></h1>
</div>
<!-- 
<video src="{{ '/assets/video/Section.mp4' | relative_url }}" autoplay loop muted playsinline style="width: 70%; height: auto; display: block; margin: 0 auto;"></video>  -->

<!-- <p style="text-align: justify;">Market dynasties are not just about power and success. They are also about ruin and extinction. This section explores the ruins and extinctions of market dynasties.</p> -->




<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Power & Succession</strong></h1>
</div>

<!-- <p style="text-align: justify;">Power and succession are the key to market dynasties. This section explores the power and succession of market dynasties.</p> -->

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Ruins & Extinctions</strong></h1>
</div>

<!-- <p style="text-align: justify;">Ruins and extinctions are the inevitable fate of market dynasties. This section explores the ruins and extinctions of market dynasties.</p> -->
