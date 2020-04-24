<template>
    <img class="icon" :src="url">
</template>

<script>
    import * as icons from '@zhangleilei/icons-svg'
    export default {
        name: 'Icon',
        props: {
          name: {
              type: String,
              required: true
          }
        },
        data() {
           return {
               url: null
           }
        },
        mounted() {
            if(icons.hasOwnProperty(this.name)){
                let svg = icons[this.name].svg
                let blob = new Blob([svg], {type: 'image/svg+xml'});
                this.url = URL.createObjectURL(blob);
                // 暂时可以用image代替  实际上可以解析svg然后修改原始属性
            }
        }
    }
</script>

<style lang="sass" scoped>
 .icon
    width: 20px
    height: 20px
</style>