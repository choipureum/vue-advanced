<!--표현을 하지않는 컴포넌트 = renderless 
데이터만 제공한다.
-->

<script>
import axios from 'axios';

export default {
    props:['url'],
    data(){
        return{
            response: null,
            loading: false,
        }
    },
    created(){
        axios.get(this.url)
            .then(response =>{
                this.response = response.data;
                this.loading = true;
            })
            .catch(error =>{
                alert('[ERROR] fetching the data!');
                console.log(error);
            });
    },
    render(){
        return this.$scopedSlots.default({
            response: this.response,
            loading: this.loading,
        })
    }
}
</script>

<style>

</style>