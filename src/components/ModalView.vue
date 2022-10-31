<template>
    <div ref="modal" class="modal modal-lg" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content shadow-lg" style="height: 60vh">
                <div class="modal-header text-white bg-secondary bg-gradient">
                    <h4 class="modal-title" v-text="title"></h4>
                    <button
                        type="button"
                        class="btn-close"
                        @click="onClose"
                    ></button>
                </div>

                <div class="modal-body">
                    <slot></slot>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        @click="() => onClose(true)"
                        class="btn btn-primary"
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default {
    name: 'ModalView',
    props: ['title'],
    emits: ['close', 'select'],
    data() {
        return {
            bsModal: null,
        };
    },
    mounted() {
        this.bsModal = new Modal(this.$refs.modal, { backdrop: 'static' });
        this.bsModal.show();
    },
    methods: {
        onClose(isSelect) {
            this.$refs.modal.addEventListener('hidden.bs.modal', () =>
                this.$emit(isSelect ? 'select' : 'close')
            );
            this.bsModal.hide();
        },
    },
};
</script>
