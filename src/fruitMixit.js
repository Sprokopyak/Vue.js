export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Orange', 'Mango', 'Banana'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((elem)=>{
                return elem.match(this.filterText);
            });
        }
    },

    created(){
        console.log('created')
    }
}