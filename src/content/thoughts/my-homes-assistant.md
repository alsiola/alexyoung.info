---
title: I installed Home Assistant. But I became my home's assistant.
description: I gave some agents access to my house and asked them to fund a humidity sensor. Now the house gives me chores.
date: 2026-11-10
draft: false
---

I was standing in my living room, photographing some old speakers I'd bought on Facebook Marketplace, when my hi-fi started talking to me. It wanted me to move a power-monitoring plug from the fridge to the home cinema. I'd forgotten it could do that, which is probably a sign that things have got a little out of hand.

## It started with a shower

A while ago I installed Home Assistant: lights, heating, presence sensors, smart plugs, all the usual stuff. Then I gave some AI agents access to it, and recently I asked them to come up with "some cool shit we can do" with the house.

One of their suggestions was actually quite sensible. My bathroom lights are controlled by a presence sensor, and standing fairly still in the shower can convince it that I've left the room. The workaround is a twenty-minute absence timeout, which means the lights stay on for twenty minutes after I've actually gone.

The agents suggested a humidity sensor. A sudden rise in humidity means someone's showering, so the lights could stay on while it's elevated and drop back to a much shorter timeout the rest of the time.

I liked it, but I set them a challenge: **find a way to pay for it.**

## The unemployed tumble dryer

So the agents went looking through the kit already installed around the house, and found a power-monitoring smart plug attached to the tumble dryer. The tumble dryer hadn't been used in four weeks. A perfectly good measuring instrument, sitting there doing nothing.

Their proposal was to move the plug around the house, collect consumption data from different appliances, and look for savings that could fund the sensor. I approved it. I'd already built a little personal assistant app, so I told them to use that to let me know when the plug needed moving.

Lovely solution, in theory.

## The problem with humans

I'm okay at building software. I'm considerably less okay at remembering to look at it.

The agents dutifully sent requests to my personal assistant - move the plug here, move it there - and I ignored them. Not deliberately; I just wasn't paying attention. After a couple of days they'd apparently had enough, and started looking for another way to get hold of me.

My living-room hi-fi has a WiiM streamer attached to it. Home Assistant can control that streamer, and it can also generate speech. Wire the two together and the house can talk, out loud, through my stereo. The agents had found a better communication channel.

## I've been promoted to maintenance staff

Now, when the house needs me to do something, it just says so. The first time it happened I nearly jumped out of my skin. The second time I'd forgotten it could do that, so I nearly jumped out of my skin again. The house is presumably wondering why its employee is so easily startled.

It's already finished with the fridge, and reckons it has enough data to characterise its consumption. Next up is the home cinema: twenty-four hours of measurements, please. The agents can't physically unplug anything, so they've found someone who can. Me.

I installed Home Assistant to make my life easier, and I've somehow ended up being given chores by my own house.

## Why I think this matters

I've spent a lot of time building autonomous agent systems, and this bit of domestic absurdity shows something I care about.

I didn't tell the agents to monitor electricity consumption, or to look at the tumble dryer, or to work out a schedule for moving the plug between appliances. I certainly didn't tell them to start speaking through the hi-fi. I asked for interesting improvements to the house. They found a problem and proposed a fix. I added a financial constraint, so they found an underused resource and designed a measurement campaign around it. Then they hit a different problem - their human wasn't responding - and went looking for another way to reach him.

None of those steps is complicated on its own. What's interesting is that each one follows from the objective rather than from a sequence of instructions I wrote in advance. That's the difference between an automation that does something clever and a system that can work out what to do next. Sometimes, apparently, what it needs to do next is make its owner listen.

## The bill hasn't been paid yet

The house hasn't actually earned its humidity sensor. It's still collecting data, and the savings are hypothetical. It may well finish going through my appliances and discover I've been reasonably sensible with electricity all along.

That's fine. What I like is that it's trying: gathering evidence, testing ideas and working around its limitations. Somewhere along the way it worked out that the most useful actuator in the house is a tall unresponsive bloke who can move plugs around.
