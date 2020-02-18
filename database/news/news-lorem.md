---
title: News Lorem ipsum
slug: design-for-developers
date: 2019-03-07
summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus
tags: ['news', 'lorem']
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus placeat quia! Voluptates corporis atque itaque, quae in aperiam reiciendis id, beatae dicta optio rem, cumque illum tempore accusamus blanditiis consequuntur doloribus accusantium. Expedita minus suscipit vel nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus placeat quia! Voluptates corporis atque itaque, quae in aperiam reiciendis id, beatae dicta optio rem, cumque illum tempore accusamus blanditiis consequuntur doloribus accusantium. Expedita minus suscipit vel nulla.

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
