#import "KerKerNative.h"



NSString *const KerKerIncrement = @"KerKerIncrement";
NSString *const KerKerOutputSend = @"KerKerOutput";

@implementation KerKerNative

RCT_EXPORT_MODULE();

- (void)startObserving
{
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(increment)
                                                 name:KerKerIncrement
                                               object:nil];
}

- (void)stopObserving
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"EventKerKer"];
}

- (void)increment
{

    [self sendEventWithName:@"EventKerKer" body:@{}];
}

+ (BOOL)increment
{
    [[NSNotificationCenter defaultCenter] postNotificationName:KerKerIncrement
                                                        object:self
                                                      userInfo:nil];
    return YES;
}

RCT_EXPORT_METHOD(output:(NSString*) message)
{
    dispatch_sync(dispatch_get_main_queue(), ^{
        [[NSNotificationCenter defaultCenter] postNotificationName:KerKerOutputSend
                                                            object:self
                                                          userInfo:@{@"message": message}];
    });

}


@end
