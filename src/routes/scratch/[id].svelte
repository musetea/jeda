<script context="module">
    export const load = async({ params, fetch, session, stuff }) => {
        const url = `/api/scratch/${params.id}`;
        const response = await fetch(url);
        const post = await response.json();
        console.log(post);
        const user = post.user;

        // const userUrl = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
        // const responseUser = await fetch(userUrl);
        // const user = await responseUser.json();


        return {
            props: {
                post,
                user
            }
        }
    }
</script>
<script>
    export let post;
    export let user;
</script>

<div class="post">
   <h1>{post.title}</h1>
   <p>{post.body}</p>
   <p> - Written by <a href={`/scratch/authors/${user.id}`}>{user.name}</a></p>
</div>

<!-- {JSON.stringify(post)}
{JSON.stringify(user)} -->

<style>
    .post p:last-child{
        font-size: 20px;
        font-weight: 700;
        text-align: right;
    }
</style>