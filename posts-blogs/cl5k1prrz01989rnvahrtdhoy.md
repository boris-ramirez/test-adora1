## 1. Green Mode Design Through Graceful Degradation

Wouldn't it be great if you could toggle green mode on the websites you consume and greatly lower your CO2 emissions, make your battery last longer and extend the life of your devices?

## What is Green Mode design?

What I'm choosing to call **_Green Mode design_** is the combination of two UX principles:

- [user control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/): allowing users to control their experience of the system while providing means to undo their selections.

- [graceful degradation](https://www.techtarget.com/searchnetworking/definition/graceful-degradation): the ability of a system to degrade its performance without affecting its core functionality.

So Green Mode design could be defined as:

** giving users a reversible option for degraded but still functional performance in exchange for reduced emissions and longer device life. **

It surprises me that I have so far only found a single website (do you know of any others?) with a `green mode` toggle: https://theorganicagency.com/our-website-green-mode.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657733328703/slQl7wHaJ.png align="center")

I would have thought there would be hundreds if not thousands of examples, given we learned the art of "graceful degradation" well over a decade ago, and so many of us deeply care about climate change.

## The rise and fall of graceful degradation

Graceful degradation, in web development, generally means that you build your site to take advantage of all the features of the [web APIs](https://developer.mozilla.org/en-US/docs/Web/API) supported by the latest browsers, but also create fallbacks for people using older browsers or devices.

Interest in graceful degradation peaked around 2011, because the difference in CSS and Javascript support between browsers was massive, particularly with Internet Explorer 8, which had the least functionality and the largest market share.

This meant that every website had to cater to both, the shiny new kid on the block who excelled at gymnastics (Chrome would edge out Internet Explorer by 2012), and the less than athletic grandparent who controlled the PCs.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657747979009/UivY5wDC-.png align="left")

To grow and retain your website's user base, therefore, it became common practice to create a high performance version with a low performance fallback for laggards.

To experience a good example of graceful degradation, if you have access to gmail, go to your inbox on the browser, and once there, [disable javascript](https://www.technewstoday.com/how-to-enable-disable-javascript/). You will get an option to view your mailbox in html only. Accept and behold graceful degradation in action.

Before:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657759125607/9gqs8fqr5.png align="left")

After:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657759060975/TjfBZQ-Nn.png align="left")

As the web api became more standardised, and browsers more interchangeable, graceful degradation largely faded from developer discourse, as an artefact of an earlier, more painful era.

You could now safely let rip and flex your web muscles. Which of course also meant that we were pretty much responsible for exponentially increasing planetary emissions, with more and more powerful applications requiring more and more energy and imposing faster and faster hardware obsolescence and waste.

## Implementing Green Mode Design

Many of us are familiar with the [eco mode](https://www.cars.com/articles/what-is-eco-mode-440386) option in cars. When enabled, the system modulates things like air conditioning, heated seats or other functions to take away pressure from the engine.

The benefit is better fuel efficiency, lower emissions and cheaper costs. The trade off is that it inhibits the performance of the engine (acceleration, gear shifts), and degrades things like lights (less bright) and air conditioning (more interruptions, less power).

While eco mode is ideal for most trips, it's not suited for driving up steep hills, or accelerating quickly to overtake. Choosing maximum performance would make more sense in these situations, both for safety and for the car's health and longevity.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657748912383/zffuqnA_a.png align="center")

Similarly, you might not choose graceful degradation on a website for high end gaming, watching a blockbuster, or sleuthing through image based OSINT.

But for day to day use, you probably don't need all the animations, background videos, images and trackers when reading articles, listening to music on YouTube in the background or aimlessly procrastinating.

## Will the real slim browsers please stand up?

If the option for excluding such "extras" when requesting web pages was a standard feature available to the 5 billion people that use browsers, the impact of even fractional adoption would reduce global emissions in a noticeable way.

And yet, compared to consumer electronics, the web ecosystem has been slow on the uptake, to put it politely. Green Mode Design (in practice if not in name) is fast becoming standard in consumer devices, with eco mode an option from wearables to laptops, mobile phones to whole smart houses.</p>

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657738250753/Kl1CFOz2s.png align="center")

It was only in the last year that Microsoft released a still little known feature, [efficiency mode](https://blogs.msmvps.com/brink/2022/07/01/turn-on-or-off-efficiency-mode-in-microsoft-edge).

It aggressively reduces CPU and RAM usage by lowering video and animation quality and putting to sleep unused tabs. This is a pretty weak offering, considering that the [tab suspender](https://www.tab-suspender.com) extension is much more powerful and fine grained.

I have not come across any `efficiency mode` equivalents in Chrome, Safari or Firefox. Some of the features are replicated, like tab sleeping and more esoteric optimisations like wake up javascript throttling, but they are not designed as user controlled options, so they do not conform to my definition of Green Mode Design, offering graceful degradation but no meaningful user control and freedom.

It is a bit bizarre then for the web to be so far behind this curve, when there is so, so much that could be done by browsers to offer truly customisable green mode options, with potentially huge impact on climate change.

Does that mean that `green mode` is largely impossible for responsible consumers?

## Hacking Green Mode on the user side

While there is no native, comprehensive tool to achieve meaningful and customisable green mode in browsing the web, there are ways to "hack" a green mode approximation for responsible net surfers thanks to the efforts of enterprising devs in the browser extension ecosystem. I have already name checked Tab Suspender:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657734345846/rYa8WZjaT.png align="center")

As you can see you can create powerful rules. As a pathological multi-tabber (if multi-tabbing was a sport, I'd have a shot at the Olympics), this has been a godsend. After my chosen interval, the tab goes completely inactive, while its ghost remains ready to come alive on my return:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657734480633/iNsOR2XRyI.png align="left")

My CPU and ram usage has, since I added the extension, been very dramatically reduced.

Other extensions allow you to block (not hide) adverts from youtube videos; block (not hide) videos from youtube, only streaming the sound, which is great if you use youtube for music or podcasts.

Yet more extensions allow you to disable JavaScript with a quick toggle on a single page (as opposed to the browser as a whole in the settings).

There are extensions to automatically choose the minimum resolution of videos you stream (the greatest source of web emissions on the user side).

You can also use extensions to monitor your web consumption and emissions, and there are also extensions that plant trees every time you open a new tab, or search the net, or shop online.

I hope to devote a separate blog post to this extension ecosystem.

It has inspired me to set myself the goal, this year, to create an open source "green mode" extension, that integrates all of these features and more in a granular way.

## Reclaiming Graceful Degradation for Green Mode web design

Instead of designing fallbacks for antiquated browsers, like we used to as standard practice, web developers could design fallbacks for user facing "green mode" toggles, which should be present in every web application we're responsible for.

Ideally we would offer more than on/off options. You could have green/greener/greenest options, with increasing levels of degradation that do not break core functionality.

That way you could go from this:
https://moves.basicagency.com/

To this (beware, heavy swearing ahead):
https://tinyurl.com/sweary-but-ecofriendly

With less extreme options in between.

## Call to action

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1657763615406/qwwxQkxzI.png align="center")

Consider this post an invitation to all web developers to reach into our drawer and dust off the graceful degradation manual, and reclaim it as a tool for climate action.

Just as developer design choices have been instrumental in our industry outstripping aviation as polluter, developer design choices can be instrumental in making our industry a lever of sustainability.
