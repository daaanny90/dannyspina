---
title: Notion widget for week, year and quartal overview
subtitle: I made a simple notion widget
date: "2023-02-05"
categories:
  - "Projects"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
</script>

Hey everyone, I created a **basic widget for Notion**. It's really straightforward, although it does have some restrictions at the moment. Here's the lowdown:

## Week, year and quartal overview

A picture is worth a thousand words; this is what the widget looks like:

<ImagePost file="weekinfo_widget.png" alt="Week Info Screenshot" />

The widget provides an **overview of the current week** (as of the screenshot date of January 29, Sunday, which is 100%), the **current year** (divided into quarters), and a breakdown of the **current quarter**.

Other than the **current day**.

## Limitations

~~Currently, the widget **only works in dark mode**. This means that if you're using Notion in light mode, you won't be able to use the widget (although it may be difficult to read)~~

**Light mode implemented! See below under "How to use it"!**

There are also other minor issues to address, such as the **spacing not fitting perfectly** on mobile and not being consistent with other elements (it leaves a small gap on the sides, which is more than other elements leave. If you're a perfectionist, you'll notice it).

## How to use it

You can find the widget [here](/notion/weekinfo). Copy the URL and add an embed element to your Notion page, then paste the URL. You may need to adjust the width and height of the element based on your page layout. The widget **is responsive**, so it will work in two-column page structures or on mobile devices.

If you use Notion in light mode (Why?) then just add `?light` to the widget url. [I did it for you if you want](/notion/weekinfo?light)

## Why

I use Notion as my "[second brain](/books/building_a_second_brain)." I have a page I use daily, which includes my weekly to-do list, notes, morning checklist, and other items.

**I needed a quick, visible way** to track my progress for the week, year, and quarter.

I set yearly goals, as well as intermediate quarterly goals, and organize my to-do list on a weekly basis. This helps me keep track of where I am in the week, year, and quarter.

## Hope it can help!

I hope you find this widget to be a useful and valuable tool. If you have any **questions, concerns, suggestions, or discover any unexpected bugs**, please don't hesitate to [reach out to me directly](/contacts) or [open an issue on GitHub](https://github.com/daaanny90/dannyspina) so that I can address them. I am committed to **continuing to update it over time** with improvements and new features. Your feedback is essential for me to ensure that this widget is of the highest quality and remains as useful as possible.

Ciao! 😊
