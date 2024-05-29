## 2. Green Mode Design: Implementation Strategies

In the second of the Green Mode Design series, I will move from the general design concept outlined in Part 1 to a first proposal on how it may be implemented by the four key constituencies: devs, consumers, browser vendors, and web standards/specification bodies.

## Green Mode Design vs Green By Default

Before that I want to emphasise again that Green Mode Design, integrating both, "graceful degradation" and "user control and freedom", is not a replacement for [green by default](https://screenspan.net/blog/green-by-default/) design. We should absolutely try and ensure that our products are as climate friendly as possible, before a user ever engages with our app. This is a space where not only developers but specially browsers and standards have a key role to play.

But even the greenest commercial website or app cannot impose a maximalist approach to CO2 optimisation and expect to survive.

What would Netflix or Youtube be without videos? Or with minimal viable quality videos only? What would a newspaper site be without images? What would a design agency website be if it was pure black and white? What would most web apps be without any JavaScript?

This is where Green Mode Design complements Green By Default design. The realistic default that meets not just the environmental, but also the economic and social pillars of sustainability, will still be more energy intensive than will be necessary at all times for all users.

![MusicMode.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659458130393/FtGMhQQ_U.png align="left")

If I go to youtube to listen, without watching, to a music video playlist - do I need to keep streaming the videos? Being able to toggle video streams and sound only would be not just good for the environment, but for my CPU and battery and general speed of my device, so not only "altruistic" consumers, but "selfish" consumers would want to toggle such a feature.

And where self-interest and altruism coincide, behaviour change is much easier to scale.

Additionally, given the realistic lag between advocating for Green By Default, and making it standard, Green Mode Design empowers users to override high emission websites to practice client side [digital sobriety](https://theshiftproject.org/en/article/lean-ict-our-new-report/).

This means that emission reductions do not have to wait for sufficient negative consensus among all the stakeholders, but can start with consumers, which in turn will accelerate commercial and normative adoption.

Just one powerful green mode browser extension gaining traction across major browsers could potentially have a significant impact on both, emissions, and consumer awareness and behaviour.

## What would Green Mode implementation actually look like?

There are many vectors out there that could be part of green mode design, but I think they could be integrated into 4 customisable modes and intensities of green mode design:

### 1 _climate aware_

Client side optimisation without degradation (e.g. unused tab suspension, climate aware metrics/monitoring, ad/tracker blocking/service worker enabled intelligent caching).

### 2 _climate friendly_

Graceful degradation of performance (e.g. all the above + more aggressive service worker caching; blocked image or videos by default, clicking on an image link displays it in a customisable default low-fi quality; clicking on a video link defaults to podcast mode (sound only), or even reader mode (transcript only).

### 3 _climate first_

Maximum graceful degradation without loss of core functionality ( "print mode", no javascript, minimal css, maximum backward device compatibility, accessibility options (e.g. only text to speech including alt for images, and no other visuals; change font colour or size, etc - this + backward compatibility increases climate resilience)

### 4 _smart mode_

Customisable default triggers for switching between 1-3 (High CPU, high daily CO2 consumption, full screen mode (degrade all other tabs), non-green cloud host detected, high CO2 website, time of day (this could link to focus mode design thinking).

## What can be done already?

### 1) Consumers

Can achieve most of the above client side via [browser extensions](https://github.com/Leamsi9/awesome-green-extensions/blob/main/README.md), but obviously it will be less seamless with more overhead than at the developer level, particularly in the absence of a Green Mode app that integrates all 4 levels in a comprehensive way.

![chrome-extensions.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659458392197/hPK3-_i0y.png align="left")

### 2 Developers

Have all the tools to implement optional graceful degradation, like client caching both high performance and low fi versions of sites in the client (a bit like the prerendering used already in SPAs to serve crawlers and users different versions). You could also design every app and specially page for graceful degradation to work with low or no js. A lot of accessibility design would also be pertinent. And give your users high, mid and low performance options, plus smart mode, on your UI.

The only example I have come across (do you know any more?) of implementing all 4 modes I propose here is the fantastic [branch magazine](https://branch.climateaction.tech/) site. There is more graceful degradation options that could be added to each of Branch magazine's 4 modes in terms of user control and freedom, but this is a fantastic illustration of the design concept I'm proposing.

![BranchMagazine.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659458532368/ebGAep_dx.png align="left")

## What cannot be done yet?

### 3 Browsers

Could but are yet to implement much more comprehensive green mode features than [Edge's energy efficient mode](https://lifehacker.com/what-is-microsoft-edges-efficiency-mode-and-how-can-yo-1848666190), which itself is yet to be replicated by competitors.

- If we could enable service worker type caching on the client side, with the same core strategies available, that could potentially have large impacts on data consumption and computer usage. If you could for instance toggle a feature that implements stale while revalidate strategies if no similar service workers are active from the site itself, you could drastically reduce web traffic and consumption.

- if you could download rather than stream by default, with streaming mode operating only as a buffer until the full download completes, that could also make a difference, specially if you could "expire" the downloads after x time, removing the downloads by default, and giving the user power to keep the ones they like.

- if you could integrate CO2 counters into the browser itself, or at least to dev tools and lighthouse and equivalents, that could also become a powerful behavioural nudge. There are doubtless many, many more ways in which browsers could enable the proposed 4 layers of Green Mode design. Please share any suggestions or ideas.

![microsoft-edge-efficiency-mode.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659459381552/Br-t4xVMW.png align="left")

### 4 Standards and specifications

The other potentially game changing element that is yet to land, would be specifications and standards to integrate both, green by default, and green mode by default.

- Sites that conform to green and green mode standards could be prioritised by search engines and similar incentives, as is the case with Accessibility.

- Green mode design support (user controlled graceful degradation layers) could perhaps also be incorporated into OpenApi and AsyncApi specifications. This would align with trends in delay tolerant networks, set to proliferate in the coming decade driven by commercial, environmental and humanitarian interests.

- Green certifications could be mainstreamed and integrated into things like Amazon's Green Pledge certification and other impact multipliers.

## Where to next?

At the moment the 4 key constituents (consumers, devs, browsers and standards) are at different places in this design trajectory.

### Consumers

I suspect consumers are proportionally and numerically the furthest in commitment, but lack the means to express it technologically in the web space.

Green marketing and even green washing are successful because consumer demand is real. So a browser extension could be the most rapidly scalable win, with the most downstream impacts.

If there is evidence of demand, it follows that software conventions and web and browser standards will change more rapidly. If we could reach a tipping point, we could radically improve our industry's environmental impact on emissions, waste and raw materials, with many secondary benefits.

The biggest limitation in this area is the fact that browser extensions do not work on mobile.

### Developers

Assuming the [statistics](https://www.pewresearch.org/global/2021/09/14/in-response-to-climate-change-citizens-in-advanced-economies-are-willing-to-alter-how-they-live-and-work/) on people's readiness to make changes to protect the climate, I estimate that there are c.9 million developers waiting for the right messaging, tooling and behavioural nudging to implement greener software and design practices, particularly among younger ones.

![Pew-Green-Changes.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659459555321/PWozBm9VR.png align="left")

This means that those of us who have been advancing the practice of climate friendly design and programming, including ideas such as Green Mode Design, need to step out of the "green" community and bring the messaging, tutorials, libraries and resources to non environmental communities.

Gaining support for incentivising green software in key platforms, from the big cloud providers, to ecosystems like android and apple stores, NPM, Steam or Github.

Above all, it means systematic efforts to incorporate green approaches and perspectives, including Green Mode design, into the junior developer pipelines at scale. Computer Science and adjacent university curricula, bootcamp curricula, popular webdev trainers on YouTube, Udemy, etc, and professional development gateways like Pluralsight, or accreditation bodies like ISAQB.

### Browsers

The most impactful space for Green Mode design is probably at the browser level. Given the [acceleration of sustainable consumption patterns and priorities](https://www2.deloitte.com/uk/en/pages/consumer-business/articles/sustainable-consumer.html) this could be a source of competitive advantage and traction.

With 60% of mobile wallets being in Africa, Green Mode options, compatible with less powerful mobile devices, delay tolerant networks and less intensive data plans, Green Mode functionalities at the mobile browser level could hugely expand commercial reach and digital inclusion in the Global South.

For browsers associated with a hardware ecosystem, the opportunities to extend battery life, reduce energy consumption and increase usability are particularly strong.

Extending at least green extensions/plugins functionality to the mobile browser sphere could also greatly enable innovation and change user behaviour.

I believe sustainability discussions are ongoing in many browser companies. These need to deepen, widen and be more publicly visible, and bodies like the Green Software Foundation and the UN ITU could play a role in thus.

### Standards and Specifications

![UN-digital-agenda.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659458949241/gX7Qvua_s.png align="left")

Work is currently underway to establish a Sustainable Design Working Group able to make recommendations to WC3. The United Nations Envoy for Technology is also currently consulting on a new Global Digital Compact to shape national regulatory approaches. The UN Secretary General's projected Forum of the Future has digital components across most priority agendas and the Internet Governance Forum brings together governments and civil society stakeholders.

The green web/green software community needs to be present and proactive in these processes which have the potential to influence international government policies for a long time to come. Tracking the standards and regulatory environment around green web indicators would be an important first step, and the Green Web Foundation is probably well placed to lead on this, perhaps through its Fellowship programme.

Finally, the Green Software community needs to engage with emerging specifications and protocols, like OpenApi, AsyncApi or MQQT.

These are of course broader strategies than Green Mode Design, but Green Mode Design could be one impactful low hanging fruit that could be part of the above strategy and vision.

I would love to hear from colleagues if they resonate with these proposals, and what alternatives or refinements might be needed. Together I truly believe we can shift the environmental direction of the Internet.
