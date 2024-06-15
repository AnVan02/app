<template>
    <Page>
        <GridLayout columns="*" rows="100,*" orientation="vertical" height="100%" >
            <Button row="0" text="Trở về" @tap="$modal.close()" />
            <WebView row="1" :src="webSrc"/>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        props: ['webSrc'],
        data() {
            return {};
        }
    }
</script>

<style>
</style>