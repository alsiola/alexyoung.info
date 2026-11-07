---
title: The 168 hour working week
description: Getting useful work out of agents while I'm asleep, and what that changes about my own time.
date: 2026-11-07
---

I want my agents working while I'm asleep. I'd also quite like to stay asleep.

That combination is becoming surprisingly achievable.

There are 168 hours in a week. With coding agents, we can make use of far more of them while still having a life outside work. But getting useful work out of those hours takes a fair bit more than leaving a prompt running overnight.

## Plan the night before

The biggest change is how you organise your own time.

If an agent is going to work for 16 hours without input, you need to spend some time deciding what it should actually do. Interrogate the idea. Find the awkward cases. Work out which decisions matter, what depends on what, and what evidence would convince you the result is good.

Write that down somewhere the agent can come back to.

A vague brief that needs rescuing every twenty minutes is going to have a fairly unproductive night.

## Give it what it needs to finish

Then give it the context and access to finish the job: designs in Figma, the relevant documentation, a way to start a CI environment, deploy its changes and use the thing it has built. It needs to see test failures and review feedback, and have a way to respond to both.

Otherwise you come back to a queue of things waiting for you to click a button. You've made yourself the bottleneck and then gone to bed.

The work also needs to survive interruptions. Sessions end. Processes crash. Dependencies take longer than expected. An agent needs to be able to record where it got to, wait for something, and resume when there's useful work to do.

That's a large part of what I've been building with [Open Conduit](/projects/#open-conduit). The interesting bit for me is being able to leave work in progress and trust that it will keep moving, recover, or ask for help when it actually needs it.

Some of the results have been slightly ridiculous. One of my agents spotted a problem on another agent's pull request and left feedback. I hadn't asked it to do that. It just had enough context and access to be useful.

That did feel like being in the future 😂

## Leave time to check it

I still want to see what changed and why. I want the pull request, the discussion, the test results and somewhere I can try it myself. If an agent says it has tested something, I want evidence I can inspect.

Human validation needs time set aside for it. Otherwise all you've done is move the queue from "waiting to be built" to "waiting for someone to look at it".

This changes what a productive afternoon looks like. Spending it planning, challenging assumptions and making work independently testable can be a very good use of time if it lets the work carry on through the evening.

It also makes choosing the work more important. I've spent enough time at startups polishing things nobody was looking at. Giving that process more hours would have been maddening.

168 hours is the time available for the work to run. How much useful output you get depends on the work, the agents and your ability to validate it. Counting pull requests won't tell you that.

What interests me is coming back to something I can review, test and make a decision about, having spent the time in between doing something else.

Ideally sleeping.
