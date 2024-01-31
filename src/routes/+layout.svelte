<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<div class="container border p-0">
    <Header />
    <slot />
    <Footer />
</div>
