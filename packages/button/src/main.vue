<template>
    <button :type="htmlType" :class="['btn', sizeClassName, typeClassName]" @click="click">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                default: 'default',
                validator: (value) => {
                    return ['primary', 'default', 'dashed', 'link'].indexOf(value) !== -1
                }
            },
            size: {
                type: String,
                default: 'default',
                validator: (value) => {
                    return ['large', 'default', 'small'].indexOf(value) !== -1
                }
            },
            danger: false,
            ghost: false,
            disabled: false,
            loading: false,
            shape: {
                type: String,
                validator: (value) => {
                    return ['circle', 'round'].indexOf(value) !== -1
                }
            },
            htmlType: {
                type: String,
                default: 'button',
                validator: (value) => {
                    return ['button', 'submit', 'reset'].indexOf(value) !== -1
                }
            }
        },
        computed: {
            sizeClassName(){
                if(this.size === 'large'){
                    return 'size-large'
                } else if (this.size === 'small') {
                    return 'size-small'
                } else {
                    return 'size-default'
                }
            },
            typeClassName() {
                if(this.type === 'primary'){
                    return 'type-primary'
                } else if (this.type === 'dashed') {
                    return 'type-dashed'
                } else if (this.type === 'link') {
                    return 'type-link'
                } else {
                    return 'type-default'
                }
            }
        },
        methods: {
            click(event) {
                this.$emit('onClick', event)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../style/themes/index.sass"

    .btn
        outline: none
        border: none
        font-size: 13px
        margin: 0
        cursor: pointer
    .size-large
        padding: 7px 15px
        font-size: 16px
    .size-default
        padding: 4px 15px
        font-size: 14px
    .size-small
        padding: 0 7px
        font-size: 14px
    .type-primary
        background-color: $primary-color
        transition: .2s
        color: white
    .type-primary:hover
        background-color: $primary-color-lt10
    .type-default
        background-color: white
        border: #333 solid 1px
        color: #333
        transition: .2s
    .type-default:hover
        border-color: $primary-color
        color: $primary-color
    .type-dashed
        background-color: white
        border: #333 dashed 1px
        color: #333
        transition: .2s
    .type-dashed:hover
        border-color: $primary-color
        color: $primary-color
    .type-link
        background-color: white
        border: none
        color: $primary-color
        transition: .2s
    .type-link:hover
        color: $primary-color-lt10

</style>