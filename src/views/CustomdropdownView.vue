<template>
<hlx-custom-dropdown></hlx-custom-dropdown>
</template>

<script>
import HlxCustomDropdown from '../components/CustomdropdownComponent.vue'
export default {
components:{
    HlxCustomDropdown
},
data()
{
    return{
        dropdown_data: [
        { name: "Php", checked: false, disabled: false, value: "Php"},
        { name: "VueJs", checked: false, disabled: false, value: "VueJs" },
        { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" },
        { name: "Html", checked: false, disabled: false, value: "Html" },
        { name: "Css", checked: false, disabled: false, value: "Css" },
        { name: "Scss", checked: false, disabled: false, value: "Scss" },
        { name: "Sass", checked: false, disabled: false, value: "Sass" },
        { name: "Sql", checked: false, disabled: false, value: "Sql" },
        { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
        { name: "Javascript", checked: false, disabled: false, value: "Javascript" },
        {name:'Devops', checked:false, disabled:false, value: "/3mjf", type:"expression"},
        {name:'aaa', checked:false, disabled:false, value: "/3mjf", type:"expression"}
      ],
    }
}
}
</script>

<style>

</style>