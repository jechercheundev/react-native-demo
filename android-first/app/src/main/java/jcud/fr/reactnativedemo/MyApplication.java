package jcud.fr.reactnativedemo;

import android.app.Application;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import jcud.fr.reactnativedemo.awesomepackage.AwesomePackage;
import jcud.fr.reactnativedemo.mixipackage.MixiPackage;


public class MyApplication extends Application {
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new AwesomePackage(), // <-- Add this line for your custom Package
                new MixiPackage()
        );
    }
}
