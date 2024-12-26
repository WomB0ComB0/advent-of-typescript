# Advent of TypeScript 2024 - Day 17

[🎅Santa was the victim of a magical mind-control potion, prepared by his own Mrs. Claus: 💋Crystal Claus.  It's the next morning and 🎅Santa is just walking into the break room where all the reindeer were preparing for the day's chores.]
[🎅Santa] My dear wonderful reindeer!  How truly magnificent you all are!  I don't do enough to show my appreciation for you!
[🔴Rudolph] Um.  Are you feeling ok?  Also, if the answer is "yes", you better not be about to give us $15 starbucks gift cards again as our "big bonus this season".
[🎅Santa] 🔴Rudolph, 🔴Rudolph, sweet 🔴Rudolph.  I have had an awakening!  It actually is $15 dollars!  But it's a $15 dollar per hour salary increase for every reindeer!!
[Silence.  Utter silence in the room.  The reindeer are in shock.  Several long moments pass.  The reindeer are expecting 🎅Santa to laugh in their faces and say it's all a joke...]
[🎅Santa] draw up some composable contracts!  I'll sign them all today!

You heard him!  We need to make a general purpose compose function.  This particular (simplified) function just takes functors, and returns the result of calling each, passing the result of the previous.
Hint
Think through the problem step by step, as if you were calling `h(g(f(a)))` in your own code.  Start by individually typing all of the helper functions, then once you feel confident about those, work up from there.  Don't forget about the `intrinsic` builtins!

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf>
