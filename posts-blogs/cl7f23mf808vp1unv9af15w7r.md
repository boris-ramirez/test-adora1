# Is WordPress Killing the Planet?

If you've read my post on [how many emissions are in 1GB](https://ismaelvelasco.dev/emissions-in-1gb) you will know that estimating digital CO2 emissions accurately is a fool's errand. Nevertheless, it is absolutely essential that we do so, not so much to arrive at an absolute measure, but to understand our impact on the environment in a spectrum of evidence based scenarios, and above all, track our direction of travel, and what we need to do to play our part in reducing the painful impacts of climate change.

## TLDR

I estimate that WordPress generates (scope 1) approximately 9000 metric tons of CO2 per day (120 tanker trucks of oil), or 280,000 metric tons of CO2 per month (650,000 barrels of oil), and 3,335,000 metric tons of CO2 per year (the equivalent of razing a forest the size of Beijing every year or adding nearly a million petrol guzzling cars into circulation each year.).

This post explains how I arrived at those figures. It also suggests that the answer to the title question is, sadly, yes, WordPress **is** killing the planet, a little each year. The good news (yes, there is good news, I'm a utopian realist!), is that it's relatively easy to dramatically cut the CO2 footprint of our WordPress sites, so with modest effort each of us could make a significantly positive impact on the planet. My next post tells you how.

## Estimating WP's CO2 emissions

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661791511505/qSm6nRGWS.png align="left")

### Minimum estimate

Exact estimations for digital emissions are notoriously elusive, as I said at the start. In an ecosystem as vast and diverse as WordPress, this is even more complex as the emissions from a top 10 website will differ vastly from those of a corner shop.

But we do have some hard numbers to establish a baseline:

#### Emissions per page

The average emissions per webpage is approx. [0.5g of CO2](https://www.websitecarbon.com/). [20 billion WordPress pages are visited each month](https://wordpress.com/activity/).That is around 10,000 metric tons of CO2 per month. 120,000 metric tons per year.

It would take [planting 2 million trees and growing them for 10 years](https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator) to compensate for that one year of WordPress.

The problem is that by then, the emissions would reach 10 times the accumulated tonnes of CO2.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661791631493/HaiEEvj2C.png align="left")

20,000 oil tankers full of gasoline per year sounds like a lot, but as a metric, it leaves the majority of emissions out. It counts the number of individual page visitors, but not remotely what is going on behind the scenes. Every time you visit that page, there will be trackers, pings, analytics, checks, ads, extensions, spam bots, all sending requests back and forth and generating their own carbon footprint.

#### Emissions per request

A better metric then is the number of requests, which for WordPress is around [2.6 billion per day](https://www.zdnet.com/article/how-to-optimize-your-site-like-wordpress-com/) (compared to 115 million page views per day to give you an idea of how much more goes on behind the scenes when you visit a webpage). That's 80 billion requests per month.

Whereas there is a good amount of research on estimated average emissions per web page, there is almost none on average emissions per request. What is clear is that no average is likely to be consistent as the emissions will vary by the amount of data per request; the server and protocol processing requests [Nginx is significantly more efficient than Apache, and HTTP2 better than HTTP1](https://www.researchgate.net/publication/347523090_On_comparing_the_power_usage_of_HTTP11_and_HTTP2_on_webservers); the hosting provider and[hosting zone; and of course the gird intensity at any one time. You can see how complicated it really gets [here](https://ismaelvelasco.dev/emissions-in-1gb).

One tentative baseline, not as an exact measurement but as a general guide, is comparing the average CO2 per request reported by Google in 2015, and the average CO2 per request calculated in a [2020 Masters Thesis](http://essay.utwente.nl/83631/2/Iseke_MA_EEMCS.pdf) by Ann-Cathrin Iseke.

Google gives [0.01 kg per request](https://finance.yahoo.com/news/every-google-search-results-co2-090042259.html). Artist Joanna Moll created a sobering page that tells you how many emissions Google.com has generated every second from your landing [here](http://www.janavirgin.com/CO2/). On the one hand, it is likely that the CO2 per request has significantly diminished, as Google implements efficiencies not possible in 2015. For comparison, in 2009 Google estimated 0.2 kg per request, which is 20 times less. By that rate of improvement, Google's emissions would be 0.0005 kg per request in 2021. In fact Google claims to have achieved carbon neutrality, so these figures would no longer apply, but remain indicative.

Meanwhile, Iseke estimates a range between 0.00013-0.00067 kg of CO2 per request, in the context of the [ArchiSurance](https://www.uio.no/studier/emner/matnat/ifi/INF5120/v18/Resources/archisurance-case-study.pdf) experimental case study for architecture modelling. This matches my estimates for current emissions per request by Google. Taking into account that Google is a benchmark in performance optimisation, and WordPress, alas, is not, it seems safe to assume a notional footprint of 0.0007 kh of CO2 per request to WordPress.com.

That would mean 1,800 metric tons of CO2 per day, or 56,000 tonnes of CO2 per month, or 670,000 tonnes of CO2 per year. That's over 5 times the emissions from web page visits alone. This is the equivalent of running almost two gas-fired power plants for a year in the USA.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661791738845/JNwRszxQM.png align="left")

At an annual growth rate of 15% WordPress will generate a minimum of 2,345,000 metric tons of CO2 over 10 years, equivalent to the annual electricity consumption of every home in Dubai, and which would require planting 39 million seedlings in 2022 to offset the emissions that would accumulate in the 10 years before they mature into trees. Put a different way, running Wordpress sites for 10 years would be the equivalent of cutting down [a forest the size of New York](https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator). Without such growth the forest might "only" be the size of Chicago.

An even more dramatic way of putting it is using the mortality cost of carbon (MCC) [proposed in 2021](https://www.nature.com/articles/s41467-021-24487-w) by Daniel Bressler of Columbia University in a widely cited paper in one of the world's top scientific journals, Nature Communications. He puts forward a conservative estimate of the excess deaths from CO2 emissions over the 21st century, in terms of how a release of CO2 emissions now will contribute to global warming over that period. On the current direction of travels he estimates that adding 1 million metric tons of CO2 in 2020 would account for the death of 226 people over that time that would not have occurred had that tonne of emissions not taken place. That would mean that WordPress websites over the next 10 years will be directly responsible for the deaths of at least over 500 of our children and grandchildren, who would not have died without WordPress.

### Moderate estimate

As a reminder, I described the estimations above as minimal. The figures don't include the carbon footprint for the [millions of downloads of WordPress itself](https://displaywp.com/wordpress-download-counter/) and its 60,000 plugins. Nor for their storage, and the embodied carbon of their infrastructure.

They don't include the hugely significant emissions of the time spent on a device composing or reading WordPress pages, including battery, electricity, cpu, device life and waste disposal, etc.

But most of all, the data on number of pages and number of requests comes only from sites hosted with WordPress.com and a few others using its Jetpack plugin. Strangely, while Automattic, the owners of WordPress.com, disclose number of pages, of visitors, of requests, of spam blocked, they do not disclose the number of actual websites they host.

I suspect it is because, whereas WordPress core may power 40% of websites according to one metric (see below), WordPress.com only hosts a tiny proportion of these sites. While definite figures are not available to my best knowledge, perhaps a reasonable proxy is the data from BuiltWith.com, according to which they have detected [2 million currently live sites hosted on WordPress.com](https://trends.builtwith.com/cms/WordPress). We could add to those the further [2 million live sites detected as hosted by Automattic](https://trends.builtwith.com/hosting/Automattic). That makes 4 million sites. At the same time, BuiltWith detects 34 million websites using WordPress.

That would mean that the estimates above represent only 17% of WordPress emissions.

Adjusting accordingly, we need to augment by 83% the estimates above. That would mean that the likely emissions of WordPress would be a staggering 3.3 million metric tons per year, equivalent to the electricity consumed by every home on Estonia.

Over 10 years, that would rise to 11.5 million metric tons of CO2, exceeding the annual electricity needs of all of Australia's homes. This means that the next 10 years of WordPress on its current trajectory, will be the equivalent of razing a forest the size of Paris. Twice over.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661791998266/m_ICgj0qe.png align="left")

And it means the death of 2600 of our children and grandchildren from emissions related heat directly attributable to WordPress.

This may be had to wrap one's head around, but if you're concerned about the accuracy of the figure, it is certain to be an underestimate, as it only accounts for deaths from emissions-related temperature rises, and not from emissions related deaths from infectious disease, climate driven conflict, population displacement, food supply crises, flooding, etc.

It also doesn't account for the very significant emission-related health impacts short of death for a large proportion of the population.

### High estimate

My final estimate is that WordPress generates approximately 9000 metric tons of CO2 per day (120 tanker trucks of oil), or 280,000 metric tons of CO2 per month (650,000 barrels of oil), and 3,335,000 metric tons of CO2 per year (a forest the size of Beijing or adding nearly a million cars to annual traffic). On this accounting WordPress will be directly responsible for the deaths from temperature rises of more than 750 of our children and grandchildren in their lifetime. Each year.

## The Grandparent Effect

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661792598039/2r6XSXfA6.png align="left")

The above metaphorical tree count should not lead us to lose perspective on the forest itself. Regardless of precise estimate, we can absolutely conclude that WordPress has a significant carbon footprint, which is negatively affecting our planet at scale. Why?

Older CMS providers like WordPress are architected in ways that do not reflect current best practices and would undoubtedly be built differently if starting from scratch today. As an example, WordPress imposes a default paradigm of procedural programming, which makes it less performant, modular, extensible and testable than OOP in PHP 7+. Another example would be lack of native support for package managers like Composer, whereby you can superficially extend the system with plugins, but cannot change or improve it natively with PHP libraries and packages, missing out on the ecosystem of modern PHP programming. There are ways around this, and several tools and strategies have been developed to make WordPress OOP friendly, and Composer enabled. Furthermore, WordPress has been traditionally hosted on shared or dedicated servers with a CPanel GUI. This has the advantage of dramatically lowering the barriers to entry. It has the disadvantage of not taking advantage of modern web development practices like versioning, continuous integration pipelines, parallel build environments, QA automation, etc.

Again, there are plenty of workarounds, that allow you to build WordPress sites in such modern ways, but they are not the default.

Then we have the default WordPress database. It is hugely prone to bloat. Every plugin will create its own tables, not tuned or tailored to your specific application. The WordPress revision system, its creaky answer to version control, stores a copy of every draft and update of your blog posts. It is a useful feature as it allows you to revert to older copies of articles and drafts, but it can quickly take up unnecessary space by having no limits on these copies, so you might have a small entry take up one row, and hundreds of redundant copies each with their own row. You would never implement something like this if starting from scratch!

Themes and plugins will also each bring their own data storage strategies, which will often duplicate functionality like logging, capture and accumulate data (specially images) you may never use, and do so in ways you would never approach if you were designing the data layer for an application. Even when you uninstall them, most will persist their stored data by default, leaving a trail of unused data.

WordPress itself has been actively modernising, for instance by making Headless WordPress possible through an excellent AP, working with cloud providers on improved, WordPress focused, database infrastructure, working to introduce webp formats to reduce image size, and creating a performance team. But such advances still lag enormously behind platforms and approaches built from scratch in the last 5 years, from JamStack to developer friendly CMSs like Statamic, built on Laravel. These are natively much easier to scale, customise and extend than WordPress after all the workarounds.

## The opportunity: be the change you want to see

Does that mean we should all abandon WordPress for more modern, more environmentally friendly systems? This would hardly be realistic, given the millions of sites already running on WordPress, and its remarkable ecosystem, although there are signs that in the last couple of years, for the first time, [people are indeed leaving WordPress](https://joost.blog/wordpress-market-share-shrinking/) for more performant (therefore likely greener) alternatives.

But from the point of view of climate change, at the present adoption rates, reducing the carbon footprint of the WordPress ecosystem would be far more impactful and beneficial for the planet than advocating for greener alternatives with a fraction of adoption. Of course both approaches are complementary. Refining and diversifying the tools available for climate friendly website development is crucial. But greening the existing ecosystem is just as important.

In this sense, the good news for people working with WordPress, is that they are in a position to have a greater impact by dedicating their energies to greening WordPress (not just their own sites) than by simply switching CMS platforms. The other good news is that we have already developed a wealth of design patterns, tools and workarounds to turn WordPress into a highly performant, highly energy efficient engine. Finally, by greening WordPress they also improve its performance, meaning the loss of market share my be halted or even reversed, which, if WordPress became a force for emission reductions, would only be good news.

As one example of what's possible, I leave you with the [sustyweb](https://sustywp.com/] WordPress theme, which managed to create a fully working theme that runs on 6kb. This could be a good foundation to build from, adopting and adapting [the underlying design principles](https://css-tricks.com/delivering-wordpress-in-7kb/) to our own websites. I am not advocating your website should look like that team, but that by adding whatever you are missing in a minimalist way, you can be confident of building the most climate friendly WordPress site possible that still fulfils your use case needs.
