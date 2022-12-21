---
title: Real World Use Cases for Firestore
subtitle: Explore how this powerful NoSQL database can be used in a variety of software projects
date: "2022-12-21"
categories: 
  - "Firestore"
  - "NoSQL"
  - "Database"
---

# Real World Use Cases for Firestore

tl;dr: This blog post explores how Firestore, a flexible and scalable NoSQL database, can be used in real world software projects. It includes code examples for developers to try out.

## Introduction

Firestore is a NoSQL document database that offers a flexible, scalable solution for storing and syncing data across devices and servers. It's a powerful tool that can be used in a variety of software projects, from simple apps to complex systems.

In this blog post, we'll take a look at some real world use cases for Firestore, and see how it can be integrated into a software project.

## Use Case 1: User Profiles

One common use case for Firestore is storing user profiles and other related data. For example, imagine we're building a social networking app, and we want to store user profiles, friends lists, and other data.

We could set up a Firestore collection called `users`, and store each user's data as a document within that collection. Here's an example of how we might create a user document:

```
db.collection("users").doc("user123").set({
    name: "John Smith",
    age: 30,
    friends: ["user456", "user789"]
});
```

We can then use the `users` collection to query for specific users, or to get a list of all users. For example, here's how we might get a list of all users with a given name:

```
db.collection("users").where("name", "==", "John Smith").get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
        });
    })
    .catch(err => {
        console.log("Error getting documents", err);
    });
```

## Use Case 2: Real-Time Chat

Another common use case for Firestore is building real-time chat applications. With Firestore, it's easy to set up a chat system that allows users to send and receive messages in real time.

To build a chat system, we can set up a Firestore collection called `messages`, and store each message as a document within that collection. Here's an example of how we might send a message:

```
db.collection("messages").add({
    sender: "user123",
    text: "Hello, how are you?",
    timestamp: new Date()
});
```

We can then use the `messages` collection to query for messages, and display them in the chat interface. For example, here's how we might get the most recent 100 messages:

```
db.collection("messages")
    .orderBy("timestamp", "desc")
    .limit(100)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
        });
    })
    .catch(err => {
        console.log("Error getting documents", err);
    });
```

## Use Case 3: E-Commerce

Firestore can also be used in e-commerce projects, for storing product data and customer orders. For example, imagine we're building an online store that sells clothing and accessories.

We could set up a Firestore collection called `products`, and store each product as a document within that collection. Here's an example of how we might create a product document:

```
db.collection("products").doc("product123").set({
    name: "Red T-Shirt",
    price: 25.99,
    categories: ["men's clothing", "t-shirts"],
    imageUrl: "https://example.com/red-t-shirt.jpg"
});
```

To store customer orders, we could set up a separate Firestore collection called `orders`. Each order document could contain information about the customer, the products they purchased, and the order total. Here's an example of how we might create an order document:

```
db.collection("orders").add({
    customer: "user123",
    products: [{
        id: "product123",
        name: "Red T-Shirt",
        price: 25.99,
        quantity: 1
    }, {
        id: "product456",
        name: "Blue Jeans",
        price: 49.99,
        quantity: 2
    }],
    total: 125.95,
    date: new Date()
});
```

We can then use the `orders` collection to query for specific orders, or to get a list of all orders. For example, here's how we might get a list of all orders placed by a given customer:

```
db.collection("orders").where("customer", "==", "user123").get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
        });
    })
    .catch(err => {
        console.log("Error getting documents", err);
    });
```

## Conclusion

Firestore is a versatile NoSQL database that can be used in a variety of software projects. Whether you're building a social networking app, a real-time chat system, or an e-commerce platform, Firestore has you covered.