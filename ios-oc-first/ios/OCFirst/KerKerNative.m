#import "KerKerNative.h"



NSString *const KerKerIncrement = @"KerKerIncrement";

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


@end
