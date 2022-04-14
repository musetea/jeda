<script context="module">
    export const load = async({ params, fetch, session, stuff }) => {

        const url = `/api/posts.json`;
        const response = await fetch(url);
        const posts = await response.json();

        return {
            props: {
                posts
            }
        }
    }
</script>
<script>
    import { paginate, LightPaginationNav } from "svelte-paginate";
    import Post from './Post.svelte';
    export let posts;
    let searchTerm = "";
    let items = posts;
    let currentPage = 1;
    let pageSize = 8;

    $: searchPosts = 
   
    function searchPosts(e){
        if(!searchTerm){
            items = posts;
        }else{
            items = posts.filter((post) => {
            return post.title.includes(searchTerm); 
        });
        }
      
    };

   
    $: paginatedItems = paginate({ items, pageSize, currentPage});

    
    

</script>
<!-- HTML -->
<svelte:head>
    <title>Blog from Scratch</title>
</svelte:head>

<h1>Posts</h1>

<div class="search">
    <input type="text" placeholder="search" 
    bind:value={searchTerm} 
    on:keydown={ searchPosts }
    />
</div>

<div class="posts">
    {#if items.length}
        {#each paginatedItems as post (post.id)}
            <Post {post} />
        {/each}   
    {:else}
        <p>No posts found with "{searchTerm}"!!!</p>
    {/if} 
</div>
<LightPaginationNav 
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={true}
    on:setPage={(e) => { currentPage = e.detail.page }}
/>


<style>

    .search input{
        padding: 10px 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 1rem;
    }

    .posts{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 30px 0;
    }

    @media screen and (max-width: 600px){
        
        .posts{
            grid-template-columns: 1fr;
        }
    }

</style>