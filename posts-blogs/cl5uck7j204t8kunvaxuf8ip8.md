## If You Treated Technical Debt Like You Do Financial Debt... How Would You Measure Your Risk of Going Under?

Today we take a deep dive into technical debt: what is it, when is it good, when is it terrible, how to measure it, how to cost it, how to address it.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658365848019/lXG6VHiRN.png align="left")


## Defining technical debt

Very often, tech debt is defined as a conscious trade off of quality for speed, or a result of poor design decisions. But while both of those are good examples of tech debt, tech debt can also come to absolutely top quality code: if it fails to evolve with the tech ecosystem. The cutting edge app of 2010 is very often the creaky, slow and plainful monolith of in 2020. It's not that the original choices were suboptimal: it's that time moves fast in tech, and code needs to constantly evolve to keep in sync. 

But not all technical debt is created equal. 

Below is a model you may find useful in mapping different parts of your application.


## Technical Debt Accounting Model

### Low Interest Technical Debt

Technical debt, like financial debt, can be useful, helping you enter the market and gain traction with an MVP, or allowing you to innovate, or rebuild. That's when your debt is "low interest", you understand the trade offs and the pain is in your future, with a plan to pay it back before it gets painful.

### High Interest Technical Debt

High interest debt, that's risky, and much harder to pay off. Here your technical pain is not ahead but right now, and if you're nor careful, it will compound into a debt default. Technical debt now places serious operational and commercial constraints on the entire company, and creates reputational risks, from security breaches to service interruption.

### Technical Debt Default

This is where your company is at existential risk because of technical debt. Your core platforms may have passed End Of Life with widely publicised critical exploits, and you advertise this in your website headers. Your system has become so bloated and is so highly coupled that no one really knows what everything does, and everyone is afraid to change things because every change creates side-effects. Your new features grind to a halt, your devs leave, your company stagnates and loses users to more reliable competitors.

## Technical Debt Accounting

%[https://youtu.be/McO_ONKxwNU]

So equipped with this model for understanding and categorising your technical debt, the questions of implementation remain:

- How do you rigorously measure it to know in which category any given part of your codebase falls? 

- How do you know which specific classes are most tightly coupled or more likely to create side effects or most difficult to understand? 

- How do you measure the impact, as opposed to the presence of technical debt on your team or company's feature development process? 

- How do you estimate its financial cost? 

- How do you choose which areas of the code to refactor first? 

- How do you know when replacement is the only option?

- How do you persuade the business of the need to invest in technical debt?


### Technical debt metrics

Metrics for measuring technical debt which I cover in my training course include formulas for code complexity, cognitive complexity, class and method complexity, afferent and efferent coupling (one is likely to have side effects in many parts of the code, the other is likely to be vulnerable to changes in many parts of the code); package dependency metrics and more. There are also powerful visualisations which can help you find the seams in your application, identifying the low hanging fruit for modularising or service decoupling, as well as the highest risk areas. The metrics above have also proven to be 70-80% predictive of bugs, so they allow you to identify likely bug prone classes and methods.

A different type of metric is escape velocity, the amount of times new work releases bugs into production. There are algorithms like [szz](https://github.com/topics/szz-algorithm) that estimate this in repository commit histories, both globally and by file.

A different approach uses issue trackers like Jira. You can create queries and even dashboards that quantify and monitor live the rate at which tickets previously marked as done are reopened. You can also track the number and rate of tickets marked as "bug" or "fix", the time it takes to respond to a bug, and to resolve it. These process based metrics are particularly important because they help you quantify and cost the compounding of technical debt into operational and strategic debt. You can track how much time is spent on bugs and fixes, and this is time deducted from new features, with associated opportunity and competitiveness costs, and also user pain points, which can affect adoption and retention.

These process metrics allow you to put financial estimates to your technical debt. You can track how many hours your product team (inc. devs, managers, product owners, qa, customer service) spend on bugs, and get pretty precise figures of pro-rata aggregated staff costs. If you compare this to revenue, profit and turnover streams, you can see how significant a cost that is beyond the raw amount, as it might negate the entire profit from a product vertical. You can also, more roughly, estimate the cost and frequency of roadmap delays or slowdowns, against commercial projections predicated on them as a proxy for opportunity costs. Finally you can make correlations between customer acquisition and retention and bug introduction rates as well as customer complaints. This kind of analysis is essential to get business buy-in for investing in technical debt, and for identifying where in my proposed framework your product might be.

### Why technical debt is never only technical

Technical debt also compounds in to security debt, as it almost always entails vulnerabilities that can be tracked and measured via static analysis tools like Sonar, or API testing tools. Finally, technical debt compounds into environmental debt, as you can link speed, requests, data transmission, server intensity, infrastructure configuration and more to higher CO2 emissions, battery and CPU usage, and several downstream and upstream costs. This could have implications to your ESG accounting, your brand values, and your transition to Net Zero.

You can find an illustration of the above framework, metrics and tooling in [a talk I recently gave on the subject](https://ismaelvelasco.dev/technical-debt-the-good-the-bad-and-the-costly).   Indeed, you may have noticed I added a [new Tech Talks section](https://ismaelvelasco.dev/tech-talks). OK, no way you noticed. It has recordings from meetups, conferences and even COP26 on a wide range of software engineering subjects. 

## How to get training in Technical Debt Management and Accounting

Also known as shameless plug.

I am genuinely thrilled to have been selected to give a [1 day online workshop on the subject](https://conferences.isaqb.org/software-architecture-gathering/full-program/#advanced-technical-debt-management-the-good-the-bad-and-the-costly) in November by the [International Standard in Training and Certification of Software Architects]((https://isaqb.org/)) - probably the world's foremost software architecture certification body.  

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658420516629/l_QMkLHE8.png align="left")

To be dedicated 9 hours (there's also a follow-on talk on [Modernising Monoliths](https://conferences.isaqb.org/full-program/#modernizing-monoliths-principles-patterns-risks-and-roadmaps)) at one of the world's [leading architecture conferences](https://conferences.isaqb.org/software-architecture-gathering/), at the invitation of such a literal standard setter, feels humbling, exciting and challenging, all at the same time.  The talk above can be taken as a taster for my online workshop, which will actually train you to apply this framework, tools and metrics in practice.


If you enjoy it, you might want to [sign up](https://conferences.isaqb.org/software-architecture-gathering/tickets/) for the (online) workshop. 

Do please share any feedback on this blog post or the talk above, and suggestions for things I should clarify or add ahead of the course. 

Also check out the entire conference and training days, there are some really fantastic talks in the programme!
