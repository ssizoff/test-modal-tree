<template>
    <div
        class="modal modal-lg fade show"
        id="myModal"
        backdrop="static"
        style="display: block"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
        >
            <div class="modal-content" style="height: 60vh">
                <div class="modal-header text-white bg-secondary bg-gradient">
                    <h4 class="modal-title" v-text="title"></h4>
                    <button
                        type="button"
                        class="btn-close"
                        @click="$emit('close')"
                    ></button>
                </div>

                <div class="modal-body">
                    <slot></slot>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        @click="$emit('select')"
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
export default {
    name: 'ModalView',
    props: ['title'],
    emits: ['close', 'select'],
};
</script>
