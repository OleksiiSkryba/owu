<!--BookCard.vue-->
<template>
    <div>
        <div class="card">
            <img :src="bookData.img_url" class="card-img-top">
            <div class="card-body">
                <p class="card-text">Title: {{bookData.title}}</p>
                <p class="card-text">Author: {{bookData.author}}</p>
                <p class="card-text">Description: {{bookData.description}}</p>
                <slot></slot>
                <slot name="button"></slot>
            </div>
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
    }
}
</script>