<template>
    <div class="d-flex align-items-center">
        <IconExpand
            v-if="node.items"
            class="me-2"
            :checked="expanded"
            @click="expanded = !expanded"
        />
        <i v-else class="bi bi-dot me-2"></i>
        <span
            v-text="node.title"
            class="p-1 flex-grow-1 rounded"
            :class="{ 'bg-primary': isActive, 'text-white': isActive }"
            @click="onSelect"
        ></span>
    </div>
    <div v-if="expanded" class="ms-2 ps-2 border-start">
        <TreeNode
            v-for="n of node.items"
            :key="n.id"
            :node="n"
            :active-id="activeId"
            @select="nd => $emit('select', nd)"
        />
    </div>
</template>

<script>
import IconExpand from './IconExpand.vue';

export default {
    name: 'TreeNode',
    props: ['node', 'activeId'],
    emits: ['select'],
    computed: {
        isActive() {
            return this.activeId === this.$props.node.id;
        },
    },
    data() {
        return {
            expanded: false,
        };
    },
    methods: {
        onSelect() {
            this.$emit('select', this.node);
        },
    },
    components: { IconExpand },
};
</script>
