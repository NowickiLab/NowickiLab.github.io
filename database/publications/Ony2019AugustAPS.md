---
title: Road trips for redbuds; An assessment of the genetic diversity and spatial distribution of _Cercis canadensis_ in the US
slug: Redbud-Big-Scale-APS-poster
date: 2019-08-07
summary: Genetic diversity study of Eastern redbud indicates two distinct genetic clusters across the species native range in the US.
tags: ['redbud', 'cercis canadensis', 'SSR', 'Ony', 'habitat fragmentation']
---

In her [other study](https://doi.org/10.1094/PHYTO-109-10-S2.1), Meher Ony collected and analyzed MANY samples of Eastern Redbud across the species native range in the US.
We applied robust sampling and genotyping with [previously developed gSSRs](https://journals.ashs.org/jashs/view/journals/jashs/137/3/article-p189.xml), and downstream population genetics approach. We discovered presence of population structure, high genetic diversity, and moderate genetic differentiation between two major clusters of _C. canadensis_ in the Southern Appalachia. The conclusion is, the species was able to maintain high levels of genetic diversity and spatial genetic structure, despite habitat fragmentation. Results of this study have implications for habitat management efforts and future breeding programs to improve desirable horticultural traits.

```html
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

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit. Praesentium inventore hic possimus, cum nesciunt ea debitis, tempora officia perferendis vero ratione nam laudantium aliquid voluptatem velit? Open `/src/layouts.vue` and then edit the `main.css` file.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit. Praesentium inventore hic possimus, cum nesciunt ea debitis, tempora officia perferendis vero ratione nam laudantium aliquid voluptatem velit? Open `/src/layouts.vue` and then edit the `main.css` file.

```js
<script>
export default {
  props: ['totalPages', 'currentPage'],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`;
    }
  },
  data() {
    return {
      base: '/blog'
    }
  }
}
</script>
```

---

## Typography

Here is how some typography styles are rendered:

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

The quick brown fox jumps over the lazy dog

<s>The quick brown fox jumps over the lazy dog</s>

<u>The quick brown fox jumps over the lazy dog</u>

_The quick brown fox jumps over the lazy dog_

**The quick brown fox jumps over the lazy dog**

`The quick brown fox jumps over the lazy dog`

<small>The quick brown fox jumps over the lazy dog</small>

> The quick brown fox jumps over the lazy dog

[The quick brown fox jumps over the lazy dog](https://google.ca)

```php
<?php

class Foo extends bar
{
    public function fooBar()
    {
        //
    }
}
```

## Random Image

