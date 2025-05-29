<template>
    <div>
    </div>
</template>

<script>
export default {
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
            localStorage.setItem("token", token);
            this.$router.push("/rutass");
        } else {
            this.$router.push("/login");
        }
    },
};
</script>