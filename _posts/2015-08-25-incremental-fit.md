---
layout: posts
title: Incremental Fit of Gaussian Naive Bayes
---

###Load data


    from sklearn import datasets
    from sklearn.naive_bayes import GaussianNB
    from sklearn.cross_validation import train_test_split
    iris = datasets.load_iris()
    X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size = 0.25)

###Build the model once for all


    gnb = GaussianNB()
    gnb.fit(X_train, y_train).predict(X_test)
    gnb.theta_




    array([[ 5.055     ,  3.4775    ,  1.4575    ,  0.245     ],
           [ 5.95714286,  2.77142857,  4.22571429,  1.31714286],
           [ 6.60810811,  2.96216216,  5.56756757,  2.02972973]])



###Use partial_fit method and mini batch size = 10 to build the model incrementally


    import numpy as np
    gnb_partial = GaussianNB()
    gnb_partial.partial_fit(X_train[:30], y_train[:30], np.unique(y_train))
    for i in xrange(30, X_train.shape[0],10):
        gnb_partial.partial_fit(X_train[i:(i+10)], y_train[i:(i+10)])
        print gnb_partial.theta_ ,'\n'

    [[ 5.08333333  3.375       1.48333333  0.24166667]
     [ 5.96428571  2.90714286  4.26428571  1.39285714]
     [ 6.74285714  3.02142857  5.77857143  2.07142857]] 
    
    [[ 5.12857143  3.41428571  1.47142857  0.26428571]
     [ 6.          2.85555556  4.28888889  1.38333333]
     [ 6.56111111  2.98333333  5.58888889  2.05555556]] 
    
    [[ 5.11666667  3.47777778  1.43333333  0.24444444]
     [ 6.04761905  2.86190476  4.2952381   1.37619048]
     [ 6.56666667  2.95238095  5.61428571  2.0047619 ]] 
    
    [[ 5.06956522  3.45217391  1.43478261  0.23478261]
     [ 6.03636364  2.85        4.28181818  1.36818182]
     [ 6.6         2.992       5.644       2.024     ]] 
    
    [[ 5.05185185  3.45185185  1.44074074  0.23703704]
     [ 6.04074074  2.81851852  4.2962963   1.35555556]
     [ 6.59615385  2.99230769  5.65        2.03076923]] 
    
    [[ 5.05172414  3.44827586  1.44827586  0.23793103]
     [ 5.98        2.80666667  4.25        1.33      ]
     [ 6.61935484  2.96774194  5.63225806  2.04193548]] 
    
    [[ 5.05        3.47777778  1.46388889  0.23888889]
     [ 5.975       2.80625     4.25        1.33125   ]
     [ 6.621875    2.96875     5.61875     2.05      ]] 
    
    [[ 5.06052632  3.49736842  1.46578947  0.24736842]
     [ 5.95714286  2.77142857  4.22571429  1.31714286]
     [ 6.60810811  2.96216216  5.56756757  2.02972973]] 
    
    [[ 5.055       3.4775      1.4575      0.245     ]
     [ 5.95714286  2.77142857  4.22571429  1.31714286]
     [ 6.60810811  2.96216216  5.56756757  2.02972973]] 
    


We can see that the newest theta of the second model is the same with the theta of the first model, which means the 2 models generate the same parameters. This `partial_fit` method is really convenient to build a model for online learning if we have streaming data or the data is too large to fit in memory. 


    
