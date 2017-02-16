//
//  KerKerNative.swift
//  iOSFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

import Foundation

@objc(KerKerNative)
class KerKerNative: NSObject {
    
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
