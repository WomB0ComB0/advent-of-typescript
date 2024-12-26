# Advent of TypeScript 2024 - Day 18

[After decades of not raising the reindeer's pay, 🎅Santa suddenly and unexpectedly decided to raise their pay quite substantially.  The reindeer are in shock.]
[☄️Comet] It cannot be overstated enough how unlikely this was.  How did he suddenly change.
[💃Dancer] We all know what happened.  It was 💋Crystal.  She convinced him.
[🌟Vixen] This is gonna make such a huge difference for my finances.  I can finally pay off the debt I accrued from Battlefront II loot boxes.
[❤️Cupid] You idiots.  This is a win, but it's hardly putting us ahead.  Have you forgotten about the 15 consecutive years of us being paid unfairly?  All those lost wages will never come back to us.  It's gone.  We're only being paid a fair average wage now.  We're not even paid well.  50% of reindeer make more than we do, and we're supposed to be happy about that!?  We're the premiere reindeer the whole world looks up to yet we're paid like a substitute teacher elf.
[💃Dancer] Well, irregardless, we've got an easy day in front of us.  All we need to do is fix a small problem with the street lights in town.  After that... might be time to throw ourselves a little party!
[❤️Cupid] Is a party really appropriate given the circumstances?  💨Dasher, didn't your wife's hospitalization 5 years ago bankrupt you - have you recovered from that?
[💨Dasher] Yeah, that is true, but look at the bright side!  We're paid more now!
[❤️Cupid] Do I have to get out my inflation calculator again for you nincompoops??
[💃Dancer] Alright alright ❤️Cupid, we all heard you.  Let's just fix the street lights, can we?
[❤️Cupid] One day 🎅Santa is gonna come to his senses and realize what happened here.  When that day comes, we're in for an exceedingly bad time.  Mark.  My.  Words.

Hint
If you're tempted to do something like this
const createStreetLight = <
  C extends string,
  D extends C,
>(
  colors: C[],
  defaultColor: D,
) => {
  // ...
}
That won't work here.  We're trying to signal to TypeScript not to dig in and match against the inner types to find candidates for type inference.

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf
