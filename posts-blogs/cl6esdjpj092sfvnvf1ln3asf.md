## Could AsyncApi Make A Dent on Climate Change?

## Can an API specification really change the world?

It may at first sight seem like linking an emergent API specification to [the biggest existential challenge of our time](https://www.theguardian.com/environment/2021/nov/01/david-attenborough-urges-leaders-at-cop26-to-be-motivated-by-hope-not-fear) would be like asking whether a new format for restaurant menus might impact on the [global obesity epidemic](https://www.worldobesity.org/news/one-billion-people-globally-estimated-to-be-living-with-obesity-by-2030).

A closer look however suggests the AsyncApi specification, by accelerating and optimising event driven APIs, could help significantly reduce global emissions, in turn increasing our chances of impactful course correction. Let's break it down.

## Calculating the carbon footprint of API traffic

CISCO [estimates](https://www.networkworld.com/article/3323063/cisco-predicts-nearly-5-zettabytes-of-ip-traffic-per-year-by-2022.html) that by 2022 a gargantuan 4.8 zettabytes of data will be transferred over IP addresses. More than all data transferred in the previous 32 years since the Internet was launched.

Using [the most conservative estimates](https://www.cmswire.com/digital-experience/calculating-the-pollution-effect-of-data/), that amount of data equates to 72 million megawatt hours which in turn roughly equals 20 million tonnes of CO2. This is [the equivalent](https://www.epa.gov/energy/greenhouse-gas-equivalencies) of driving 4 million cars for a year. We would [need to plant](https://www.encon.be/en/calculation-co2-offsetting-trees) 620-920 million trees to offset that many emissions, which would be about 2000 Sherwood Forests or all the trees in Ireland. Every year.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659734334578/MVzTiTCKh.png align="left")

These likely conservative estimates are subject to a lot of nuances, caveats and technical debate, but the conclusion is unequivocal: internet data traffic is a major source of pollution and climate change driver.

But we still haven't made the connection to AsyncApi! The next step in estimations is to roughly calculate how much of the traffic above is mediated specifically by APIs. One good proxy is Akamai, which [routes 15-30% of all internet traffic](https://www.slintel.com/tech/cdn/akamai-market-share). They [found](https://www.akamai.com/site/it/documents/state-of-the-internet/state-of-the-internet-security-retail-attacks-and-api-traffic-report-2019.pdf) that 83% of all traffic through their network was API traffic, and only 27% was html website traffic. If this figure translates more broadly, which is likely, that would mean that some 16 million tonnes of CO2 are generated each year by APIs.

But what kind of APIs? In 2020 Smartbear's State Of API Report estimated 82% of APIs were REST APIs. A closer look suggests that 93-95% of APIs in their survey are essentially synchronous command response APIs, and only 5-7% are asynchronous, event driven APIs. Again, the precise numbers will differ, but the overall distribution is clear. A very significant proportion of those APIs are queried or query via polling, where repeated calls are made to see if there has been a state change. According to [a 2013 estimate](https://nordicapis.com/stop-polling-and-consider-using-rest-hooks/) by Zapier, 98.5% of polling requests return empty, meaning all the emissions involved across the request lifecycle are entirely wasted. The situation has almost certainly improved dramatically in the intervening 9 years, but is an example of the type of inefficiencies involved.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659734517163/xMPXlqasw.png align="left")

Which gets us closer to AsyncApi!

## The green potential of event driven architecthure

Increasingly, there is a shift from command driven, to event driven architectures, where instead of waiting for a specific command to trigger a behaviour, that behaviour is tied and automated asynchronously to changes in conditions, that is to say, events. This has huge potential and possibilities, which is why it is growing so rapidly as an architectural paradigm. Gartner projected that by the end of this year (2022)

- Event notifications will form part of over 60% of new digital business solutions.
- Over 50% of business organizations will participate in event-driven digital business ecosystems.
- 50% of organizations managing APIs will incorporate mediation of event notifications into their operations.
- Most leading providers of application platforms will include high-productivity tools for event-driven design.

The environmental potential of switching from traditional REST APIs and similar command-request approaches, is that you can tie behaviour and consumption to climate aware triggers. You could apply graceful degradation when the grid is not running on renewables, and full performance when it is. You could have an IoT device automatically switch to low energy mode when it doesn't require constant activation. Instead of relying on people to remember to turn off lights or devices, they could be switched on and off upon detecting the user's presence or absence. Indeed, such architectures underpin most smart devices.

## The role of AsyncApi in greening event-driven communication

One of the greatest barriers to adoption of this paradigm, which could significantly cut into the amount of data transferred and energy consumed by the internet, is the historic absence of a common language to facilitate interoperability. This is where AsyncAPI (finally!) comes in. It provides a standard and a language to describe event based, asynchronous communication, greatly enabling not just inter-api communication, but also drastically cutting developer design and implementation time, by making possible a wide range of automations, akin to the more familiar OpenApi. Such a common language acts as a universal translator, which allows the emergence of a network of devices, workflows and tools attuned to one another in an emergent, inductive way.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659738212300/10QTPegqq.png align="left")

In addition, the AsyncApi community has the historic opportunity, at this early stage in the spec's evolution, to dedicate serious attention to any way in which it could not just describe, but nudge the nature of event driven communication that is coming, or like Gibson said, is here, just not evenly distributed. It may be that there are elements that could be added to the specification that could greatly increase the environmental potential of all applications built in line with its specification. For instance, being able to flag whether a network is delay tolerant or not, could make a huge difference toward allowing a wide range of energy aware applications, as well as widening digital access and inclusion, and facilitating innovation, specially in the Global South.

This is a very early, yet therefore also a key moment. Event driven, asynchronous communication is, with cloud and serverless, part of the next (current?) wave of technological paradigms. If AsyncApi can enable and influence the transition from a command-request, synchronous, and climate blind ecosystem, to an event-driven, asynchronous, and environmentally conscious paradigm, then, after all this, yes, I do believe it could be part of making an observable dent on world emissions, and therefore on climate change.

For a higher level introduction to the shift to an event driven society, and AsyncApi, you can dive into my [talk on the subject](https://youtu.be/McO_ONKxwNU) for ApiDays in my talks section.
