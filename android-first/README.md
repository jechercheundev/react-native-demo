From Zero to Hero !

Add react-native to your project

```
yarn init
yarn add react-native
yarn add react
curl -o .flowconfig https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig

```

Now open the newly created package.json file and add this under scripts:
`"start": "node node_modules/react-native/local-cli/cli.js start"`

In your project's build.gradle file add an entry for the local React Native maven directory:
```
allprojects {
    repositories {
        maven {
            // All of React Native (JS, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
}
```

In your app's build.gradle file add the React Native dependency:
```
dependencies {
    compile "com.facebook.react:react-native:+" // From node_modules.
}
```
