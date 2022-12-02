<script setup>
    defineProps({
        pourcentage: Number,
    });
    document.getElementsByClassName("jauge--barre").forEach(elem => {
        elem.style.width = this.pourcentage * 4 +"px";
        elem.style.backgroundColor = "hsl("+ this.pourcentage*1.5 + ", 100%, 50%)"
    })
</script>

<template>
    <div class="jauge">
        <img src="" alt="virus"/>
        <div class="jauge--barre"></div>
        <img src="" alt="personne"/>
    </div>

    
</template>

<style>
    @media screen and (min-width: 800px) {
            .jauge{
                height: 60px;
                position: fixed;
                bottom: 20px;
                left: 20px;
                display: flex;
                align-items: center;
                z-index: 4;
            }
            
            .jauge--barre{
                height: 40px;
                
                text-align: center;
                overflow: hidden;
                border-radius: 4px;
            }
        }
</style>
