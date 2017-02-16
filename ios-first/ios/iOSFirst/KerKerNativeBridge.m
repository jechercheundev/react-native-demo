//
//  KerKerNativeBridge.m
//  iOSFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KerKerNative, NSObject)

RCT_EXTERN_METHOD(output:(NSString *)message)

@end
