<template>
    <div ref="modal" class="modal modal-lg" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content shadow-lg" style="height: 60vh">
                <div class="modal-header text-white bg-secondary bg-gradient">
                    <h4 class="modal-title" v-text="title"></h4>
                </div>

                <div class="modal-body">
                    <TreeView
                        :items="items"
                        @select="node => (selected = node)"
                    />
                </div>

                <div class="modal-footer justify-content-center">
                    <button
                        :disabled="!selected"
                        type="button"
                        @click="onSelect(), onClose()"
                        class="btn btn-primary me-4"
                    >
                        Ok
                    </button>
                    <button
                        type="button"
                        @click="onClose"
                        class="btn btn-secondary ms-4"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TreeView from './TreeView.vue';
import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default {
    name: 'ModalTreeView',
    emits: ['close', 'select'],
    props: ['items', 'title'],
    data() {
        return {
            selected: null,
            bsModal: null,
        };
    },
    mounted() {
        this.bsModal = new Modal(this.$refs.modal, { backdrop: 'static' });
        this.bsModal.show();
    },
    methods: {
        onSelect() {
            this.$emit('select', this.selected.id);
        },
        onClose() {
            this.$refs.modal.addEventListener('hidden.bs.modal', () =>
                this.$emit('close')
            );
            this.bsModal.hide();
        },
    },
    components: { TreeView },
};
</script>
