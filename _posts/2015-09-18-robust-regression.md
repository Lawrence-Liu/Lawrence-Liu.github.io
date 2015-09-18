---
title: robust regression
layout: post
---
Outlier is such a pain in data analysis, because we can't just delete as it might be a legitimate  'outlier'. However, if we keep it, it might distort the underlying truth potentially especially when we make a typo. 

```{r}
require(MASS)
x1 <- seq(0, 10, 0.2)
nobs <- length(x1)
y <- x1 * 2 + rnorm(nobs, 0, 0.4)
y[c(5, 50)] <- c(150,30)
```

Build models and plot regression lines

```{r}
#build regression model
fit.lm <- lm(y ~ x1)
plot(x1, y)
lines(x1, fit.lm$fitted.values, col = 'blue')
#build robust regression model
fit.rlm <- rlm(y ~ x1)
lines(x1, fit.rlm$fitted.values, col = 'red')
```

It seems that our linear model is influenced by outliers severely, but robust linear model ignored the outliers. Let's see how magic happens.


```{r}
fit.rlm$w
```

From the weights table above, we can see that the weights of y[5] and y[50] are adjusted to 0.003 and 0.051. This is rlm's way to deal with outliers: it decreases their weights. 

The estimator is called M-estimator. 

>M-estimators are a maximum likelihood type estimator. M estimation involves minimizing $\sum_1^n \rho(r_i)$, where >$\rho$ is some function with the following properties:

>1. $\rho(r) \geq 0$ for all r and has a minimum at 0
>2. $\rho(r) = \rho(-r)$
>3. $\rho(r)$ increases as r increases from 0, but doesn't get too large as r increases.




