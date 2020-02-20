---
title: Welcome on the Nowicki lab webpage!
slug: Hello-World
date: 2020-02-19
summary: Intro to the Nowicki lab, [Dept. of Entomology and Plant Pathology at University of Tennessee](https://epp.tennessee.edu).
tags: ['welcome', 'hello']
---

TU BEDZIE LOGO [Ania sie zgodzila; termin do konca przyszlegot ygodnia bo chore dzieci]. Czy to dobry pomysl, zeby wejcie na Glowna bylo pod nim? Czy lepiej, zeby logo bylo w lewym gornym zamiast "home"?



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
