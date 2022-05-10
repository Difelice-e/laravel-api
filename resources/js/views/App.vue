<template>
<<<<<<< HEAD
  <div class="app bg-zinc-800 text-white">
=======
  <div>
>>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Posts</li>
<<<<<<< HEAD
          <li>Categories</li>
        </ul>
      </nav>
    </header>

    <PostsGrid />

    <footer>
      &copy; Boolpress 2022
    </footer>
  </div>
</template>

<script>
import PostsGrid from './Posts.index.vue'

export default {
    components: {
      PostsGrid,
    }
=======
          <li>Category</li>
        </ul>
      </nav>
    </header>
    <main>
      <PostsIndex />
    </main>
    <footer>
      &copy; Boolpress 2022
    </footer>
</div>
</template>

<script>
import PostsIndex from "./PostsIndex.vue";
export default {
  components:{
    PostsIndex,
}
>>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.app {
  min-height: 100vh;
}
=======
>>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862
</style>