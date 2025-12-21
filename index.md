---
layout: default
title: "Hamahem | Market Dynasties"
subtitle: "A Data Story"
mathjax: true
ext-js:
  - "https://cdn.jsdelivr.net/npm/echarts@6.0.0/dist/echarts.min.js"
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

<p style="text-align: justify;">Before digging into the ruins, let us take a step back and try to examine the <strong>NASDAQ landscape as a whole</strong>. By doing this, we can understand how power was distributed across the ages.</p>

<p style="text-align: justify;">Consider this our <strong>initial cartography</strong>; a necessary mapping of the territory before the expedition begins. Our objective here is to discern whether the evolution of the NASDAQ reveals coherent, large-scale structures, or if it is merely a collection of isolated events.</p>

- Is the history of this market written by a single, unbroken lineage, or is it a saga of <strong>competing dynasties</strong>?
- Do these dynasties reign in isolation, or do we find evidence of <strong>rival powers coexisting</strong> in the same era?
- Is the dominion of these powers continuous and unbroken, or does history record only episodic bursts of authority?
- To which sectors do these dynasties owe their strength?
- Does the fall of dynasty birth a new age of multiple dynasties?

<p style="text-align: justify;">Let us commence our expedition by doing a yearly analysis. By examining these annual layers, we capture the immediate configuration of power before time cements them into longer epochs. After many records dusted off, archives retrieved and data clustered, we can observe that firms are grouped into dynasties, and each dynasty is represented as a circle whose size reflects its total market capitalization. The color of each circle corresponds to the dynasty's primary sector, allowing economic scale and sectoral identity to be read simultaneously. Each year can thus be interpreted as a snapshot of the market's internal structure at a given historical moment.</p>

<!-- INSERT HTML FILE: circle_packing_plot.html -->

{% include circle_packing_plot.html %}

<p style="text-align: justify;">Let us observe this dynasty timeline! It appears as that the market powers are rarely uniform. Most years are composed of <strong>at most</strong> four main dynasties of varying sizes, coexisting within the same historical moment. The relative balance between these dynasties shifts over time: in some years, one dynasty occupies a noticeably larger share of the space, while in others, authority is fragmented, shared among a confederation of rival dynasties in the NASDAQ territory. Can you already spot a <strong>dominant dynasty</strong>  which has withstood the tests of time?The shifting colors reveal that dynastic power is tied to sectoral identity, which evolves rather than remaining static. This confirms that the market is shaped by broad, collective forces rather than the isolated actions of individual firms. Annual snapshots are limited by their static nature. While they capture a specific moment in time, they fail to distinguish between long-term stability and fleeting trends.</p>

{% include lifespan_embed_theme.html %}

A finer view of the market is provided by the status table.

{% include status_table.html %}

<p style="text-align: justify;">What is this? Ah, I see... you have reconfigured the projection into a decadal perspective? Excellent initiative! In aggregating the data to this scale, the chaotic fluctuations of the market recede, revealing the true architectural pillars of the NASDAQ civilization. Observe the timeline above, we can now witness the dynasty which has survived the many hardships of the NASDAQ territory, has evolved in its sectors continuously and has maintained a thread of continuity across every year from the 1980s to the present day: <strong>The D1 DYNASTY (à nommer)</strong>.</p>

<p style="text-align: justify;">In contrast, we see the rise and fall of other great houses. <strong>D2 Dynasty</strong> ruled as a formidable power during the early years, only to dissolve after 22 years and cede its place at the turn of the millennium. Following this transition, new powers such as <strong>D5 Dynasty</strong> and the more recent <strong>D7 Dynasty</strong> have emerged, claiming the NASDAQ landscape of the modern era.</p>

<p style="text-align: justify;">In these archives, power is measured by endurance. A true dynasty is one that withstands the erosion of time, holding its throne and maintaining its cohesion long after the initial conquest. Therefore, does endurance imply economic magnitude?</p>

{% include radar_embed_theme.html %}

<p style="text-align: justify;">Oh! You have more archival plots to show me? Interesting...This plot highlights the diversity of dynastic profiles: some dynasties grow to substantial size, others remain more modest, and several coexist at comparable scales.</p>

<p style="text-align: justify;">Together, these perspectives reveal a continuous history rather than isolated events. From an annual to a decadal analysis, the market emerges as a structured landscape where dynasties coexist, overlap, and compete.</p>

<p style="text-align: justify;">We have now mapped the terrain. It is time to leave the survey behind and descend into the history itself. Let us now dig into the ruins of the NASDAQ!</p>

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Shifts in the Balance of Power</strong></h1>
</div>
<!-- 
<video src="{{ '/assets/video/Section.mp4' | relative_url }}" autoplay loop muted playsinline style="width: 70%; height: auto; display: block; margin: 0 auto;"></video>  -->

<p style="text-align: justify;">Great! Let us take a break from the digging. I've collected some artifacts which might show how power was precisely distributed on a decadal scale.</p>

<p style="text-align: justify;">What are these ancient manuscripts you have uncovered? It seems that they tell us who was the most dominant dynasty throughout the NASDAQ history based on a given score **(Expliquer brièvement le score????)** It looks like if almost every dynasty had at least one turn in reigning the majority of the NASDAQ territory. And check out these dips in power! They surely must be a cause of major events that happened in the past. If we refer to the records, we can probably find the events that have caused these dips:</p>

<p style="text-align: justify;"><strong>—</strong> Ah! The Dot-com bubble was a speculative frenzy in the late 1990s where investors poured money into Internet-based startups, driving stock valuations to unsustainable heights. When the bubble burst in 2000, it triggered a massive market crash that wiped out trillions of dollars in wealth and caused the collapse of countless technology companies. We can for sure observe a dip in the year 2000</p>

<p style="text-align: justify;"><strong>—</strong> The 2020 COVID-19 pandemic triggered a sharp, initial market collapse as global economies entered lockdown and uncertainty peaked. However, the NASDAQ subsequently staged a historic rally to record highs, driven by a massive boom in technology stocks that capitalized on the accelerated shift to remote work and digital services. There's definitely a swell beginning of 2020</p>

<p style="text-align: justify;"><strong>—</strong> Oh here's another major event: The 2008 market crash. This event triggered a systemic collapse of the global banking sector, driven by the sudden implosion of the subprime mortgage bubble. The resulting contagion wiped out trillions in equity and plunged the world economy into the deepest recession since the 1930s. Strange... No apparent dip in power but rather an increase in the energy sector of the <strong>D5 Dynasty</strong>!</p>

{% include yearly_embed_theme.html %}

<p style="text-align: justify;">How interesting! Few dynasties have kept and even risen in dominance. Here below, I have aggregated all my findings to a decadal scale. This time window can show us the existence of a broader structure and maybe how often does each dynaysty dominate within a given decade.</p>

{% include decade_embed.html %}

<p style="text-align: justify;">Oh look! What have we said about the <strong>D1 dynasty</strong>?... Even though the it has survived the longest, it's reign in power has been relatively dwarfed compared to its neighbouring colossal houses. Therefore endurance doesn't necessarily mean most powerful. Furthermore, there has been also a complete shift of the sectoral identity of these powers following the turn of the new millennium. Let us dig deeper, why does dominance change?</p>

<p style="text-align: justify;">Let us assemble the data so that we can study more precisely the transition from   one dominant dynasty to another. We can observe which dimensions increase for the incoming dynasty and which decline for the outgoing one.</p>

<!-- -- INSERT TABLE / BOARD: Decomposition of dominance transitions -->

{% include power_shift_table.html %}

<p style="text-align: justify;">This table above decomposes the dominance score to identify exactly which structural factors caused the shift in powe Regime changes are often relative: an outgoing dynasty is frequently overtaken by a faster-rising rival rather than suffering a total collapse.  <strong>(Ahmed et Meumeu, vous pouvez mettre une analyse pour cette table, elle est assez technique)</strong></p>

<p style="text-align: justify;">[TODO NOT REFINED]Yet as these shifts unfold, another pattern emerges. Changes in leadership are frequently accompanied by changes in the market’s primary sector, suggesting that dominance may not erode solely from within a dynasty. Instead, it may reflect a broader reorientation of the market itself—an эпохal shift in what the market values and invests in. Whether power is lost because dynasties fail, or because time moves on to favor something new, is a question we postpone for now.</p>

<p style="text-align: justify;">[TODO NOT REFINED]By identifying the dominant drivers of each transition, we are nevertheless able to construct a structured map of succession—a genealogical trace of how power migrates across dynasties and sectors. This culminates in a chord-like representation of transitions, where the flow of dominance reveals not isolated failures, but a continuous reallocation of influence.</p>

{% include chord_sector_shifts.html %}

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Entering a Dynasty</strong></h1>
</div>

<p style="text-align: justify;">Let us dig elsewhere...Now we will try to observe these dynasties more closely. At this point of view, we can truly admire the structure of a dominant dynasty. We can ask ourselves:</p>

- How do these dynasties differ from one to another?
- What temporal footprint do these dynasties leave in the NASDAQ history?

<p style="text-align: justify;">Behold the archives we have unearthed below! They represent the complete bookkeeping of a single dominant dynasty, ranging from its sector composition to its entire wealth in total market cap. We can also observe the ratio soon to be delisted firms, effectively banished from the NASDAQ territory.</p>

{% include inside_dynasty_dashboard_v2.html %}

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Internal Regimes</strong></h1>
</div>

<p style="text-align: justify;">These dynasties change their internal structure constantly. Multiple decisions are being made to keep the dynasty well and alive in the harsh environment of the NASDAQ market. Therefore, who makes these decisions? What is the shape of the hierarchy governing the dynasty? Is the power centralized or distributed?</p>

<p style="text-align: justify;">Luckily, these bookkeeping archives have kept a history of all the most wealthiest firm of the dynasty at a given year. Could they have been the governing emperor? Let's write them down and compare:</p>
{% include compstat.html %}

{% include emperor_tracking.html %}

<p style="text-align: justify;">Look at how chaotic the history of the dominant stock is for the D1 dynasty. There has been a total of 26 unique dominant stocks a switch occurs every two years it seems. If we fly over all the dynasties which have perished, at the end of their lifetime, a less wealthy dominant stays on top. This raises the question: Who among all of these wealthy stocks truly had governance over their dynasty?</p>

{% include emperor_legitimacy.html %}

<p style="text-align: justify;">Yes! There seems to be a alot of information. Let us go slowly into this emperor legitimacy data. If we observe how all dynasties who have perished, they have all lost regime rank in the year before death. Only exception is the D0 Dynasty dying, perishing with a strong emperor.</p>

<div class="laurel-title medium">
  <img src="{{ '/assets/img/plume.png' | relative_url }}" alt="Plume">
  <h1><strong>Succession and Inheritance</strong></h1>
</div>

<div class="laurel-title small center">
  <img src="{{ '/assets/img/laurel_L.png' | relative_url }}" alt="Left laurel">
  <h1><strong>The Succession Game</strong></h1>
  <img src="{{ '/assets/img/laurel_R.png' | relative_url }}" alt="Right laurel">
</div>

<p style="text-align: justify;">Observation reveals patterns. Construction reveals understanding.</p>

<p style="text-align: justify;">You are given a fixed budget of <span class="hl" style="--hl-bg: #D93B3B;"><strong>$15.0M</strong></span> and asked to build a dynasty of <strong>10 stocks</strong>. Your objective is simple in form but difficult in execution: allocate your capital across these 10 choices in a way that produces the strongest and most resilient portfolio.</p>

<p style="text-align: justify;">Each stock has a cost. Selecting one reduces the capital available to the others. Concentrating your budget on a few dominant players may deliver strength, while spreading it more evenly may offer stability. The constraints are intentional, they mirror the limits under which every historical dynasty was formed.</p>

<p style="text-align: justify;">To begin, search the archive to find stocks and add them to your selection. Once chosen, drag and drop each stock into the portfolio grid to define your dynasty. You may rearrange or replace holdings at any time, as long as you remain within the budget and select exactly ten stocks.</p>
