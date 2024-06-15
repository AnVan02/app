<template>
    <Page>
        <ActionBar title="Mới phát hành ">
            <SearchBar hint="Search hint" v-model="searchPhrase"
                @submit="onSearchSubmit" />
        </ActionBar>
        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">
                <GridLayout columns="auto,*,auto" rows="auto,*,auto"
                    backgroundImage="~/assets/image/ngo.jpg" height="200"
                    class="album-image">
                    <Image src="~/assets/image/back.png" width="25"
                        height="25" col="0" row="0"
                        @tap="$navigateBack(HelloWorld)" />
                    <Label text="Nhà Tài Trợ " fontSize="14" fontWeight="bold"
                        color="red" col="2" row="0" />
                    <Label text="Amee" fontSize="18" fontWeight="bold"
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
                    src="~/assets/images/canhan.png" />
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
                        title: "PRECIOUS",
                        artist: "DADUC ft. KIPER T",
                        year: "2022",
                        imageUrl: "~/assets/images/Daduc.jpg",
                        webSrc: "https://www.youtube.com/watch?v=0KVJZQxVsIw"
                    },
                    {
                        title: "ANH SẼ ĐÓN EM",
                        artist: "Nguyên-( với Trang ) ",
                        year: "2022",
                        imageUrl: "~/assets/images/Nguyên&Trang.jpg",
                        webSrc: "https://www.youtube.com/watch?v=8NWmfkQJ9Sg"
                    },
                    {
                        title: "Yours (Feat. 이하이, 창모)",
                        artist: "Raiden X 찬열 CHANYEOL",
                        year: "2022",
                        imageUrl: "~/assets/images/yours.jpg",
                        webSrc: "https://www.youtube.com/watch?v=N2dsnGc7TFk"
                    },
                    {
                        title: "Play Date",
                        artist: "Melanie Martinez",
                        year: "2020",
                        imageUrl: "~/assets/images/playdata.jpg",
                        webSrc: "https://www.youtube.com/watch?v=rb8vz41lE4k&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJA&start_radio=1"
                    },
                    {
                        title: "Có Hẹn Với Thanh Xuân",
                        artist: "Monstar",
                        year: "2022",
                        imageUrl: "~/assets/images/cohen.jpg",
                        webSrc: "https://www.youtube.com/watch?v=lr-MPqX1DKY&list=RDMM&index=2"
                    },
                    {
                        title: "SÀI GÒN ĐÂU CÓ LẠNH",
                        artist: "Changg x LeWiuy",
                        year: "2021",
                        imageUrl: "~/assets/images/saigon.jpg",
                        webSrc: "https://www.youtube.com/watch?v=nAvmPdtX9JE&list=RDMM&index=5"
                    }
                ]
            };
        }
    };
</script>

<style>
</style>