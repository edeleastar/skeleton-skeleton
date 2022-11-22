<script>
	import '@brainandbones/skeleton/themes/theme-skeleton.css';
	import '@brainandbones/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@brainandbones/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>Skeleton</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/topic/hello-world">Topic</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</svelte:fragment>

	<div class="container mx-auto pt-8 mt-4">
		<slot />
	</div>
</AppShell>
