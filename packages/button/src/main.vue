<template>
    <button :type="htmlType" :class="['btn', sizeClassName, typeClassName, block ? 'btn-block': '', ghost ? 'btn-ghost' : '' ,
    disabled? 'btn-disable' : '', shapeClassName]" @click="click">
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
            ghost: {
                type: Boolean
            },
            disabled: {
                type: Boolean
            },
            loading: false,
            block: {
                type: Boolean
            },
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
                    return 'btn-size-large'
                } else if (this.size === 'small') {
                    return 'btn-size-small'
                } else {
                    return 'btn-size-default'
                }
            },
            typeClassName() {
                if(this.type === 'primary'){
                    return 'btn-type-primary'
                } else if (this.type === 'dashed') {
                    return 'btn-type-dashed'
                } else if (this.type === 'link') {
                    return 'btn-type-link'
                } else {
                    return 'btn-type-default'
                }
            },
            shapeClassName() {
                if(this.shape === 'circle') {
                    return 'btn-shape-circle'
                } else if (this.shape === 'round'){
                    return 'btn-shape-round'
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
    .btn-size-large
        padding: 7px 15px
        font-size: 16px
    .btn-size-default
        padding: 4px 15px
        font-size: 14px
    .btn-size-small
        padding: 0 7px
        font-size: 14px
    .btn-type-primary
        background-color: $primary-color
        transition: .2s
        color: white
        &:hover
            background-color: $primary-color-lt10
    .btn-type-default
        background-color: white
        border: #333 solid 1px
        color: #333
        transition: .2s
        &:hover
            border-color: $primary-color
            color: $primary-color
    .btn-type-dashed
        background-color: white
        border: #333 dashed 1px
        color: #333
        transition: .2s
        &:hover
            border-color: $primary-color
            color: $primary-color
    .btn-type-link
        background-color: white
        border: none
        color: $primary-color
        transition: .2s
        &:hover
            color: $primary-color-lt10
    .btn-block
        display: block
        width: 100%

    .btn-ghost.btn-type-primary
        background-color: transparent
        color: $primary-color
        border: $primary-color solid 1px
        border-radius: 2px
        &:hover
            background-color: transparent
            color: $primary-color-lt10
    .btn-disable.btn-type-primary
        cursor: not-allowed
        color: #BEC8C8
        background-color: #f5f5f5
        border: #BEC8C8 solid 1px
    .btn-shape-circle
        height: 32px
        padding: 0
        line-height: 32px
        width: 32px
        border-radius: 50%
        text-align: center
    .btn-shape-round
        border-radius: 50%
</style>