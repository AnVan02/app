<template>
    <Page>
        <ActionBar title="Quét mã QR">

        </ActionBar>
        <GridLayout columns="*" rows="*,auto">
            <WebView row="1" :src="webSrc" />
        </GridLayout>
    </Page>

</template>

<script>
    import Appnghenhac from "./Appnghenhac";
    export default {
        methods: {
            onItemTap(event) {
                this.$showModal(SongModal, {
                    props: {
                        webSrc: event.item.webSrc
                    }
                });
            },
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            }
        },
        computed: {},
        props: ["webSrc"],
        data() {
            return {
                searchPhrase: "",
                webSrc: "https://quetqr.com/"
            };
        }
    };
</script>

<style>
</style>