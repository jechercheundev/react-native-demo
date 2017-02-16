//
//  ViewController.m
//  OCFirst
//
//  Created by Damien Cavailles on 16/02/2017.
//  Copyright © 2017 Damien Cavailles. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import "KerKerNative.h"

@interface ViewController ()

@end

NSString *const KerKerOutputReceive = @"KerKerOutput";

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self renderReact];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(outputFromReact:)
                                                 name:KerKerOutputReceive
                                               object:nil];
    
}

-(void)outputFromReact:(NSNotification*)notification {
    NSString* message = notification.userInfo[@"message"];
    [self.outputField setText:[NSString stringWithFormat:@"%@\n%@", self.outputField.text, message]];
    
}

- (IBAction)onToucheLeBoutton:(id)sender {
    [KerKerNative increment];
}

-(void)renderReact {
    NSLog(@"renderReact");
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"KerKer"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"Alex",
                   @"value": @"42"
                   },
               @{
                   @"name" : @"Joel",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    
    rootView.frame = CGRectMake(0, 0, 320, 240);
    [self.moustache addSubview:rootView];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
