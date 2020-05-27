<template>
    <div class='m-product-select'>
        <dl class='tab'>
            <dt>{{name}}<i class='el-icon-arrow-down el-icon--right'></i></dt>
            <dd>
                <h3>{{name}}</h3>
                <span v-for='item in list' :key="item.index">{{item}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:'',
    props: {
        name: {
            type:String,
            default:''
        },
        list: {
            type: Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style>

</style>
