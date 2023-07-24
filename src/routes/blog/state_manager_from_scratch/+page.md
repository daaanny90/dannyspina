---
title: Writing a state manager from scratch
subtitle: In a POC with almost no dependencies, I had to reinvent the wheel and write a simple state manager.
date: "2023-03-01"
categories:
  - "Learning"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
</script>

<ImagePost file="state_manager_from_scratch.png" alt="Week Info Screenshot" />

**Hi** there! I'm so **excited** to share with you the **amazing** project I've been working on - creating a **store manager** that uses **local storage** to save data, and making it **reactive** so it can **listen** to **local storage** changes and show them in the app's UI. It's been a really **fun** experience and I'm so proud of the **result**!

Let's get started on understanding how I **crafted** this **store manager**. Initially, I needed to think of a way to **store** the Firestore data and **observe** for any changes. Because I was constructing an Electron application without any **external dependencies**, I had to use **local storage** to save the data.

Once I had successfully **saved** the Firestore data to **local storage**, the next step was to ensure **changes** were **reflected** in **real-time**. However, by default, **local storage** cannot be **listened** for changes in the same tab or page. [An event "storage" exists](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event), and can be added to the `document` object with `addEventListener("storage")`, but this event won't work on the same page that is making the changes. To address this issue, I created a **custom store manager** that uses the `window` object's properties to **store** and **access** data.

This approach allowed me to create a store manager that is **reactive**, meaning that it **listens** to **local storage** changes and **updates** the data in the UI in **real-time**. Here's how I **implemented** it:

First, I **defined** a **`StoreCallback`** interface that **describes** the signature of the functions that will be used for **publishing** and **subscribing**:

```
interface Window {
  store: {
    publish: StoreCallback
    subscribe: StoreCallback
  }
}

interface StoreCallback {
  (event: string, data: unknown): void
}

```

Then, I created a **custom store manager** object and assigned it to the **`window`** object's **`store`** property. This object has two methods: **`publish`** and **`subscribe`**.

```
window.store = {
  publish: function (event: string, data: unknown): void {
    if (!this[event]) {
      this[event] = []
    }
    this[event].forEach((callback) => {
      callback(data)
    })
  },
  subscribe: function (event: string, callback): void {
    if (!this[event]) {
      this[event] = []
    }
    this[event].push(callback)
  }
}

```

The **`publish`** method takes an **`event`** string and some **`data`**. If the **`event`** has no subscribers, it creates a new empty array for that event. It then loops through all the subscribers and calls their callback function with the **`data`**.

The **`subscribe`** method takes an **`event`** string and a **`callback`** function. If the **`event`** has no subscribers, it creates a new empty array for that event. It then adds the **`callback`** function to the array of subscribers.

Finally, to make the store manager **listen** to **local storage** changes, I **overrode** the **`setItem`** method of the **`localStorage`** object.

```
localStorage.setItem = function (key: string, value: string): void {
  window.localStorage[key] = value
  window.store.publish(key, value)
}

```

This method first **saves** the **`key`** and **`value`** to the **`localStorage`**. It then **calls** the store manager's **`publish`** method with the **`key`** and **`value`** as arguments, which in turn **updates** the UI with the new value.

To **demonstrate** how this works in practice, here's an example component that **subscribes** to changes in the **`admin_global`** event:

```
window.store.subscribe('admin_global', (data) => {
      const event = JSON.parse(data) as Event
      this.querySelector<HTMLInputElement>('#event-name')!.value = event.name
      this.querySelector<HTMLInputElement>('#event-logo-title')!.value = event.logo.title

      if (event.logo.url !== '') {
        this.querySelector<HTMLImageElement>('.current-event-logo img')!.src = event.logo.url
        this.querySelector('.upload-button')!.textContent = 'Upload new'
        this.querySelector('.current-event-logo')?.classList.remove('hidden')
      }
      this.querySelector<HTMLInputElement>('#win-zone')!.value = String(event.winZoneLevel)
    })

```

Finally, I showed you how to create a helpful **store manager** that can **store** data in the **local storage**, and update the UI in **real-time** when the **local storage** is **modified**. By taking advantage of the **`setItem`** feature of the **`localStorage`** object, I was able to **detect** changes and **keep** the UI in **sync** without relying on any additional libraries or frameworks. Although this approach has some limitations, you can always **modify** it to get a better and more **reliable** solution that you can use in production.
