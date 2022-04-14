<div class="container">
    <nav>
        <ul>
            <li><a href="/scratch">Home</a></li>
        </ul>
    </nav>
    <slot />
</div>


<style>
    .container{
        max-width: 800px;
        margin: 50px auto;
    }


    nav ul{
        padding: 0;
        margin: 0;
        display: flex;
        list-style-type: none;
    }

    nav ul li{
        margin-right: 10px;
    }


</style>