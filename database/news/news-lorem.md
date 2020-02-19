---
title: News Lorem ipsum
slug: design-for-developers
date: 2019-03-07
summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus
tags: ['news', 'lorem']
---

# To jest probny tytul.
## a tu zorbimy podtytul testowy
[Linka do EPP](https://epp.tennessee.edu)

<video controls>
  <source src="/vids/DC.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```
