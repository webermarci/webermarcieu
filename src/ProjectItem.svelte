<script>
  export let title;
  export let description;
  export let url;
</script>

<div class="bg-white bg-opacity-25 p-3 rounded-lg">
  <div class="flex justify-between items-center mb-2">
    <h1>{title}</h1>
    <a
      class="flex items-center text-green-500 hover:text-green-300 transition-colors duration-300"
      href={url}
      target="_blank">
      <svg
        class="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  </div>

  <p class="text-sm mb-1">{description}</p>
</div>
