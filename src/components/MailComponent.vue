<template>
    <template>
        <section class="contact_me py-5">
            <div class="inner-wrapper">
                <div class="container-fluid text-center">
                    <h2 class="text-uppercase">contact me</h2>
                    <div class="row">
                        <form class="col-12 text-start" @submit.prevent="sendForm()">
                            <div class="mb-3">
                                <input class="border-0 border-bottom form-control" type="text" name="name" id="name"
                                    placeholder="Name" v-model="name" :class="{'is-invalid': errors.name}">
                            </div>
                            <div class="mb-3">
                                <input class="border-0 border-bottom form-control" type="text" name="email" id="email"
                                    placeholder="Email" v-model="email" :class="{'is-invalid': errors.email}">
                            </div>
                            <div class="mb-3">
                                <textarea class="border-0 border-bottom form-control" name="message" id="message"
                                    cols="30" rows="10" placeholder="Message" v-model="message" :class="{'is-invalid': errors.message}"></textarea>
                            </div>
                            <button class="btn btn-lg btn-primary text-white" type="submit"
                                :disabled="loading">{{ loading? 'Sending...': 'Send' }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </template>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'mailform',

    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false,
        }
    },

    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/leads`, data).then((response) => {
                console.log(response);
               this.success = response.data.success;
                if (!this.success) {
                    this.errors=response.data.errors;
                    console.log(this.errors);
                    
                } else {
                    this.email = '';
                        this.name = '';
                        this.message = '';
                }
                this.loading = false;
            }
            )
        }
    }
}
</script>

<style lang="scss" scoped>

</style>