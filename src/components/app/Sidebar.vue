<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">

        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        props: ['value'],
        data: () => ({
            links: [
                {title: 'Счет', url: '/', exact: true}, //тк данный url есть в составе всех других, то этот пункт постоянно подсвечивается. exact говорит что url должен быть именно таким а не содержаться к часть урла
                {title: 'История', url: '/history'},
                {title: 'Планирование', url: '/planning'},
                {title: 'Новая запись', url: '/record'},
                {title: 'Категории', url: '/categories'}
            ]
        })
    }
</script>
