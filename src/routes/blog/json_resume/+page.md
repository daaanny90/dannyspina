---
title: My side project JSON.resume
subtitle: Manage the CV on GitHub with a single JSON config file.
date: "2023-01-26"
categories:
  - "Side project"
  - "JSON.resume"
  - "Curriculum vitae"
---

Some time ago I started a little project called **resume.json**

It is a curriculum vitae generator, **based on a JSON configuration file**.

The idea is to put your information in a JSON form (personal data, work experiences, etc.) And then generate a pdf and an HTML version of the cv.

## Why

**This allows me to just maintain a single and simple configuration file**, adding or modifying elements, without having to **fight with the text editor** (maybe is just my problem, but every time I had to update or modify my cv, I spend more time fixing the text formatting to avoid ugly split paragraphs between two pages, or white spaces that do not fit anymore with the cv design, etc.)

With resume.json you just add a new work experience, modify the date, and change the address, and **the new version is automatically generated**.

Moreover, I wanted to use the advantages of **versioning on GitHub** for my cv. I can edit it, put a new version tag and release the new version with a downloadable pdf and build the static HTML version to host on my website.

I started to write it the day I saw the LaTex cv of a friend of mine, hosted on GitHub and versioned as I explained before.

It is quite simple and “normal” for somebody like a software engineer that uses GitHub, but somehow I’ve never thought about this cool way to manage the cv.

But I wanted to make it more simple, and my idea was to add a central configuration file, in order to “forget” all the stuff like pagination, style, formatting and avoid editing parts of code to modify something, and just make the changes I want and generate the new version.

## Flow of consciousness

I started to code right away, without thinking. **I wanted to write something with fewer dependencies as possible**, and I wanted to let the code **flow away from my fingers**.

It was a kind of experiment, letting my brain be free to produce something without interfering.

In the end, I wrote a little personal framework with components.

It reminds React, but it is just a web components frontend at the end.

It was really relaxing and was really close to the experience of **writing in a flow of consciousness**, where you just start writing everything that comes from your mind without interfering and without thinking about the grammatic and meaning of the sentences.

As **Salvatore Sanfilippo** (Antirez, the creator of Redis) during his Codemotion speech in Milan in 2022 said, writing code and writing prose are two really close experiences, in a practical and also artistic way, and I totally espouse this idea.

Anyway, was really cool to experience, but…

## The refactoring

Some days later, I started to code again, this time more as an engineer than a writer.

Things started to be more complicated than I thought, and one of the biggest challenges was pagination.

Moreover, my no-brain framework **wasn’t really scalable**, and the components started to be problematic to use.

I could keep the idea and go on without dependencies, it was only a matter of time to invest.

Of course, dependencies let me save time, but on the other hand, I am dependent on other code where I do not have control.

Unfortunately, I have to make some compromises, I have a toddler at home and a new baby is on the way, so my time is really scarce.

I decided to look for something that could help, at the end, I want to solve my problem, and I don’t have to reinvent the wheel. It is good for learning purposes, and I did it, but now I want to give the project a sense and make it operative.

I found a really nice library that let me **generate a pdf from react** and has a lot of cool utilities for pagination, formatting & co.: [React PDF](https://react-pdf.org/)

I can directly host the pdf version, instead of the static HTML, and maybe is better, because somebody interested can directly download it from my website.

## How it is going

I started experimenting with the library, enough to understand that it **could be the right way**. I migrate the project from my no-brain framework to React with React-pdf.

Then **I prepared a Tailwind Template**. The only problem is, that the Library React-pdf **does not allow React custom components**, but it comes with some components that you can use.
I found then **another library**, that allows using HTML inside React-pdf, and it's awesome, but something with the **rendering is not working** and the Tailwind style is not applied. I should solve this problem now.

I wrote this blog post for me, as a **reminder and a motivational boost** to go on with the development. Adopting the principles of “building a second brain” of Tiago Forte led me to finally fix my website (it’s still a work in progress, but now is A LOT better) and to write blog posts in a consistent way.

I think that this new productivity tool that I introduced in my life can help me to be more consistent also in the development of this nice side project.

## Conclusions

[This is the GitHub repo](https://github.com/daaanny90/JSON.resume), in case you want to check it out or contribute, use it or fork it… do what you want 😁

I hope this can be an inspiration for your new idea or can be a tool that you would use to solve the problems that I also have managing the curriculum vitae.

I let post the development status here on the blog.

Thank you for reading!
