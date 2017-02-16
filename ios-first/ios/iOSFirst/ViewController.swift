//
//  ViewController.swift
//  iOSFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

import UIKit
import React


class ViewController: UIViewController {

    @IBOutlet weak var outputTextView: UITextView!
    @IBOutlet weak var moustache: UIView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        renderReact()
    }
    
    @IBAction func onTouchUpInside(_ sender: Any) {
        
    }

    
    func renderReact() {
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        
        let rootView : RCTRootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "KerKer",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        rootView.frame = CGRect(x: 0,
                                y: 0,
                                width: self.moustache.frame.size.width,
                                height: self.moustache.frame.size.height);
        
        self.moustache.addSubview(rootView)
        
    }

}

