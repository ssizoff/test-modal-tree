<template>
    <div class="tree-view">
        <TreeNode
            v-for="i of items"
            :key="i.id"
            :node="i"
            :active-id="activeId"
            @select="onSelect"
        />
    </div>
</template>

<script>
import TreeNode from './TreeNode.vue';

export default {
    name: 'TreeView',
    props: ['items'],
    emits: ['select'],
    data() {
        return {
            activeId: -1,
        };
    },
    components: { TreeNode },
    methods: {
        onSelect(node) {
            this.activeId = node.id;
            this.$emit('select', node);
        },
    },
};
</script>
