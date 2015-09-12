---
layout: post
title: The OAuth API of Twitter
---

Recently I am trying to do something interesting with Twitter. The first goal is to deploy an application on Heroku. So I did some research to the OAuth API of twitter and tried very hard to find some examples. But most examples are too simple, they just use the client itself as resource owner. I want to create a twitter bot account who can upload a line of bible everyday instead of posting those lines by my own account, although I rarely post anything.

OAuth seems to be the standard way to grant access to third party applications for users' resource in most internet companies: Facebook, Twitter etc. So I think it's worth my time to write something about it.

First of all, there is an awesome  [guide](http://hueniverse.com/oauth/) to OAuth written by Hueniverse. Actually I think this is the only material you need to read about OAuth, so I am only writing about how OAuth is implemented with an example.

After we registered an application on Twitter, we get a consumer key and consumer secret. Consumer credentials are used to identify the client(consumer). With these credentials, Twitter generates a redirected url. User(resource owner) will be redirected to a sign-in page after clicking this url. Then user signs in with his/her username and password. Remember in this way client don't need resource owner's credentials but it can still get access to his/her resources. This is the problem OAuth tried to solve and it did a good job. After user signed in, he/she can view which application is requesting the permission and what permissions it's asking for. Then the application can get this user's access token and access secret. The access credentials act like username and password but the application can only access limited resources by them.

{% gist 54184dc00b0e148638a8 %}

We can use`auth.access_token` and `auth.access_secret` to check our access credentials.To use access credentials next time, we can store them in a text file with consumer credentials together.

Now we can post on behalf of the twitter bot. Next I will show how to write the code for this twitter bot.

 