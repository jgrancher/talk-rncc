#import <AVFoundation/AVFoundation.h>
#import "AudioLoader.h"

@implementation AudioLoader
{
  AVAudioPlayer *_player;
}

- (void)playSound:(NSString *)sound
{
  NSURL *url = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:sound ofType:@"mp3"]];
  _player = [[AVAudioPlayer alloc] initWithContentsOfURL:url error:nil];
  [_player setNumberOfLoops:-1];
  [_player prepareToPlay];
  [_player play];
}

- (void)stopSound
{
  [_player stop];
}

@end
