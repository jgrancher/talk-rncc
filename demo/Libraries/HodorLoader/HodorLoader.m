#import <AVFoundation/AVFoundation.h>
#import "HodorLoader.h"
#import "RCTLog.h"

@implementation HodorLoader
{
  AVAudioPlayer *_player;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(test)
{
  // Your implementation here
  RCTLog(@"Hello, from the other world.");
}

RCT_EXPORT_METHOD(playSound:(NSString *)sound)
{
  NSURL *url = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:sound ofType:@"mp3"]];
  _player = [[AVAudioPlayer alloc] initWithContentsOfURL:url error:nil];
  [_player setNumberOfLoops:-1];
  [_player prepareToPlay];
  [_player play];
}

RCT_EXPORT_METHOD(stopSound)
{
  [_player stop];
}

@end
