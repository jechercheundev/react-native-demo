# A Boilerplate for your brand new ReactNative app

ReactNative is a kind of agnostic technology. 
This imply that there is no ties with other frameworks or libraries, and that some components of it can be replaced by others.

But on an other hand that means that there is multiple way to make a ReactNative app. 
All projects looks differents, follow different conventions, make differents assumptions.
Here are those we made.

This Boilerplate user Redux. Because we love the state machine way of thinking. This is a breaking change of mindset. 
This is peace of mind to know that your app is always going to end up in a definite state. 
Redux is implemented here with a root store and a root reducer. Mobile App are and should stay simple. 
So a combined reducer was a good choice. But feel free to implement something different.

We also want to emphasize Presentational and Container Components. 
As you will see, the KerKer 💖💖 Feature is spread accross two components. 
One is only view and the other one is connected to the Redux.

The KerKer 💖💖 Feature is using Redux to manage it state. It's kind of a Hello World, but with more love in it.

![KerKer Feature Gif](https://media.giphy.com/media/l2JhC3i4CYdSRlGda/giphy.gif "KerKer Feature Gif")

