<template>
    <div class="footer">
        <div class="footer-data">
            <h2 class="footer-text">Image Board &#169; 2025</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style>
.footer {
    color: #ffffff;
    font-size: 12px;
    width: calc(100% - 20px);
    background-image: linear-gradient(to right, #a41096 30%, #ff58f9 70%, #a41096);
    border-top: 1px solid #ffffff;
    padding: 10px;
}

.footer-text {
    font-size: 14px;
}
</style>