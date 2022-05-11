const app = new Vue ({
    el: "#app",

    data:{
        email:[],
        isLoading: true,
        totEmail: 10,
    },
    mounted(){
        this.generaEmail()
        
    },

    methods:{
        generaEmail(){
            for (let i = 0; i < 10 ; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risp)=>{
                    this.email.push(risp.data)
                    if(this.email.length === this.totEmail){
                        this.isLoading = false;
                    }
                    
                    
                    
                    
                   
                    
                })
                
                
            }
            
            
                
            
            


        } 
    },
})