<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <div>
                    <input
                        type="button"
                        class="btn btn-lg btn-primary"
                        @click.prevent="showModal = true"
                        value="Открыть"
                    />
                </div>
            </div>
        </div>
        <div
            v-if="selectedId"
            class="row rounded bg-secondary bg-opacity-25 p-4 fs-3 mt-4"
        >
            <div class="col text-center">
                <span>Выбранный идентификатор:</span>
                <span
                    class="badge bg-success ms-4"
                    v-text="selectedId"
                ></span>
            </div>
        </div>
    </div>
    <ModalTreeView
        v-if="showModal"
        :items="treeItems"
        title="Выберите элемент"
        @close="showModal = false"
        @select="id => (selectedId = id)"
    />
</template>

<script>
import { mapGetters } from 'vuex';
import ModalTreeView from './components/ModalTreeView.vue';

export default {
    name: 'App',
    data() {
        return {
            showModal: false,
            selectedId: null,
        };
    },
    computed: {
        ...mapGetters(['treeItems']),
    },
    components: { ModalTreeView },
};
</script>
