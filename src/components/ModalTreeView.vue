<template>
    <ModalView
        @close="$emit('close')"
        @select="$emit('select', selected)"
        :title="selected?.title ?? 'Выберите элемент'"
    >
        <TreeView :items="items" @select="node => (selected = node)" />
    </ModalView>
</template>

<script>
import ModalView from './ModalView.vue';
import TreeView from './TreeView.vue';

export default {
    name: 'ModalTreeView',
    emits: ['close', 'select'],
    props: ['items'],
    data() {
        return {
            selected: null,
        };
    },
    components: { ModalView, TreeView },
};
</script>
