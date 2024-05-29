---
title: "Fact check: How Big Is WordPress?"
datePublished: Sat Oct 29 2022 09:09:52 GMT+0000 (Coordinated Universal Time)
cuid: cl9tpcs28000e09lfbppc52no
slug: fact-check-how-big-is-wordpress
cover: https://cdn.hashnode.com/res/hashnode/image/unsplash/JKUTrJ4vK00/upload/v1667034037077/UBoHM4w6w.jpeg
tags: statistics, wordpress, web, webdev, cms

---

I can think of marketing, economic, even historical reasons to care about the current spread of WordPress, given its prominence in the [eye-wateringly vast collection of content](https://www.tonergiant.co.uk/blog/2017/06/if-you-printed-the-internet/) known as the Worldwide Web.

But my own concerns in this series are more immediate, and more urgent. Because the Internet, the collective machine that powers the Web, is also [among the most environmentally destructive](https://almanac.httparchive.org/en/2022/sustainability#understanding-the-environmental-impact-of-the-web) inventions in the world today. If WordPress really occupies a significant part of the Internet, it would mean it has a notable role to play in our battle against climate change - as an ally or an obstacle.

To no one's surprise, arriving at reliable, or simply evidence based estimates, is no easy task.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1666958276683/MQ4XqNpjT.png align="left")

## Wordpress: 40% of the Web?

The official WordPress.org website celebrates "[powering 40% of the web](https://en-gb.wordpress.org/40-percent-of-web/)". This figure is ubiquitous whenever WordPress is discussed as a platform.

The 40% quoted by WordPress.org comes from [W3Techs calculations](https://w3techs.com/blog/entry/40_percent_of_the_web_uses_wordpress). It is a carefully calculated estimate with a transparent methodology, so, as long as we are clear about what is being measured, WordPress.org is justified in quoting it.

The W3Techs percentages are drawn from a targeted pool of the top 10 million websites as indexed by Alexa. They justify this by the assumption that these are all real active websites, whereas beyond this number there are a large number of dead or bot populated websites which should not be counted.

Alexa has been retired as a website, and it's unclear what future estimates will be based on, and how comparable they are, but for now [Alexa persists as an API until the end of 2023](https://twitter.com/jdevalk/status/1521748709696061446) so these numbers can be run for one more year.

That means that to be more accurate, WordPress.org should say "powering 40% of the top 10 million websites". As discussed in my previous post on [the size of the Worldwide Web](ismaelvelasco.dev/how-big-is-the-worldwide-web), I estimate there are 350 million resolvable websites, and the likely number of non-spam, active WordPress websites is, as we shall see, much higher than 10 million.

This does not invalidate the value of the W3Techs metrics, because they are clear about what they cover and have a clear rationale and evidence base. What it does make clear however is that the claim that WordPress runs in 40% of the Worldwide Web an overstatement.

## 455 million WordPress websites?

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1666958188999/PW9Hsy2RY.png align="left")

Although not officially quoted by WordPress.org, the figure of 455 million WordPress sites is quoted very frequently in recent [websites discussing WordPress stats](https://www.google.com/search?q=wordpress+%22455+million%22&oq=wordpress+%22455+million%22)

[One indicative example](https://techjury.net/blog/percentage-of-wordpress-websites/) states:

> There are currently over 455 million sites that use WordPress.

> Yes, that’s not a typo; the number is 455 with six zeroes.

Where do these numbers come from?

I have not been able to find the original source of this claim, but I have been able to track it at least as far back as December 2020, when the Internet Archive has a record of [a secjuice blog](https://web.archive.org/web/20201213184541/https://www.secjuice.com/make-wordpress-pingback-great-again/) stating:

> According to Netcraft, 1.3 billion websites exist to date, of which 35% (roughly 455 million) are on WordPress.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661792220642/hA-FuGJeh.png align="left")

We can see from this and other 2020 blogs that 1.3 billion website figure comes from the [January 2020 Netcraft Server Survey](https://news.netcraft.com/archives/category/web-server-survey/page/6/). This was already a misunderstanding of the numbers, when in reality, the Netcraft survey estimated the number of active websites at a fraction of that (c. 2 million), with the rest of the web (adding up to the 1.3 billion) considered "dead" by them. I cover this in my [blog post on the size of the Web](Web%5D(ismaelvelasco.dev/how-big-is-the-worldwide-web)).

While the 35% figure comes, as I noted, originally from W3techs.com. The 455 million WordPress websites is the result of applying the W3techs percentage to Netcraft's 1.3 billion gross number (active and inactive).

The problem is that this involves comparing apples and pears, amounting to a sampling error of more than 10,000% (40% of 10 million vs 40% of 1 billion)!

4 million of the highest ranking WordPress websites is still hugely impressive and impactful, but it is orders of magnitude less than 455 million WordPress websites. This misunderstanding (well beyond conventional frippery) has memefied and become even more de-anchored from fact as time has gone on. Both the Netcraft numbers and the W3Techs percentages have changed in the years since the 455 million figure was coined, but the number 455 million number remains constant, and cascades through the marketing claims of secondary products. As an example, a WordPress plugin claimed in May 2022 that Dogecoin (because of course) can now be accepted by 455 million websites:

%[https://twitter.com/cb_doge/status/1522632242018750464?t=2GjpS9XmlPSEGXOuNwi_PQ&s=19] 

For anyone reading this post, it should be clear that the estimate of 455 million WordPress websites should be consigned to the bonfire of the vanities.

## Best estimate

While the methodology used by W3Techs has its merits, and is a good marketing stat, it is not the best approach available.

I have covered the (somewhat opaque) methodology of Builtwith.com in my previous post. Their extensive automated mapping of the web, which, unlike the Alexa ranking, does not aim for most popular only but instead attempts 100% automated coverage of live sites, detects [36 million active WordPress websites](https://trends.builtwith.com/cms/WordPress) as of October 2022. It also ambiguously cites 60 million "websites that are WordPress customers", which I take to mean websites that have historically been detected as using WordPress, 24 million of which have moved on to other technologies (BuiltWith gives you both current and historic technology uses).

There are a number of BuiltWith alternatives, but they mostly seem to have a much more limited scanning range and come up with much smaller numbers (as of October 2022):

[W3Techs](https://w3techs.com/technologies/details/cm-wordpress) detects 4 million websites.

[Wappalyser](https://www.wappalyzer.com/technologies/cms/wordpress/) detects 5 million WordPress sites.

[WhatCMS](https://whatcms.org/c/WordPress) detects 6 million websites.

[Similar Tech](https://www.similartech.com/technologies/wordpress) detects 7 million sites.

[Hunter](https://hunter.io/technologies/wordpress) detects 12 million sites.

[Rescan](https://rescan.io/technology/wordpress/) is possibly the closest to BuiltWith, and detects 17 million domains, which it conflates with websites, whereas other trackers distinguish between the two, as a single domain could include a huge number of websites in its subdomains.

From this review we can infer that the lower estimates (4-7 million websites) likely use a methodology similar to W3Techs, using a ranked subset (e.g. Alexa rank, Google PageRank rank, Page authority).

Mid estimates (12-17 million) likely rely on domain scanning.

High estimates like BuiltWith's (36 million) likely rely on comprehensive, though not exhaustive, IPV4 port scanning, and are likely the most accurate.

## What percentage of the Web runs WordPress?

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667034476358/SoXskZr1g.png align="left")

A recap of [my conclusions](%5Bhttps://ismaelvelasco.dev/how-big-is-the-worldwide-web#heading-so-how-big-is-the-web%5D) regarding the size of the Worldwide Web is as follows:

> Triangulating the datapoints from Netcraft, Internet Live Stats, BuiltWith, Domainnamesstat and Cesys, this is my own best estimate:

> * 1.9 billion internet services running on IPv4 addresses
>     

* 706 million hosts (200 million physical, 406 million virtual)
    
* 614 million registered domains
    
* 350 million resolvable domains (active websites)
    

Accordingly, adopting the BuiltWith numbers as the best-in-class estimate of live WordPress websites, WordPress accounts for an estimated 10% of all websites.

However these 350 million websites are not all part of what W3Techs fairly and usefully designates "the meaningful web".

In their own analysis of Alexa ranked websites, which by the numbers above represent the top 3% of all websites, a full half a million (5% of their sample) are "meaningless" websites ("this works", "hello world", bot generated word salads).

Given their sample represents the very top of the active web pyramid, it is reasonable to surmise that the more you approach the base of the remaining 97% of the popularity pyramid, the higher the percentage of the meaningless web will be.

The actual proportion of "the meaningful web" running WordPress is likely to be higher than 10% given the likely ratio of meaningful/meaningless websites in the totality of websites; and lower than 40%, given the nearly 10 times higher number of total sites compared to the Alexa ranked sample, the overwhelming majority with vastly less traffic and complexity than the top 3%.

We can perhaps further narrow the range by looking at an alternative but similar methodology to that used by W3Techs to arrive at 40%. The [Web Almanac report by HTTP Archive](https://almanac.httparchive.org/en/2022/methodology) looked at the 8 million websites in the [Google Chrome UX Report](https://developer.chrome.com/docs/crux/) dataset, which akin to Alexa is based on Google's top 10 million most popular websites (the 2 million discrepancy is not explained but may reflect minimum popularity and indexability requirements).

Google arrives at a [35% of the most popular sites running on WordPress](https://almanac.httparchive.org/en/2022/cms).

It is impossible to get more precision than 10-35% of all meaningful websites run WordPress, but perhaps a median of 22% is not unreasonable.

This is half the standard 40% claim, but it is still huge to say WordPress powers approximately 1 in 5 real websites on the planet.

## Conclusion

Taking the above findings we can conclude that:

* A significant, as yet unquantified proportion of the 350 million active websites are meaningless placeholders or spam, constituting "the meaningless web".
    
* If we take the size of the "meaningless web" to be around c.50%, 175 million websites, or around half the "active web", there are approximately 38 million active WordPress websites, accounting for (very) roughly 1 in 5 (22%) of meaningful websites in the world.