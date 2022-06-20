<script>
    import { page } from '$app/stores';
import Icon from '../comps/Icon.svelte';
    import { onMount } from 'svelte';
$: columnItems = [];
$: cardData = [];
$: cardStatus = 0;
$: cardIndex = 0;
$: cardStatusName = "";
onMount(()=>{
columnItems = JSON.parse(localStorage.getItem("columnItems"));
cardData = JSON.parse(localStorage.getItem("currentCard"));
cardStatus = localStorage.getItem("currentCardStatus");
cardIndex = localStorage.getItem("currentCardIndex");
cardStatusName = columnItems[parseInt(cardStatus)].name
});
let changeCardName = (name) => {
    columnItems[cardStatus].items[cardIndex].name = name
    localStorage.setItem("columnItems",JSON.stringify(columnItems))
    columnItems = JSON.parse(localStorage.getItem("columnItems"))
}
let changeCardStatus = (status) => {
    alert(status)
        columnItems[cardStatus].items.splice(cardIndex, 1);
        if(status=="Not Started")
        {
            cardStatus=0;
            cardStatusName="Not Started"
            cardIndex=columnItems[0].items.length
        columnItems[0].items.push({id:cardIndex,name:cardData.name})
        }
        else if(status=="In Progress")
        {
            cardStatus=1;
            cardStatusName="In Progress"
            cardIndex=columnItems[1].items.length
        columnItems[1].items.push({id:cardIndex,name:cardData.name})
        }
        else
        {
            cardStatus=2;
            cardStatusName="Completed"
            cardIndex=columnItems[2].items.length
        columnItems[2].items.push({id:cardIndex,name:cardData.name})
        }
        localStorage.setItem("columnItems",JSON.stringify(columnItems))
        columnItems = JSON.parse(localStorage.getItem("columnItems"))
    }
     let delCard = (ind1,ind2) => {
        columnItems[ind1].items.splice(ind2, 1);
        localStorage.setItem("columnItems",JSON.stringify(columnItems))
        columnItems = JSON.parse(localStorage.getItem("columnItems"))
        window.location.pathname="/"
    }
</script>
<div class="w-screen h-screen flex items-center justify-center p-20">
    {#if columnItems?.length>0}
        <div class="flex flex-col w-6/12 space-y-4">
            <div class="w-full flex items-center justify-between">
                <input on:change={(name)=>changeCardName(name.target.value)} class="text-4xl w-full font-black" bind:value={cardData.name}/>
                <button on:click={()=>{delCard(cardStatus,cardIndex)}} class="rounded group transition-all duration-300 ease-in-out hover:scale-110 hover:bg-red-100 bg-white flex items-center justify-center border border-gray-300 px-1 h-8">
                                <div class="text-gray-500"><Icon classes="w-6 text-gray-500" icon="delete"/></div>
                </button>
            </div>
            <div class="flex justify-between w-full">
                <p class="w-full">status</p>
                <select class="w-full px-2 py-1 rounded bg-gray-100 border border-300" on:change={(status)=>changeCardStatus(status.target.value)} bind:value={cardStatusName}>
                    {#each columnItems as cols,i}
                        <option value={cols.name}>{cols.name}</option>
                    {/each}
                </select>
            </div>
            <div class="flex justify-between w-full"><p class="w-full">id</p><p class="w-full px-2 py-1 rounded bg-gray-100 border border-300">{2}</p></div>
        </div>
        {/if}
</div>