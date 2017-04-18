package jcud.fr.reactnativedemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class HelloActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hello);
        findViewById(R.id.enterTheKerKer).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent service = new Intent(HelloActivity.this, KerKerActivity.class);
                startActivity(service);
            }
        });
        findViewById(R.id.enterTheAwesome).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent service = new Intent(HelloActivity.this, MixiActivity.class);
                startActivity(service);
            }
        });
        findViewById(R.id.enterTheBBL).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent service = new Intent(HelloActivity.this, BBLActivity.class);
                startActivity(service);
            }
        });
    }
}
