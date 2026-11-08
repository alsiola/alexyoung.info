---
title: Embedding memory in substrate
description: The thread connecting process management, AI memory, autonomous agents and a quantum experiment — systems that carry their history in how they operate.
date: 2026-11-08
---

For years, I've been building things that, on the face of it, have very little to do with each other. Process management software. AI memory systems. Autonomous agent infrastructure. And now, somewhat absurdly, a research project involving actual quantum computers.

I've repeatedly found myself drawn to the same kinds of problems, often without understanding quite why. I've tried several times to build a product based on the concept of ProcessOps. I've built experimental systems that became almost comically complicated. I've spent a frankly unreasonable amount of time thinking about how autonomous agents should work.

And this weekend, while trying to understand the results of an experiment I'd commissioned on an IBM quantum processor, I realised something.

**They're all attempts to solve the same problem.**

Not memory as a collection of things you can retrieve. Not knowledge stored somewhere, waiting for someone to remember to look for it.

**Memory embedded in the substrate.**

The idea that a system should retain the consequences of its experiences in the very mechanisms through which it operates. That what happened before should change what can happen next, without requiring the individual actor to remember why.

And rather wonderfully, it took an experiment about quantum memory, conducted by an autonomous system built around organisational memory, for me to recognise the connection.

## ProcessOps: the organisation should remember

The earliest version of this was ProcessOps. I tried several times to build a product around it, because there was something about how organisations operated that I couldn't leave alone.

An organisation makes a mistake. People investigate. Someone writes a document. Perhaps there's a meeting, a revised procedure, a page in the wiki explaining what everyone should do differently next time.

Then the same mistake happens again.

The lesson exists. Someone can usually find it afterwards, which makes the whole thing even more irritating. But at the moment it mattered, the person doing the work either didn't know the lesson existed, didn't remember it, or didn't recognise that it applied.

That's a fairly fragile arrangement on which to base an organisation's ability to learn.

What interested me was whether you could move the lesson into the machinery of the work itself. If a particular action needs approval, the workflow should require approval. If two activities have to happen in order, the process should encode that dependency. If an omission repeatedly causes problems, the system should make that omission difficult to miss.

**Make it possible to do the right thing. Better still, make it impossible to do the wrong thing.**

For example, suppose a team repeatedly releases software before a required check has finished. You can remind everyone to wait. You can document the incident. Or you can make completion of the check a condition of release.

In the last case, someone joining the team next month benefits from an experience they never had. They don't need to remember the incident, or even know it happened, for the lesson to affect their behaviour. The organisation has retained something its individual members might have forgotten.

The document still matters. It explains why the constraint exists and helps someone judge whether it still makes sense. But the lesson has also become part of how work proceeds.

At the time, I thought of this as a problem in process management. Looking back, it was a problem in memory.

## FugueState: no recurring nightmares

[FugueState](https://github.com/alsiola/fuguestate) approached the same frustration from a rather different direction.

It was an experimental memory system for Claude Code. It watched interactions, formed beliefs, detected contradictions and periodically went to sleep to think about them. During its dreams, it could merge beliefs, retire them or rewrite them into something more useful.

Every twelfth sleep cycle it went on a spirit quest, re-examined its belief system, then performed a sobriety check on its conclusions.

As I said, some of these projects became absurdly complicated.

Underneath the theatrical machinery was a question I still find interesting: what should happen to an experience after you've stored it?

Accumulating more facts doesn't necessarily make a memory system better. You can retain two contradictory instructions indefinitely. You can retrieve the same confusing evidence every morning. You can spend considerable effort repeatedly rediscovering that something which looks like a contradiction is actually two perfectly reasonable rules applying in different circumstances.

One of FugueState's design principles was:

> No recurring nightmares — resolved non-conflicts are remembered, not re-dreamed.

This had a very literal implementation. When the system concluded that a pair of beliefs wasn't actually contradictory, it recorded that pair as a non-conflict. Future scans skipped it.

That small detail is probably a better expression of the idea than all the dreaming terminology. A conclusion changed what the system would do next time. It didn't have to reason its way through the same apparent problem again, then happen to retrieve the fact that it had already solved it.

FugueState wasn't a complete answer. Much of its output still took the form of beliefs and procedures presented to an agent, which then had to apply them. But it was exploring the movement from a collection of remembered episodes towards an organisation of knowledge that experience could change.

The question was becoming less about how much the system could remember, and more about what remembering should do to it.

## Open Conduit: persistent work, ephemeral intelligence

With [Open Conduit](https://github.com/open-conduit/open-conduit), the durable centre of the system is the work.

An LLM can provide intelligence and judgement for a particular execution. But that execution ends. Its context window fills up. Its process fails. It reaches a point where it needs something that won't happen for another six hours.

The work needs to continue through all of that.

Open Conduit holds the events, execution history, waits and dependencies outside the individual agent. An agent can decide that it needs another piece of work to finish, encode that dependency and stop running. When the relevant event arrives, the runtime can start a new execution to continue the work.

Nobody needs to remain conscious of the wait. There doesn't need to be an LLM periodically wondering whether the other agent has finished yet. The dependency has become a property of the work, and the runtime knows what to do with it.

Permissions follow a similar principle. The host checks whether a tool call is allowed. The constraint exists in the mechanism that executes the action, rather than depending entirely on the agent remembering an instruction.

This is much closer to what I had wanted from ProcessOps. The individual doing the work can change while the organisation retains its commitments and constraints.

There are familiar software engineering ideas here: durable workflows, event logs, access controls, tests. I don't think any of them becomes a new invention because I call it memory. What changed for me was recognising what I kept trying to achieve with them.

I wanted experience to survive the actor who acquired it, in a form that continued to influence the work.

Open Conduit already has mechanisms for agents to report problems and turn corrections into changes. But that raises a more demanding question. Can an agent organisation reliably identify a recurring failure, change its own operating mechanisms, and demonstrate that the change prevents the failure?

That's a much stronger claim than being able to write a good retrospective.

## Then, somewhat unexpectedly, quantum computers

The quantum project started with a peculiar intuition: could the act of producing an observation also be the mechanism by which a system remembers?

Quantum measurement is an interesting place to ask that question because it can [change the state being measured](https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/general-measurements/introduction). In a sequence of operations, the state left behind can affect what happens next.

The architecture we investigated makes this explicit. A persistent memory register interacts with an auxiliary qubit. Measuring the auxiliary qubit produces an output symbol and leaves the memory in a state conditioned on that outcome. The auxiliary qubit is reset; the memory carries on into the next step.

Producing the symbol and updating the memory are two aspects of the same operation. The sequence's history can influence future outputs through the state carried between steps.

I have no formal expertise in quantum computing. I used AI to help formalise the intuition into a research programme, then handed the programme to Open Conduit. Three days later, it had produced simulations, comparisons against classical models and, after I authorised the hardware run, an experiment on an actual IBM superconducting quantum processor.

Which remains a fairly ridiculous sentence to be able to write.

The [hardware experiment](https://github.com/alsiola/quantum-ai/blob/main/docs/phase6-hardware-run.md) used two physical qubits: one intended to carry memory and one measured for output. The main run generated 20,000 sequences of 64 symbols each.

The initial analysis found output statistics incompatible with a stationary two-state classical hidden Markov model, under its assumptions. That's interesting, but quite a specific claim. It doesn't exclude larger classical models, establish quantum advantage, or prove that all the effective memory resides in the intended memory qubit.

That last point matters enormously. Imperfect resets could leave information in the output qubit. Other qubits or the control electronics might provide unintended memory paths. Changes in the hardware over the run could make pooled data look more complicated than a single stationary process.

The [follow-up investigation](https://github.com/alsiola/quantum-ai/issues/17) is therefore trying to audit the analysis and falsify those alternative explanations. The result is something to investigate, with the physical interpretation still open.

For the purposes of this article, though, the revelation wasn't the statistical result. It was what I noticed while trying to understand it.

**The system conducting an experiment about memory was itself relying on memory embedded in its substrate.**

The research continued through separate executions because its objectives, dependencies, findings and outstanding questions existed outside any one agent's context. At one level, the experiment asked how a physical state could carry history forward. At another, the organisation running it depended on durable state to carry its own history forward.

And suddenly I could see ProcessOps and FugueState in the same picture.

## What I mean by memory

There's an obvious danger here. If I stretch the word far enough, everything becomes memory, and I've discovered little more than a pleasing metaphor.

So the definition I'm working with is this: **memory exists when information about past interactions persists in a system's state or structure and influences its future behaviour.**

The information needn't be an explicit record of what happened. A release gate doesn't contain the story of the incident that led to its creation. A non-conflict exemption doesn't need to replay the reasoning that resolved the contradiction. A quantum state isn't a readable transcript of earlier outputs.

Each can nevertheless carry something consequential from the past into the future.

In that sense, **memory is a property of the system, not necessarily of the individual actors within it.** The person or agent can be replaced while the lesson continues to shape what happens.

These are different mechanisms with different properties. An organisational workflow isn't physically equivalent to a quantum state. The analogy doesn't transfer evidence from one domain to another. A successful quantum experiment would tell us nothing by itself about whether an agent organisation can improve its own processes.

There are also two levels of change here. A quantum memory state can change as a fixed sequence-generating mechanism runs. An organisation can go further and change the mechanism itself: adding a check, altering a dependency or revising a permission. The shared principle is that history affects future behaviour; the kind of change is different.

And persistence alone isn't learning. A system can preserve a useless rule, an obsolete belief or the consequences of a mistake. To claim that it has learned something useful, I'd want evidence that the retained change improves how it handles subsequent situations.

That distinction makes the organisational version especially interesting to me. Can the system turn an experience into an improvement that survives the individual execution in which it was discovered?

## A way to test it

The next experiment I'd like to run is a fault-injection exercise with an autonomous agent organisation.

Give it work to do, introduce controlled failures and let it investigate. Perhaps an execution dies at an awkward point. Perhaps a dependency completes while nobody is running. Perhaps a tool returns an ambiguous result and retrying it risks duplicating an action.

Then let the agents propose and implement improvements to their runtime, with changes subject to review and tests. The important part comes afterwards: replace the agents, clear their conversational contexts and repeat the failure.

Does the organisation still handle it better?

For example, suppose an agent responds to a duplicate action by writing a note saying, "Always check whether this has already happened." That might help a future agent which receives the note and interprets it correctly. Suppose instead it adds an operation identifier and a check that prevents the same operation from being applied twice. Now a fresh agent can benefit without knowing about the original incident.

I'd want to compare those approaches: fresh agents with the original runtime, agents given written lessons, and fresh agents operating through the modified runtime. Measure recurring failures, recovery time, completed work and the cost of the new constraints. Then try related failures the organisation hasn't seen before, to find out whether it learned a useful principle or just patched one demonstration.

The result could easily be disappointing. Agents might generate elaborate procedures that nobody follows, add checks that don't prevent anything, or make the runtime so restrictive that it stops completing useful work.

Which brings me back to organisations made of people.

Every rule was probably someone's lesson once. Accumulate enough of them without revisiting their purpose and you get bureaucracy: a system faithfully remembering circumstances that no longer exist.

A useful system therefore needs some way to revise and remove what it has learned. It should retain enough evidence to explain a constraint, test whether the constraint still helps and change it when the circumstances change. Otherwise, embedding memory in the substrate just makes mistakes more durable.

The question I want to investigate is:

**Can we build systems that learn not merely by changing what they know, but by changing how they operate?**

## The point

I don't think I've been trying to build the same product over and over again. I've been trying to express the same idea through different products, at different levels of abstraction, for years.

And I only noticed because I built a system that could autonomously investigate memory, then watched it demonstrate the very principle I was investigating.

There's a certain irony in needing an AI with billions of parameters to help me recognise the hidden thread in my own thinking.

Even more irony in the fact that it missed the connection until I pointed it out.

Perhaps I have a few hidden parameters of my own.
