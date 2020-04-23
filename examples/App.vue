<template>
    <div>
        <div class="row">
            <Button type="primary" size="large">Primary</Button>
            <Button size="large">Default</Button>
            <Button type="dashed" size="large">Dashed</Button>
            <Button type="link" size="large">Link</Button>
        </div>

        <div  class="row">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
        </div>

        <div  class="row">
            <Button type="primary" size="small">Primary</Button>
            <Button size="small">Default</Button>
            <Button type="dashed" size="small">Dashed</Button>
            <Button type="link" size="small">Link</Button>
        </div>
        <div class="row">
            <Button type="primary" block>Primary</Button>
        </div>

        <div class="row background">
            <Button type="primary" ghost>Primary</Button>
        </div>

        <div class="row">
            <Button type="primary" disabled>Primary</Button>
        </div>


        <div class="row">
            <Button shape="circle">A</Button>
            <Button shape="round">A</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .row {
        margin: 20px 20px;
        padding: 10px 0;
    }
    .background {
        background-color: #BEC8C8;
    }
</style>