<template>
    <div>
        <div>
            <Button type="primary" size="large">Primary</Button>
            <Button size="large">Default</Button>
            <Button type="dashed" size="large">Dashed</Button>
            <Button type="link" size="large">Link</Button>
        </div>

        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
        </div>

        <div>
            <Button type="primary" size="small">Primary</Button>
            <Button size="small">Default</Button>
            <Button type="dashed" size="small">Dashed</Button>
            <Button type="link" size="small">Link</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>