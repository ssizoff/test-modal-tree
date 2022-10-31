<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Tree</h1>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <div>
                    <input
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="showModal = true"
                        value="Open"
                    />
                </div>
            </div>
        </div>
        <div v-if="selectedNode" class="row">
            <div class="col text-center">
                <div v-text="selectedNode.title"></div>
            </div>
        </div>
    </div>
    <ModalTreeView
        v-if="showModal"
        @close="showModal = false"
        @select="onSelect"
    />
</template>

<script>
import ModalTreeView from './components/ModalTreeView.vue';

export default {
    name: 'App',
    data() {
        return {
            showModal: false,
            selectedNode: null,
        };
    },
    methods: {
        onSelect(node) {
            if (node) this.selectedNode = node;
            this.showModal = false;
        },
    },
    components: { ModalTreeView },
};
</script>
