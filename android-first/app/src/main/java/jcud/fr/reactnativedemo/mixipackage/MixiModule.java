package jcud.fr.reactnativedemo.mixipackage;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by thedamfr on 11/04/2017.
 */

public class MixiModule extends ReactContextBaseJavaModule {

    public static final String KERKER_EVENT = "KERKER_EVENT";

    public MixiModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MixiModule";
    }


    @Override
    public boolean canOverrideExistingModule() {
        return true;
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("kerkerEvent", KERKER_EVENT);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}