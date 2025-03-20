---
title: NPMGuard
subtitle: A tool to identify weakness in you package.json
date: "2025-03-20"
categories:
  - "Projects"
human: 90
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import Sidenote from "$lib/components/Sidenote.svelte"

  const imagesPath = "blog/npmguard"
</script>

In the JavaScript world, the issue of dependencies is highly debated. And rightfully so.

<ImagePost file="{imagesPath}/node_module_meme.webp" alt="meme: the heaviest object in the universe is the node_module folder" credits="Reddit r/ProgrammerHumor" />

But you already know the problems of having many dependencies, and I won't go into depth here or reflect on how conscientious we should be when choosing dependencies, both for maintainability and security.

## The Problem

Rather, since the problem exists, and many who do my job also work in agencies <Sidenote text="so they encounter many node or frontend projects that always bring along an uncontrolled mountain of dependencies"/>, I found myself needing to take stock of my package.json.

Which dependencies might create problems? Which dependencies have been abandoned by their maintainers? Are we using unstable versions below 1.0?

Then there are other factors to evaluate: when was the last commit? Because a package may not be officially archived, but if the last commit dates back to 3 years ago, the maintainer probably has had other things on their mind for a while.

I tried to find a tool that would allow me to do all this, but I only found separate tools for different checks, or in some cases no tool at all.

So, as always happens in these cases, I satisfied a personal need by writing this tool myself, and NPMGuard was born.

## A better dependency audit

NPMGuard is a CLI tool that can be installed globally with npm: `npm i -g npmguard` and it does exactly what I needed: it checks the package.json dependency by dependency, and generates a report on the current situation, telling me which dependencies require my attention and could be problematic:
- unstable packages below version 1
- archived packages
- packages with releases too old that don't receive updates
- packages with strange problems in the repo (repo not found or other issues that prevent checking)

This tool helps me audit my dependencies and understand which ones require my direct action, or at least start thinking about what to do.

It's still in its early stages, and there are things I'd like to add, such as security auditing (thus integrating `npm audit` within the report), making it executable in CI, and a whitelist.

The whitelist is particularly important, since we'll surely have dependencies that haven't received updates for a long time, but actually don't have any problems. They're just very stable. At that point, I wouldn't want to see those dependencies in my report every time, but only when something actually changes in that dependency (perhaps it gets archived, for example).

## My first NPM Package

It's also the first time I've published a package on the public NPM registry! I hope it can help someone out there with the same needs as mine, which I believe and hope are needs that others have too, since the dependency issue is something that tends to be underestimated in daily workflow, or only considered when we encounter compatibility problems between dependencies.

## About dependencies

In this regard, I'll leave here a [video by antirez](https://youtu.be/qcppDX4V1RM?si=CdcShDKSQKLLX4CA), Salvatore Sanfilippo, the founder of Redis as well as the father of the idle scan attack and other open source projects that have become industry standards, where he addresses the topic of dependencies, and [I'll also leave you an article (the one Antirez cites in the video) written by the founder of Flask](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/).

In an ideal world, I too would work without any dependencies. The problem is that business has needs and we are paid to meet these needs. My middle ground is to use dependencies with GREAT care, and use those that can really create fewer problems for me in perspective and that give me only the basic functionalities of what I need to do, and then write it myself. Often these basic functionalities are the most difficult to implement from scratch, and they are also the ones that require more time.

This tool also helps me with this, to identify problematic dependencies and possibly remove them, replacing them with their own peer dependencies.

## A real example

A small example before concluding: I arrived at a company where in the frontend they used a package to generate tooltips. This dependency was unstable and no longer maintained, and thanks to NPMGuard we became aware of this. When we needed to modify the tooltip, and knowing that the dependency that managed them was problematic, we decided to use the dependency that the archived package used and implement the functionalities ourselves.

In this way we still have a dependency, but the problematic one has been replaced by a more stable one, which does fewer things but more basic ones and doesn't bring along any peer dependencies.

Have fun with NPMGuard and of course PRs are always very welcome!
