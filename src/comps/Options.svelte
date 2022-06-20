<script>
import Icon from "./Icon.svelte";
export let classes=""
</script>
<div class="{classes} w-60 border-300 border bg-white flex flex-col px-0.5 py-2 rounded space-y-1">
    <div class="px-2"><input class="w-full rounded border border-300 bg-gray-100 px-2 py-1 h-8 placeholder:font-thin placeholder:text-xs font-thin text-xs" placeholder="Search actions..."/></div>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <hr/>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <button class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-600 text-xs font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-600"/><p>Delete</p></div><p class="text-gray-400">Del</p></button>
    <hr/>
    <div class="flex flex-col justify-center pt-2">
    <button class="w-full  rounded px-2.5 flex justify-between items-center text-gray-400 text-xs">Last edited by Arshdeep Singh</button>
    <button class="w-full  rounded px-2.5 flex justify-between items-center text-gray-400 text-xs">Yesterday at 6:25 PM</button>
    </div>
</div>