<!--BookCard.vue-->
<template>
        <div class="card h-100">
            <img :src="bookData.img_url" class="card-img-top">
            <div class="card-body">
                 <p class="card-text card-header">Title: {{bookData.title}}</p>
                 <p class="card-text">Author: {{bookData.author}}</p>
                <p class="card-text">Description: {{bookData.description}}</p>
                  </div>
                  <div class="card-footer">
                <slot name="button"></slot>
                <slot name="preview" :previewSlug = "previewSlug"></slot><!-- Привязка свойства previewSlug к слоту -->
                
            </div>
        </div>
</template>

<script>
export default {
    props: {
        bookData: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
        methods: {
        computePreviewSlug(){
            return this.bookData.title.split(' ').join('-') +'-'+ this.bookData.author.split(' ').join('-')
        },
    },
    computed: {
        previewSlug(){
            return this.computePreviewSlug()
        },
    }
}
</script>
