<template>
    <div>
        <SelectorComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import SelectorComponent from "@/components/SelectorComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: 'PagRutas',
    components: { SelectorComponent, FooterComponent },
};
</script>