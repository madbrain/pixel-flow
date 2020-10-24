<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>

<header>
    <nav>
        <span>Pixel Flow</span>
        <ul>
            <li><button on:click={() => dispatch('action', 'select-image')}>Images</button></li>
            <li><button>Save</button></li>
            <li><button>Sign In</button></li>
        </ul>
    </nav>
</header>

<style>
header {
    height: var(--nav-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    margin: 0 auto;
    background-color: #272727;
    border-bottom: 1px solid #1d1d1d;
    color: white;
}

nav {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul {
    list-style: none;
}

li {
    display: inline;
}

</style>