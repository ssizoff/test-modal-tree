<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <div>
                    <input
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="showModal = true"
                        value="Выбрать..."
                    />
                </div>
            </div>
        </div>
        <div
            v-if="selectedNode"
            class="row rounded bg-secondary text-white p-4 fs-3 mt-4"
        >
            <div class="col">
                #{{ selectedNode.id }}. {{ selectedNode.title }}
            </div>
        </div>
    </div>
    <ModalTreeView
        v-if="showModal"
        :items="$store.state.items"
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
            this.selectedNode = node;
            this.showModal = false;
        },
    },
    components: { ModalTreeView },
};
</script>
