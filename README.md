# Talk: React-Native Custom Components

*Slides &amp; demo code of my talk in the [React-Native Sydney Meetup](http://www.meetup.com/React-Native-Sydney/events/231326406/) about native components.*

### Intoduction
Here are the slides and the demo code (working example) that I used to talk about extending react-native API and your app components by creating your own custom modules.

### Get started

Make sure you have react-native installed.
```bash
$ npm install -g react-native-cli
```

Inside the project 'demo' folder, install the dependencies.
```bash
$ npm i
```

Run it!
```bash
$ react-native run-ios
```

### What's in there?

The goal of the talk was to create a react-native custom component from scratch, so to begin with I created a simple ListView that renders a [feed fetched from Reddit](https://www.reddit.com/r/gameofthrones.json).

Then, during the talk, I demonstrated how to create a **HodorLoader** component (which is basically just an audio player written in Objective-C - the "AudioLoader" folder), that plays repeatedly a wonderful 'Hodor' sound during the loading of the feed. Hope that will be helpful!

![Hodor](https://cloud.githubusercontent.com/assets/5517450/15765313/b8f953ea-2976-11e6-9f93-6a0a848dadf0.jpg "Hodor") ![ListView](https://cloud.githubusercontent.com/assets/5517450/15765320/c925d9fa-2976-11e6-88b9-478c10ed925c.jpg "ListView")

