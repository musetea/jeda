<script>
    export let post;
</script>

<div class="post">
    <h2>{post.title.substring(0,25)}</h2>
    <p>{post.body.substring(0,100)}</p>
    <p class="link"><a href={`/scratch/${post.id}`} sveltekit:prefetch >Read More</a></p>
</div>

<style>
    .post{

        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: 0 0 10px #eee;
    }
    .post h2{
        margin: 0;
    }

    .link{
        text-align: right;
    }
</style>