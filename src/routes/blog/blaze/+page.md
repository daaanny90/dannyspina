---
title: Blaze, Revolutionizing Mobile Browsing in Low Connectivity
subtitle: Your Gateway to Lightning-Fast, Data-Efficient Web Surfing
date: "2023-10-24"
categories:
  - "Projects"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import Sidenote from "$lib/components/Sidenote.svelte"

  const imagesPath = "blog/blaze"
</script>

My mobile data plan includes a 5GB data volume. It's not a lot, and there are times when I exhaust my data before the end of the month. When this happens, my internet speed is drastically reduced.

The reduction is so severe that only messaging apps remain usable for basic text communication. If you attempt to browse, the speed is so slow that you can't even load a Google search results page.

It's in these moments that [Blaze](https://blaze.dannyspina.com) comes to mind.

When my connection isn't stable or is slow, my browsing habits become minimalistic. I focus on seeking information and limit my searches to the essentials. For that brief period, I'm content with just information, avoiding more complex social networks or web apps.

So, if all I need is textual information, why should I download hundreds of kilobytes (or even 2-3-4 megabytes) of data when I could get by with just a few kilobytes of text?

## **Blaze**

<ImagePost file="{imagesPath}/blaze_home.png" alt="home page of blaze" caption="Home page of blaze" />

[Blaze](https://blaze.dannyspina.com) does precisely this: it acts as a middleman, intercepting client requests, modifying responses, and delivering them in an optimized form.

In short, it returns extremely lightweight and streamlined web pages, ensuring lightning-fast browsing even in poor connectivity conditions. When a user performs a search, they receive a search engine results page similar to Google, but incredibly light and minimalistic. When a user clicks on a result, Blaze begins its work.

<ImagePost file="{imagesPath}/blaze_serp.png" alt="serp of blaze" caption="SERP of blaze" />

Additionally, every link found on these pages will also lead to a Blaze-optimized page.

<ImagePost file="{imagesPath}/example_blazed_page.png" alt="example blazed page" caption="This is how the Blazed version of https://developer.mozilla.org/en-US/docs/Web/JavaScript looks like" />

## **Page Optimization**

But how does it work in more detail?

When a request reaches Blaze, it makes the request on behalf of the client. Once it receives the response, its first task is to attempt parsing the page to check if it can be viewed in "read mode." If the page can be displayed this way, it is returned to the client, stripped of unnecessary JavaScript, CSS, and images.

If the page cannot be parsed in read mode, Blaze optimizes it as much as possible, even preventing the page from downloading additional resources once it reaches the client.

## **Read Mode**

Blaze employs the same library as Firefox for viewing pages in "read mode." This significantly lightens the page, making it readable even without JavaScript and CSS. Of course, if the page is unparseable, meaning it doesn't contain textual content <Sidenote text="like Reddit's homepage, for example"/>, all the superfluous elements are removed, leaving only the HTML. This might make the page less than optimal in terms of readability, and the user must settle for less-than-optimal information consumption.

## **Search Engine**

Of course, I didn't build a search engine from scratch 😄 but [I relied on Brave's APIs](https://brave.com/search/api/).

Brave delivers good results with an emphasis on privacy. There have been some controversies surrounding the creator of Brave<Sidenote text="<a href='https://it.wikipedia.org/wiki/Brendan_Eich'>Brendan Eich</a>, the father of javaScript"/> (who also developed a [privacy-oriented browser](https://brave.com/)) regarding certain statements<Sidenote text="Looks like he financially supported the California’s gay marriage ban, more informations <a href='https://www.thepinknews.com/2012/04/04/javascript-inventor-gave-1000-to-support-californias-gay-marriage-ban/'>here</a>" />. Everyone can draw their conclusions. Personally, I was just looking for a search engine that worked well and provided robust APIs, and I found a good solution in Brave, regardless of the personal opinions of its developers.

## **Use Cases**

Several use cases come to mind for this project. Certainly, my initial problem of needing basic information in poor or slow connectivity conditions. This situation can occur in places worldwide where the internet is unstable or too slow for optimal browsing <Sidenote text="do such places still exist?" />.

Blaze, therefore, works perfectly when seeking information, textual content to read, and nothing else. If you're trying to navigate Twitter in poor or unstable connectivity conditions, Blaze isn't the right solution.

## **Real-World Experiences**

Blaze has already helped someone, and I'm extremely proud of it. First and foremost, it assisted me during a trip in Italy when I ran out of data. Blaze concretely helped me navigate and find the information I needed.

A dear friend of mine had a similar experience. He was traveling in the Balkans and let me know that Blaze had assisted him several times in finding the information he needed in poor connectivity conditions.

## **My Experience**

I developed Blaze in a matter of days, writing some pretty terrible code just to make it work as quickly as possible for testing the concept – a process programmers call a "proof of concept" (POC). The POC I wrote is still the current state of Blaze. It works, but it's better not to look at the source code too closely 😂.

I must admit that, like every time, I started full of enthusiasm, thinking this product would have global success 😂. However, what was different this time was the real-world feedback.

Hearing that something I created genuinely helped someone in the world was an almost mystical experience. It's challenging to describe the emotions I felt: profound satisfaction, excitement, joy, disbelief, pride.

## **Future of Blaze**

Blaze, as I've mentioned, is still in a proof of concept state. It's usable, but the code needs some polishing. My dear friend, who used Blaze during his trip, has already submitted a pull request (PR), and more features will undoubtedly be added.

I'd like to give users the ability to see pages they've already visited and have them available offline. Maybe provide some basic offline pages that can be useful in emergencies when there's no network available, for instance.

Blaze will certainly grow, hopefully solving some problems for others out there.

## **Your Contribution**

[Blaze is, of course, open source](https://github.com/daaanny90/blaze) and can be hosted on your own server for a private version. This means that all feedback and contributions are welcome, and [the GitHub repository](https://github.com/daaanny90/blaze) is eagerly awaiting new PRs 😃.
