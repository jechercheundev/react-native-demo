//
//  KerKerNative.h
//  OCFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface KerKerNative : RCTEventEmitter <RCTBridgeModule>

-(void)increment;
+ (BOOL)increment;

@end
