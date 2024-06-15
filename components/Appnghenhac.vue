<template>
    <Page>
        <ActionBar title="App Nghe Nhạc Spotify" />
        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">
                <SearchBar hint="Search hint" :text="searchPhrase"
                    @textChange="onTextChanged" @submit="onSubmit" />
                <HtmlView backgroundColor="LemonChiffon" :html="htmlString" />
                <Label text="Popular Song" backgroundColor="#66FF33"
                    fontWeight="bold" fontSize="24" color="#000000"
                    padding="15" />
                <HtmlView backgroundColor="LemonChiffon" :html="htmlString" />
                <GridLayout columns="*" rows="auto,auto" height="220"
                    width="90%" paddingLeft="20" paddingRight="20"
                    paddingTop="20" paddingBottom="5" marginTop="-15"
                    backgroundImage="~/assets/images/ngo.jpg"
                    borderRadius="10" stretch="fill" class="album-image">
                    <Label text=" " fontSize="14" fontWeight="bold"
                        color="red" col="2" row="0" />
                    <Label text="" fontSize="18" fontWeight="bold"
                        color="#000000" col="0" row="2" />
                </GridLayout>
                <!--  -->
                <SegmentedBar backgroundColor="#00FFFF">
                    <SegmentedBarItem title="Trang Chủ" />
                    <SegmentedBarItem title="ZingChart" />
                    <SegmentedBarItem title="Nhạc Cá Nhân" />
                </SegmentedBar>
                <HtmlView backgroundColor="LemonChiffon" :html="htmlString" />
                <ScrollView orientation="vertical">
                    <StackLayout>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Button text="Lựa Chọn Hôm Nay" col="0" row="0"
                                paddingLeft="10" fontSize="20" color="#000000"
                                @tap="showMoiPHatHanh()" />
                            <Button text="Top 100" col="2" row="0"
                                paddingLeft="10" fontSize="14"
                                color="#000000" />
                        </GridLayout>
                        <HtmlView backgroundColor="LemonChiffon"
                            :html="htmlString" />
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10"
                                    v-for="item in listViewDataNew"
                                    :key="item.title">
                                    <GridLayout
                                        :backgroundImage="item.imageUrl"
                                        height="110" width="125"
                                        borderRadius="20" stretch="fill"
                                        class="album-image">
                                    </GridLayout>
                                    <Label :text="item.title" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                    <Label :text="item.artist" fontSize="12"
                                        fontWeight="bold" color="#000000" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Button text="Radio Nổi Bật" col="0" row="0"
                                paddingLeft="10" fontSize="20" color="#000000"
                                @tap="showalbum()" />
                            <Button text="Top 100" col="2" row="0"
                                paddingLeft="10" fontSize="14"
                                color="#000000" />
                        </GridLayout>
                        <HtmlView backgroundColor="LemonChiffon"
                            :html="htmlString" />
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout height="150" width="125"
                                    margin="10"
                                    v-for="item in listViewDataTopSong"
                                    :key="item.title">
                                    <Image :src="item.imageUrl" height="20"
                                        width="20" horizontalAlignment="right"
                                        marginRight="5" />
                                    <GridLayout
                                        :backgroundImage="item.imageUrl"
                                        height="80" width="80"
                                        borderRadius="50" stretch="fill"
                                        class="album-image">
                                    </GridLayout>
                                    <Label :text="item.title" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                    <Label :text="item.artist" fontSize="12"
                                        fontWeight="bold" color="#000000" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                        <HtmlView backgroundColor="LemonChiffon"
                            :html="htmlString" />
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Button text="Nghệ Sĩ Zing Choice " col="0"
                                row="0" paddingLeft="10" fontSize="20"
                                color="#000000" @tap="showBaihat()" />
                            <Button text="Top 100" col="2" row="0"
                                paddingLeft="10" fontSize="14"
                                color="#000000" />
                        </GridLayout>
                        <HtmlView backgroundColor="LemonChiffon"
                            :html="htmlString" />
                        <ScrollView orientation="horizontal">>
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10"
                                    v-for="item in listViewDataAlbum"
                                    :key="item.title">
                                    <GridLayout
                                        :backgroundImage="item.imageUrl"
                                        height="150" width="125"
                                        borderRadius="20" stretch="fill"
                                        class="album-image">
                                    </GridLayout>>
                                    <Label :text="item.title" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                    <Label :text="item.artist" fontSize="12"
                                        fontWeight="bold" color="#000000" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                    </StackLayout>
                </ScrollView>
            </StackLayout>

            <GridLayout columns="*,*,*,*,*" rows="auto" col="0" row="1"
                height="60" backgroundColor="#7FFFD4">
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
    import MoiPhatHanh from "./MoiPhatHanh";
    import AlbumHapdan from "./AlbumHapdan";
    import Baihat from "./Baihat";
    import QR from "./qr";
    export default {
        methods: {
            showMoiPHatHanh() {
                this.$navigateTo(MoiPhatHanh);
            },
            showalbum() {
                this.$navigateTo(AlbumHapdan);
            },
            showBaihat() {
                this.$navigateTo(Baihat);
            },
            showQR() {
                this.$navigateTo(QR);
            }
        },
        data() {
            return {
                listViewDataNew: [{
                        title: "Đi Về Nhà",
                        artist: "Đen x JustaTee",
                        imageUrl: "~/assets/images/divenha.jpg"
                    },
                    {
                        title: "LẠC QUAN VƯỢT DỊCH",
                        artist: "Phương Ly x Hứa Kim Tuyền",
                        imageUrl: "~/assets/images/lacquan.jpg"
                    },
                    {
                        title: "PHỐ ĐÃ LÊN ĐÈN",
                        artist: "HUYỀN TÂM MÔN",
                        imageUrl: "~/assets/images/pho.jpg"
                    },
                    {
                        title: "SAO ANH CHƯA VỀ NHÀ",
                        artist: "AMEE ",
                        imageUrl: "~/assets/images/ame.jpg"
                    },
                    {
                        title: "BÔNG HOA ĐẸP NHẤT",
                        artist: "QUÂN A.P ",
                        imageUrl: "~/assets/images/bonghoa.jpg"
                    }
                ],
                listViewDataAlbum: [{
                        title: "Jack",
                        imageUrl: "~/assets/images/jack.png"
                    },

                    {
                        title: "CHANYEOL",
                        imageUrl: "~/assets/images/chanyeol.jpg"
                    },
                    {
                        title: "SƠN TÙNG M-TP",
                        imageUrl: "~/assets/images/sontung.jpg"
                    },
                    {
                        title: "Hương Ly",
                        imageUrl: "~/assets/images/huong-ly.png"
                    },
                    {
                        title: "QUÂN A.P",
                        imageUrl: "~/assets/images/quan.jpg"
                    }
                ],
                listViewDataTopSong: [{
                        title: "BƯỚC QUA NHAU",
                        artist: "Vũ",
                        imageUrl: "~/assets/images/vu.jpg"
                    },
                    {
                        title: "STREAM ĐẾN BAO GIỜ ",
                        artist: "ĐỘ MIXI ",
                        imageUrl: "~/assets/images/do.jpg"
                    },
                    {
                        title: "City Lights",
                        artist: "Chau Dang Khoa",
                        imageUrl: "~/assets/images/city.jpg"
                    },
                    {
                        title: "Tôi Đã Quên Thật Rồi ",
                        artist: "Isaac",
                        imageUrl: "~/assets/images/isaac.jpg"
                    }
                ]
            };
        }
    };
</script>

<style>
    ActionBar {
        background-color: #00FFFF;
        color: black;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #040404;
    }

    .thumb {
        width: 200px;
        height: 300px;
    }

    .active {
        background-color: rgb(9, 78, 252);
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .album-image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>