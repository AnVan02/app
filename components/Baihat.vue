<template>
    <Page>
        <ActionBar title="Bài hát hàng đầu ">
            <SearchBar hint="Search hint" v-model="searchPhrase"
                @submit="onSearchSubmit" />
        </ActionBar>
        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">
                <GridLayout columns="auto,*,auto" rows="auto,*,auto"
                    backgroundImage="~/assets/image/laxaliacanh.jpg"
                    height="200" class="album-image">
                    <Image src="~/assets/image/back.png" width="25"
                        height="25" col="0" row="0"
                        @tap="$navigateBack(HelloWorld)" />
                    <Label text="Bản quyền thuộc " fontSize="14"
                        fontWeight="bold" color="red" col="2" row="0" />
                    <Label text="annt" fontSize="18" fontWeight="bold"
                        color="#000000" col="0" row="2" />
                </GridLayout>
                <GridLayout columns="auto,*,auto,auto" rows="auto">
                    <Label text="Sắp Xếp" marginTop="10" col="0" row="0"
                        fontSize="18" fontWeight="bold" color="#000000" />
                    <Button text="Ca sĩ" col="2" row="0" fontSize="16"
                        fontWeight="bold" color="#000000" @tap="sortASC()" />
                    <Button text="Bài hát" col="3" row="0" fontSize="16"
                        fontWeight="bold" color="#000000"
                        $tap="sortASCBH()" />
                </GridLayout>
                <ListView for="item in filterTitle" @itemTap="onItemTap">
                    <v-template>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Image :src="item.imageUrl" col="0" row="0"
                                height="75" width="75" />
                            <StackLayout col="1" row="0" marginLeft="15">
                                <Label :text="item.title" marginTop="5"
                                    paddingTop="5" color="#000000" />
                                <Label :text="item.artist" marginTop="5"
                                    paddingTop="5" color="#000000" />
                                <Label :text="item.year" marginTop="5"
                                    paddingTop="5" color="#000000" />
                            </StackLayout>
                        </GridLayout>
                    </v-template>
                </ListView>
            </StackLayout>
            <GridLayout columns="*,*,*,*,*" rows="auto" col="0" row="1"
                height="60" backgroundColor="#00CCFF">
                <Image col="0" row="0" height="30" width="30" margin="10"
                    src="~/assets/images/trangchu.jpg" />
                <Image col="1" row="0" height="30" width="30" margin="10"
                    src="~/assets/images/radio.jpg" />
                <Image col="2" row="0" height="30" width="30" margin="10"
                    src="~/assets/images/qr.jpg" />
                <Image col="3" row="0" height="30" width="30" margin="10"
                    src="~/assets/images/fl.jpg" />
                <Image col="4" row="0" height="30" width="30" margin="10"
                    src="~/assets/images/scanhan.png" />
            </GridLayout>
        </GridLayout>
    </Page>

</template>

<script>
    import AppnghenhacCK from "./Appnghenhac";
    import SongModal from "./SongModal";
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
            },
            sortASC() {
                if (this.sort == "Asc") {
                    this.sort = "Desc";
                    this.listViewData.sort(
                        (a, b) =>
                        a.artist.substring(0, 1) > b.artist.substring(0,
                            1) ?
                        1 :
                        -1
                    );
                } else {
                    this.sort = "Asc";
                    this.listViewData.sort(
                        (a, b) =>
                        a.artist.substring(0, 1) < b.artist.substring(0,
                            1) ?
                        1 :
                        -1
                    );
                }
            }
        },
        computed: {
            // cách 1:
            // filterTitle() {
            //     var ten = this.searchPhrase;
            //     if (!ten || ten === "") {
            //         return this.listViewData;
            //     } // case 2: người dùng có nhập thì lúc này
            //     //trả về đối tượng mà tìm thấy nằm trong listViewData
            //     ten = ten.trim().toLowerCase();
            //     return this.listViewData.filter(function(item) {
            //         if (item.title.toLowerCase().indexOf(ten) != -1) {
            //             return item;
            //         }
            //     });
            // }
            // cách thứ 2:
            filterTitle() {
                if (this.searchPhrase) {
                    return this.listViewData.filter(item => {
                        return this.searchPhrase
                            .toLowerCase()
                            .split("")
                            .every(v => item.title.toLowerCase()
                                .includes(v));
                    });
                } else {
                    return this.listViewData;
                }
            }
        },
        data() {
            return {
                searchPhrase: "",
                sort: "Asc",
                listViewData: [{
                        title: "Nụ Cười Em Là Nắng",
                        artist: "Green",
                        year: "2021",
                        imageUrl: "~/assets/image/10.jpg",
                        webSrc: "https://www.youtube.com/watch?v=EsVgzTJf4TA&list=RDN2dsnGc7TFk&index=8"
                    },
                    {
                        title: "Bức bình phong ",
                        artist: "Trịnh Thăng Bình",
                        year: "2020",
                        imageUrl: "~/assets/image/trinhthangbinh.jpg",
                        webSrc: "https://zingmp3.vn/bai-hat/Buc-Binh-Phong-Trinh-Thang-Binh/ZOWBWWZC.html"
                    },
                    {
                        title: "Đom Đóm",
                        artist: "Jack",
                        year: "2020",
                        imageUrl: "~/assets/image/18.jpg",
                        webSrc: "https://zingmp3.vn/video-clip/Dom-Dom-Jack/ZOZ0WD80.html"
                    },
                    {
                        title: "Rồi Tới Luôn",
                        artist: "Nal",
                        year: "2021",
                        imageUrl: "~/assets/image/roitoiluon.jpg",
                        webSrc: "https://zingmp3.vn/album/Roi-Toi-Luon-Single-Nal/68DUIAOE.html"
                    },
                    {
                        title: "Sai cách yêu",
                        artist: "Lê Bảo Bình",
                        year: "2020",
                        imageUrl: "~/assets/image/saicachyeu.jpg",
                        webSrc: "https://zingmp3.vn/bai-hat/Sai-Cach-Yeu-Le-Bao-Binh/ZUOZE7EZ.html"
                    }
                ]
            };
        }
    };
</script>

<style>
</style>