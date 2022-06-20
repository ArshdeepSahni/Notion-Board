<script>
    import Options from '../comps/Options.svelte';
    import { dndzone } from 'svelte-dnd-action';
    import Icon from '../comps/Icon.svelte'
    import { useEffect } from "../hooks";
import { onMount } from 'svelte';
$: columnItems = [];
onMount(()=>{
columnItems = JSON.parse(localStorage.getItem("columnItems"));
if(!columnItems){
    localStorage.setItem("columnItems",JSON.stringify([
    {
        id: 1,
        name: "Not Started",
        items: [
            {id: 0, name: "Untitled"},
        ]
    },
    {
        id: 2,
        name: "In Progress",
        items: []
    },
    {
        id: 3,
        name: "Completed",
        items: []
    }
]))
columnItems = JSON.parse(localStorage.getItem("columnItems"));
}
});

    // useEffect(()=>{
    //     return ()=>{columnItems = columnItems;console.log(columnItems)}
    // },[columnItems?.some().items])
    const flipDurationMs = 0;
    function handleDndConsiderColumns(e) {
        columnItems = e.detail.items;
    }
    function handleDndFinalizeColumns(e) {
        columnItems = e.detail.items;
    }
    function handleDndConsiderCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
    function handleDndFinalizeCards(cid, e) {
        const colIdx = columnItems.findIndex(c => c.id === cid);
        columnItems[colIdx].items = e.detail.items;
        columnItems = [...columnItems];
    }
    function handleClick(e) {
        alert('dragabble elements are still clickable :)');
    }
    let cardBlur = () => {
        localStorage.setItem("columnItems",JSON.stringify(columnItems))
        columnItems = JSON.parse(localStorage.getItem("columnItems"))
    }
    let addNewCard = (i) => {
        columnItems[i].items.push({id: columnItems[i].items.length, name: "Untitled"})
        localStorage.setItem("columnItems",JSON.stringify(columnItems))
        columnItems = JSON.parse(localStorage.getItem("columnItems"))
    }
    let delCard = (ind1,ind2) => {
        columnItems[ind1].items.splice(ind2, 1);
        localStorage.setItem("columnItems",JSON.stringify(columnItems))
        columnItems = JSON.parse(localStorage.getItem("columnItems"))
    }
    let currentCard = (data,status,index) => {
        localStorage.setItem("currentCard",JSON.stringify(data))
        localStorage.setItem("currentCardStatus",JSON.stringify(status))
        localStorage.setItem("currentCardIndex",JSON.stringify(index))
    }
</script>

<div class="flex w-screen space-x-10 justify-center min-h-screen h-screen overflow-y-scroll py-20 relative" use:dndzone={{items:columnItems, flipDurationMs, type:'columns'}} on:consider={handleDndConsiderColumns} on:finalize={handleDndFinalizeColumns}>
    {#if columnItems?.length>0}
    {#each columnItems as column,i}
        <div class="h-max flex flex-col w-60 space-y-4 group"
             >
            <div class="h-10 w-full flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <div class="w-max rounded {column?.id==1?"bg-red-100":column?.id==2?"bg-amber-100":column?.id==3?"bg-sky-100":"bg-gray-100"} text-gray-700 text-xs py-1 px-2">{column?.name}</div>
                    <p class="text-gray-300">{column?.items?.length}</p>
                </div>
                <div class="items-center space-x-2 group-hover:flex hidden transition-all duration-300 ease-in-out">
                    <div class="text-gray-300"><Icon classes="text-gray-300 w-6" icon="more"/></div>
                    <button on:click={()=>{addNewCard(i)}} class="cursor-pointer text-gray-300 hover:scale-150 hover:text-gray-600 transition-all duration-300 ease-in-out"><Icon classes="w-4" icon="plus"/></button>
                </div>
            </div>
            <div class="space-y-2 pt-4 focus:ring-black" use:dndzone={{items:column?.items, flipDurationMs}}
                 on:consider={(e) => handleDndConsiderCards(column?.id, e)} on:finalize={(e) => handleDndFinalizeCards(column?.id, e)}>
                {#each column?.items as item,j}
                    <button on:click={()=>{currentCard(item,i,j)}} class="relative space-x-2 h-12 cursor-pointer w-full rounded transition-all duration-300 ease-in-out hover:bg-gray-100 bg-white border border-gray-300 shadow-md flex items-center justify-between p-2">
                        <input placeholder="Untitled" bind:value={item.name} on:blur={cardBlur} class="text-gray-500 cursor-pointer h-full w-full bg-transparent border-0 text-gray-700"/>
                        <div class="flex items-center space-x-2">
                            <a href="/card" class="rounded group transition-all duration-300 ease-in-out hover:scale-110 hover:bg-emerald-100 bg-white flex items-center justify-center border border-gray-300 px-1 h-8">
                                <div class="text-gray-500"><Icon classes="w-6 text-gray-500" icon="link"/></div>
                            </a>
                            <button class="rounded group transition-all duration-300 ease-in-out hover:scale-110 hover:bg-sky-100 bg-white flex items-center justify-center border border-gray-300 px-1 h-8">
                            <div class="text-gray-500"><Icon classes="w-6 text-gray-500" icon="more"/></div>
                            <Options classes="hidden focus:inline-block transition duration-300 ease-in-out absolute right-0 z-50 -right-[11.5rem] top-6"/>
                        </button>
                        <button on:click={()=>{delCard(i,j)}} class="rounded group transition-all duration-300 ease-in-out hover:scale-110 hover:bg-red-100 bg-white flex items-center justify-center border border-gray-300 px-1 h-8">
                                <div class="text-gray-500"><Icon classes="w-6 text-gray-500" icon="delete"/></div>
                        </button>
                        </div>
                    </button>
                {/each}

            </div>
            <button on:click={()=>{addNewCard(i)}}  class="w-full h-8 rounded px-2.5 hover:bg-gray-100 bg-white flex justify-between items-center text-gray-400 text-sm font-light"><div class="flex space-x-2 items-center"><Icon icon="plus" classes="w-4 h-4 text-gray-400"/><p>New</p></div></button>
        </div>
    {/each}
    {/if}
</div>