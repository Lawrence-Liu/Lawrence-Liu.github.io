---
layout:post
title: Thoughts on Statistics
---

Curse of Dimensionality
---

1. When we solve A*x = B, where A is a n x p matrix, we can't invert A to get x because A isn't invertible if p > n.
2. Even if we only have 10 discrete value for each feature, the feature space will have 10^n points. Today n can be more than 100 easily, it's impossible to have 10 ^ 100 training sets to cover every possibility, actually we are happy even if we can only cover 1/ 10 ^ 90 of it. So the test data might be very different from the train data so the model based on train data can't provide much inference to test data.
3. When we do sampling to estimate a distritution, when the dimensionality becomes large, there would be many modes. While we don't have enough sampling points, we can't estimate the distribution well.


Advantages of data visualization
---
Data visualization is one of my favourite in my work flow. It provides a simple, effective and beautiful way to check our data. When we look at raw data directly, we can't get many insights from it because human brains are not sensitive to numbers, not to mention discovering patterns from tons of numbers. But we we sensitive to shapes, colors and size. In classification problem, we can easily find the distribution of each class if we assign different colors to them. So we know if these classes are linearly separatable. In regression, we can easily check the relationship between the input variables and response variable. With creativity and appropriate tools we can use data visualization to present information which is difficult (if not impossible) to present in other ways. 