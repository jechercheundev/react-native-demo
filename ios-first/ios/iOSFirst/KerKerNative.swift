//
//  KerKerNative.swift
//  iOSFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

import Foundation
import React

@objc(KerKerNative)
class KerKerNative: RCTEventEmitter {
    
    override func startObserving() {
        NotificationCenter.default.addObserver(self, selector: #selector(self.increment(_:)), name: NSNotification.Name.init(rawValue: "KerKerIncrement"), object: nil)
    }
    
    override func stopObserving() {
        NotificationCenter.default.removeObserver(self)
    }
    
    override func supportedEvents() -> [String]! {
        return ["KerKerIncrement"]
    }
    
    static func increment() {
        NotificationCenter.default.post(name: NSNotification.Name.init(rawValue: "KerKerIncrement"), object: self, userInfo: nil)
    }
    
    func increment(_ notification : NSNotification) {
        self.sendEvent(withName: "KerKerIncrement", body: [])
    }
    
    @objc(output:)
    func output(message: String) -> Void {
        DispatchQueue.main.async {
            NotificationCenter.default.post(
                name: NSNotification.Name.init(rawValue: "KerKerNativeOutput"),
                object: self,
                userInfo: ["message":message]
            )
        }
    }
    
}
