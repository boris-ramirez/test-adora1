## A starter kit for building climate friendly software

When you think about climate change, it's easy to feel fatalistic. Then again, fatalism comes easy to anyone who has had to start a new dev job, looked at their new codebase, and found themselves staring at the [Big Bad Ball of Mud](https://wiki.c2.com/?BigBallOfMud).

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656871668427/HutQAtJDxW.png?align="center")

And when you read more about the connection between web development and climate change, it's easy to feel not just fatalistic, but guilty, seeing as the code you continuously deploy into the wild, the apps you lovingly (or frustratingly) maintain, the servers you consume, when added to the work of all your peers, account for [as many CO2 emissions](https://www.google.com/amp/s/www.ovoenergy.com/blog/green/the-carbon-footprint-of-the-internet/amp) as the whole of aviation industry!  

Everyone tells you to cut down on flying, but [who](https://theshiftproject.org/wp-content/uploads/2019/07/2019-02.pdf) tells you to cut down on `<video>` tags? 

Still, we're not fatalists, we're software engineers: problem solving is what we do. Every week we get to feel like crime scene investigators, obviously doomed idiots, and certified geniuses, twice over. In a single day.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656871623326/1MSnIORpO.png?height=1200&width=675&align="center") 

Being responsible for so many emissions, counter-intuitively also gives us an extraordinary opportunity for postive inpact. 

Given the scale of much of what we work on, if just a small percent of us commit to a green web, our impact on emissions could be exponential. 

Still, if you're like me, you may be willing, but not know how to start. Green web patterns are not yet regularly discussed in the spaces where devs can be spotted in the wild. 

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656962216192/a0TxogwHS.png?height=1200&width=675&align="center")

So here are some resources that might help get you started.

The green web journey began for me when I stumbled across [this fantastic blog post](https://phil.tech/2020/tech-climate) by Phil Sturgeon of *Build APis You Don't Hate* fame.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656963818217/W6teyuJN_.png?height=1200&width=675&align="center")

This led me to the [awesome earth](https://github.com/philsturgeon/awesome-earth) collection, a catalogue of all the tools and ideas you might want to start with.

Soon after, I was invited to organise a panel and present at COP26+ on [Engineering and Climate Change: Remaking the Future](https://m.youtube.com/watch?v=SXzKvNUKpxg&t=28) at the invitation of the International Environment Forum. 

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656963243006/ubOR8N83E.png?height=1200&width=675&align="center")

The experience made me aware of the power of engineering communities to both inform, and motivate, and I set about looking for the best one in the tech space. 

I am confident I found it in [ClimateAction.tech](https://ClimateAction.tech). 
They have built a fantastic and impactful green tech community, including many of the pioneers and leading voices in the green software movement. 

From their website you can join the [Slack group](https://docs.google.com/forms/d/e/1FAIpQLSdtvNeUkNkPybk9_Ln5klL1RUPHUCwfK4OfF-odRWnHME9d-g/viewform) which is probably the best single place to keep track of developments, network with fellow travellers and ask questions.

Other good resources to get started are:

The [Green Software Foundation](https://greensoftware.foundation) and its podcast, [Environment Variables](https://podcast.greensoftware.foundation)

Gaël Duez' podcast [Green I/O](https://open.spotify.com/show/5inTsYpe1AZeCmLbLDjPx6)

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656962544528/3KRLQJK6U.png?height=1200&width=675&align="center")

The Well Architected Framework's [Sustainability Pillar](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework)

https://www.cloudcarbonfootprint.org

As to the skillset involved in environmentally aware software, I suspect you'll find you already have a strong foundation. 

It just so happens that [what's required](https://www.awwwards.com/how-to-deliver-a-highly-emotional-and-interactive-experience-with-a-low-carbon-impact.html) for green tech is exactly what's required to reduce costs, cpu usage, improve speed and user experience in any web application! These should be part of the arsenal of any experienced engineer, and part of the journey of every committed junior one.

-   Move your application to a (greener) cloud provider/zone
-  Make your content delivery as local to the client as possible (e.g. via CDNs)
-  Minimise your page loads and data consumption by targeted caching strategies using service workers
- Design your APIs to minimise http requests and data exchanges
-  Optimise your images and reduce the javascript and in general the data you send to the client front end, by minification and exclusion.

You may not have thought about the emissions side too much to date, but I suspect you  already know a thing or two about performance optimisation, api design, caching, and graceful degradation.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656962739303/A30s2Ry3K.png?height=1200&width=675&align="center")

Which means you're set to go on your green journey, equipped with a community, good resources, and your own accumulated, growing skill.
