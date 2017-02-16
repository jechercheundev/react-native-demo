# From Zero to Hero !

Add react-native to your project
```
gem install cocoapods
```

for smooth experience make sure the iOS Project is under `$root/ios`

So you want to install react-native on $root
```
yarn init
yarn add react-native
yarn add react
curl -o .flowconfig https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig

```
and use `mv` to rename your iOS project and get to

```
.
├── README.md
├── ios
├── node_modules
├── package.json
└── yarn.lock
```

then `cd ios` and install Pods
```
pod init
```
edit Podfile to get something similar to this one :
```
source 'https://github.com/CocoaPods/Specs.git'

# Required for Swift apps
platform :ios, '8.0'
use_frameworks!

# The target name is most likely the name of your project.
target 'iOSFirst' do

  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the `:path` accordingly
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # needed for debugging
    # Add any other subspecs you want to use in your project
  ]

end
```
and `pod install`

Now import the react-native source in a way you get this :
```
.
├── README.md
├── index.ios.js
├── ios
├── node_modules
├── package.json
├── src
└── yarn.lock
```

## The Magic: RCTRootView
