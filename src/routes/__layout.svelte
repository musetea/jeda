<nav>
    <ul class="nav">
        <li><a href="/scratch">Scratch</a></li>
        <li><a href="/markdown">Markdown</a></li>
        <li><a href="/auth">Auth</a></li>
        <li><a href="/todo">Todo</a></li>
        <li><a href="/hooks">Hooks</a></li>
        <li><a href="/endpoint">EndPoint</a></li>
        <li><a href="/wordpress">WordPress</a></li>
        <li><a href="/supabase">Supabase</a></li>
        <li><a href="/graphql">GraphQL</a></li>
    </ul>    
</nav>


<slot />

<style>
    ul.nav{
        list-style-type: none;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    ul.nav li{
        margin: 0 5px;
        line-height: 20px;
    }

    a{
        text-decoration: none;
    }

</style>