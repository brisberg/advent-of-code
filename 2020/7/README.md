# 2020 December 7 Puzzle

## Prompt A

--- Day 7: Handy Haversacks ---
You land at the regional airport in time for your next flight. In fact, it looks like you'll even have time to grab some food: all flights are currently delayed due to issues in luggage processing.

Due to recent aviation regulations, many rules (your puzzle input) are being enforced about bags and their contents; bags must be color-coded and must contain specific quantities of other color-coded bags. Apparently, nobody responsible for these regulations considered how long they would take to enforce!

For example, consider the following rules:

light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
These rules specify the required contents for 9 bag types. In this example, every faded blue bag is empty, every vibrant plum bag contains 11 bags (5 faded blue and 6 dotted black), and so on.

You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many different bag colors would be valid for the outermost bag? (In other words: how many colors can, eventually, contain at least one shiny gold bag?)

In the above rules, the following options would be available to you:

A bright white bag, which can hold your shiny gold bag directly.
A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
So, in this example, the number of bag colors that can eventually contain at least one shiny gold bag is 4.

How many bag colors can eventually contain at least one shiny gold bag?

## Solution

This feels like a tree traveral problem. We can read in each rule and build up a tree of bag dependencies. Then we can start from a leaf (Gold Bag) and walk up the tree. Each bag on the paths to the root will be able to contain the given bag.

Results:

```
Top-level bags which can contain 'shiny gold' bags are:
clear brown, light lime, drab cyan, drab yellow, dark cyan, vibrant turquoise, wavy indigo, faded green, mirrored brown, pale aqua, dim salmon, plaid red, dotted purple, dull red, dark red, dark bronze, dim tomato, dim olive, pale turquoise, pale lavender, dim brown, dull blue, pale crimson, shiny lavender, faded silver, muted cyan, bright beige, pale green, muted magenta, vibrant lavender, dull violet, mirrored tan, plaid crimson, plaid plum, mirrored indigo, striped red, dotted lime, muted indigo, shiny green, bright turquoise, muted olive, light violet, wavy green, dull salmon, plaid gray, faded lime, plaid brown, clear aqua, vibrant coral, posh black, posh yellow, dim red, wavy red, mirrored silver, dull gray, dotted tomato, pale white, dark violet, dotted olive, bright orange, drab violet, bright fuchsia, bright teal, dim aqua, shiny aqua, dim purple, clear purple, faded teal, vibrant indigo, dotted white, bright lavender, pale tan, muted violet, vibrant tan, dim coral, dotted tan, dim lavender, dark silver, dotted green, vibrant bronze, vibrant magenta, bright yellow, faded red, dotted beige, wavy tan, striped maroon, bright white, dotted fuchsia, muted salmon, dull orange, dark yellow, dotted magenta, dotted maroon, pale tomato, pale coral, muted tomato, striped cyan, dotted gray, posh cyan, drab silver, wavy brown, vibrant fuchsia, faded crimson, pale orange, shiny yellow, clear gray, mirrored plum, dotted plum, striped gray, faded blue, light green, mirrored teal, dull gold, pale gold, dull silver, drab black, muted red, dark lavender, clear tan, dotted lavender, mirrored bronze, wavy beige, clear indigo, pale chartreuse, wavy black, muted purple, wavy lime, dark lime, light teal, mirrored red, faded aqua, striped coral, posh gold, clear orange, bright aqua, plaid green, dark magenta, shiny indigo, clear teal, dark indigo, bright green, dull black, dotted cyan, striped orange, clear bronze, plaid olive, light chartreuse, faded black, pale gray, striped beige, drab aqua, dim silver, vibrant gold, posh coral, dark green, shiny gray, light bronze, dark aqua, wavy magenta, light salmon, clear fuchsia, faded yellow, dark plum, muted green, pale beige, bright chartreuse, bright black, dull chartreuse, vibrant green, wavy lavender, faded purple, wavy chartreuse, shiny olive, mirrored beige, bright violet, clear lavender, drab tan, drab crimson, pale black, mirrored yellow, clear yellow, dotted turquoise, posh gray, dull lavender, light white, mirrored orange, shiny silver, vibrant blue, wavy blue, dim magenta, vibrant salmon, posh indigo, muted teal, dotted gold, dim teal, clear violet, clear crimson, clear olive, shiny purple, vibrant plum, dotted violet, pale fuchsia, muted black, shiny violet, mirrored tomato, pale purple, wavy tomato, light black, striped green, drab maroon, vibrant red, striped olive, muted turquoise
213
```

## Prompt B

## Solution
