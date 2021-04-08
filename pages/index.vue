<template class="bg-black">
        <div class="container mx-auto ">
            <page-title title=""> </page-title>
            <div class="py-5"></div>
                <client-only>
                    <masonry :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }" :gutter="20">
                        <div v-for="article in articles">
                            <card
                            :padding="3"
                            primary-color="black"
                            secondary-color="black"
                            border-radius="lg"
                            class="mb-5"
                            data-aos="fade-up">
                            <card-header class="text-gray-500">
                                <span> <v-icon name="book-open" scale="1" /> </span>
                                <span> club dihei</span>
                            </card-header>
                            <card-content>
                                <card-image v-if="article.image" :src="article.image">
                                </card-image>
                                <span v-else> {{ article.description }} </span>
                            </card-content>
                            <card-footer invert :name="article.title"> 
                            </card-footer>
                            </card>
                        </div>
                    </masonry>
                </client-only>
                <client-only>
                <infinite-loading @infinite="infiniteHandler">
                <template slot="spinner" class="text-muted small-text">Loading...</template>
                <div slot="no-more" class="text-muted small-text">
                    --- End ---
                </div>
                <div slot="no-results" class="text-muted small-text">
                    No results message
                 </div>
                </infinite-loading>
                </client-only>
            </div>
    </template>

<script>
    export default {
        data() {
            return {
                page: 0,
                limit: 4,
                articles: [],
            };
        },
        head: {
            title: "",
        },
        async fetch() {
            this.articles = await this.fetchData();
        },
        methods: {
            fetchData() {
                return this.$content("articles")
                .limit(this.limit)
                .skip(this.limit * this.page)
                .sortBy("createdAt", "desc")
                .fetch();
            },
            infiniteHandler($state) {
                setTimeout(async () => {
                    this.page += 1;
                    let additionalItems = await this.fetchData();

                    if (additionalItems.length > 0) {
                    this.articles.push(...additionalItems);
                    $state.loaded();
                    } else {
                    $state.complete();
                    }
                }, 500);
            },
        },
    };
</script>

