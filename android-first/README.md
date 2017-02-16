# From Zero to Hero !

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
            url "$rootDir/node_modules/react-native/android"
        }
    }
}
```

In your app's build.gradle file add the React Native dependency:
```
dependencies {
    compile "com.facebook.react:react-native:0.41.2" // From node_modules.
    // forcer la version c'est bien !
}
```

## Ajouter une Activity ReactNative
You need to add a normal activity and force `Theme.AppCompat.Light.NoActionBar` as a Theme because some component relies on it.
```
<activity android:name=".KerKerActivity"
                  android:label="@string/app_name"
                  android:theme="@style/Theme.AppCompat.Light.NoActionBar"></activity>
```

Your activity should build and hook a ReactInstanceManager.
Hook all the lifecycle methods, back buttons and the dev menu.
Some permission code related to OVERLAY is required to pop errors over the app.

```
package jcud.fr.reactnativedemo;


import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class KerKerActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private static final int OVERLAY_PERMISSION_REQ_CODE = 1337;
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "HelloWorld", null);

        setContentView(mReactRootView);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(
                        Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName())
                );
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                    // HandleUI nicely to inform user or not ?
                }
            }
        }
    }

}

```

Maker sure you have watchman installed
```
~/Dev/Projects/react-native-demo/android-first on master*
$ watchman
{
    "error": "invalid command (expected an array with some elements!)",
    "cli_validated": true,
    "version": "4.7.0"
}
```

Eventually, install it : `brew install watchman` 

Make sure reverse tcp is configured on ADB `adb reverse tcp:8081 tcp:8081`

Then start the packager :
```
npm start
```

And build/run from Android Studio
