<template>

	<main class="error-page-container">
		<section class="section--image">
			<img src="../assets/img/illustration1.png" alt="">
		</section>
		<section class="section--content">
			<h5>{{this.error_code}}</h5>
            <h4>{{this.error_message}}</h4>
			<p>The page you are looking for might be removed or is temporarily unavailable.</p>
			<hlx-button class="primary sm" @click="this.$router.push('/')">Back to homepage</hlx-button>
		</section>
	</main>
	

</template>

<script>
import hlxButton from './ButtonComponent.vue'
export default {
	components:{hlxButton},
	name:'hlx-error-page',
	props:['error_code', 'error_message'],

}
</script>

<style lang="scss" scoped>

</style>