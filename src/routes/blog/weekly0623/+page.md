---
title: Weekly0623
subtitle: Weekly Retro
date: "2023-02-10"
categories:
  - "weekly"
  - "blog"
  - "weeklyretro"
---

### Monday

After taking a two-week break, I'm ready to start again. As I previously mentioned, I'm leaving the agency, so it's not easy for me to find something to do. 😅 I can't start something new, but I've finished everything I had to do. For now, I'm preparing for the offboarding phase. Let's see how it goes this week. **Mood:** 🧘

### Tuesday

I'm feeling motivated 😀 In the next two weeks, I'll attempt to complete the prototype of the Electron App, which will serve as an Admin dashboard for our software. I'm trying to make Electron and Vite work together. After some research, I found [this boilerplate](https://evite.netlify.app/) that could be a good fit. It looks a bit bloated at first glance, but I'm willing to give it a try. **Mood:** 👨‍💻

### Wednesday

The boilerplate looks good. It may be a bit bloated, but I don't really mind. We are using Electron as a shell to make the web app more accessible for sharing and testing with non-technical colleagues who will use it. In the future, we will migrate to a web app. Keep up the good work. **Mood:** 👨‍💻

### Thuesday

I began the app's functionality by linking it to Firestore to get data. The plan was to drop a zip file containing some JSON with Firestore credentials. Initially, I thought I'd have to manage the zip file with Node, but it worked in the frontend too! I used JSZip and the drag and drop feature in Electron worked perfectly on the first attempt. **Mood:** 🤯

### Friday

I made progress with the electron app today and encountered the issue of live updating with Firestore. I store all the data in localStorage, which I use as a central point for all the components to read the data they need. With the `onSnapshot` method of Firestore, I can make a hot update of the data as it changes. To reflect these changes in the components, I wrote a subscription system. This system allows the components to watch localStorage and reflect the changes as they occur. It's really interesting and I plan to write a blog post about it. **Mood:** 😲
