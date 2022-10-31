<template>
    <i :class="iconClass"></i>
</template>

<script>
export default {
    name: 'IconExpand',
    props: ['checked'],
    computed: {
        iconClass() {
            const { checked } = this.$props;
            return [
                'bi',
                `bi-${checked ? 'dash' : 'plus'}`,
                'btn',
                'btn-outline-secondary',
                'lh-1',
                'p-0',
                'opacity-75'
            ];
        },
    },
};
</script>
