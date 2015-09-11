---
layout: post
title: Parallel Computation
---

When I was using R to build a random forest model one year ago, I got to know parallel computation and built my model in a parallel way. I was startled by the efficiency of it. How much computation power I have wasted before! By the way, I used a linux cluster hosted by UVa. So the parallelism is implemented at computer level. I also learned that we can implement parallelism at CPU level, which means we use different CPU cores to work on different tasks at the same time. In this way everyone has a multi-cores computer can play around with parallel computation. A few months ago when I was scraping some stock information, I learned a bit of multi-threads programming which boosted my speed of scraping. Now I am getting a little bit confused, what's the difference between these different levels of parallelism?

#####Machine level
Most parallel computation in business is implemented at this level. People can use as many commodity computers as they want to build a grid. This is the good stuff. But people must solve the communications between different computers. If lots of communications between computers are required, this overhead can be challenging.  

#####CPU level

######More than one physical CPU
This technology existed before multi-core CPU and hyper-threading. We need the same number of CPU sockets on the motherboard  as the number of CPU so we can place all CPUs on the motherboard. Whiled enhanced computation power, this technology has many drawbacks. 

 
>The motherboard also needs additional hardware to connect those CPU sockets to the RAM and other resources. There’s a lot of overhead here — there’s additional latency if the CPUs need to communicate with each other, systems with multiple CPU will consume more power,  and the motherboard needs more sockets and hardware.

######One physical CPU with multi-cores
This technology is more popular these days. Most home desktops and laptops have this feature. More than one CPU cores is integrated into 1 physical CPU so we only need one CPU socket but we can do the same thing as we can do with 2 or more physical CPUs. My Macbook Pro has 8 cores. I rented a 32-core linux machine from AWS before to build xgboost model. Multi-core is really awesome!

#####Thread level
I am not an expert on computer hardware, so it's a little bit difficult for me to elaborate what thread is exactly. So quoted from wikipedia:

>multithreading is the ability of a central processing unit or a single core in a multi-core processor to execute multiple processes or threads concurrently, appropriately supported by the operating system. 

For example, a 2-core, 4-thread CPU only has 2 physical cores, but it can handle 4 threads concurrently. This technology in Intel is called hyper-threading.

