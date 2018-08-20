class SocialProfile{
   
    constructor(public works:string,public studied:string,public lives:string,public mobile:number,public birthday:string)
    {
        this.works=works;
        this.studied=studied;
        this.lives=lives;
        this.mobile=mobile;
        this.birthday=birthday;
        
    }

    getWorks = ()=>{

        return this.works;
    }

    getStudied = ()=>{

        return this.studied;
    }

    getLives = ()=>{

        return this.lives;
    }

    getMobile = ()=>{

        return this.mobile;
    }
    getBirthday = ()=>{

        return this.birthday;
    }
   

}

 let details=new SocialProfile("Delhi University","IGNOU","New Delhi",250089671,"13 January 1993");
 console.log(details.getWorks());
 console.log(details.getStudied());
 console.log(details.getLives());
 console.log(details.getMobile());
 console.log(details.getBirthday());
 
