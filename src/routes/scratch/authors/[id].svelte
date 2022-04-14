<script context="module">
    export const load = async({ params, fetch, session, stuff }) => {
        console.log(params);

        const id = params.id;
        const url = `/api/scratch/authors/${id}`;
        // console.log(allPosts);
        const [resUser] = await Promise.all([
            fetch(url)
        ]);
        const user= await resUser.json();
        console.log(user);
        return{
            props:{
                user,
                posts:user.posts,
            }
        }
    };
</script>
<script>
    export let user;
    export let posts;
</script>

<svelte:head>
    <title>Authors - {user.name}</title>
</svelte:head>

<div class="user">
    <h1>{user.name}</h1>
    <p>
        <label>
            Email:
            <b>{user.email}</b>
        </label>
    </p>
    
    <div>
        <label>
            Address:
            <b>{user.address.street} {user.address.suite} {user.address.city}</b> <small>({user.address.zipcode})</small>
            
        </label>
    </div>
    <div>
        <label>
            Phone:
            <b>{user.phone}</b>
        </label>
    </div>
    <div>
        <label>
            WebSite:
            <b><a href="{user.website}">{user.website}</a></b>
        </label>
    </div>
    <div>
        <h3>Company</h3>
        <div>
            <b>{user.company.name}</b>
        </div>

        <label>
            catchPhrase:
            <i>{user.company.catchPhrase}</i>
        </label>
    </div>
    
</div>
<div class="posts">
    <h2>Posts by "{user.username}"</h2>
    <ul>
        {#each posts as post}
            <li><a href={`/scratch/${post.id}`}>{post.title}</a></li>
        {/each}
    </ul>
    
</div>

<!-- 
{JSON.stringify(user)}
{JSON.stringify(posts)} -->

<style>
    ul{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }

    li{
        margin-bottom: 10px;
    }
</style>