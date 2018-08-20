class YoutubeVideo{
   
    constructor(public title:string,public views:number,public likes:number,public dislikes:number,public channelName:string,public publishedDate:string,public subscribers:number,public videoInfo:string,public numberOfComments:number,public titleOfRelatedVideos:string,public channelNameOfRelatedVideos:string,public viewsOfRelatedVideos:number,public comment:string,public commentLikes:number,public commentDislikes:number)
    {
        this.title=title;
        this.views=views;
        this.likes=likes;
        this.dislikes=dislikes;
        this.channelName=channelName;
        this.publishedDate=publishedDate;
        this.subscribers=subscribers;
        this.videoInfo=videoInfo;
        this.numberOfComments=numberOfComments;
        this.titleOfRelatedVideos=titleOfRelatedVideos;
        this.channelNameOfRelatedVideos=channelNameOfRelatedVideos;
        this.viewsOfRelatedVideos=viewsOfRelatedVideos;
        this.comment=comment;
        this.commentLikes=commentLikes;
        this.commentDislikes=commentDislikes;
    }

    getTitle = ()=>{

        return this.title;
    }

    getViews = ()=>{

        return this.commentLikes;
    }

    getLikes = ()=>{

        return this.likes;
    }

    getDisLikes = ()=>{

        return this.dislikes;
    }
    getChannelName = ()=>{

        return this.channelName;
    }
    getSubscribers = ()=>{

        return this.subscribers;
    }
    getVideoInfo = ()=>{

        return this.videoInfo;
    }

    getPublishedDate = ()=>{

        return this.publishedDate;
    }

    getNumberOfComments = ()=>{

        return this.comment;
    }

    getTitleOfRelatedVideos = ()=>{

        return this.titleOfRelatedVideos;
    }

    getChannelNameOfRelatedVideos = ()=>{

        return this.channelNameOfRelatedVideos;
    }

    getViewsOfRelatedVideos = ()=>{

        return this.viewsOfRelatedVideos;
    }

    getComment = ()=>{

        return this.comment;
    }

    getCommentLikes = ()=>{

        return this.commentLikes;
    }

    getCommentDisLikes = ()=>{

        return this.commentDislikes;
    }

}

 let videos=new YoutubeVideo("Alia in Aap ki adaalat",45000,6500,2500,"Aap ki adaalat","12 May 2018",6100000,"Watch India TV chairman & Editor-in-Chief Rajat Sharma questioning Bollywood actress Alia Bhatt in Aap Ki Adalat",5060,"Akshay kumar in aap ki adaalat","AAP ki Adaalat",9400000,"very nice interview",6500000,750000);
 console.log(videos.getTitle());
 console.log(videos.getViews());
 console.log(videos.getLikes());
 console.log(videos.getDisLikes());
 console.log(videos.getChannelName());
 console.log(videos.getSubscribers());
 console.log(videos.getVideoInfo());
 console.log(videos.getPublishedDate());
 console.log(videos.getNumberOfComments());
 console.log(videos.getTitleOfRelatedVideos());
 console.log(videos.getChannelNameOfRelatedVideos());
 console.log(videos.getViewsOfRelatedVideos());
 console.log(videos.getComment());
 console.log(videos.getCommentLikes());
 console.log(videos.getCommentDisLikes());
