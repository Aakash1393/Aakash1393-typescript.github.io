var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, views, likes, dislikes, channelName, publishedDate, subscribers, videoInfo, numberOfComments, titleOfRelatedVideos, channelNameOfRelatedVideos, viewsOfRelatedVideos, comment, commentLikes, commentDislikes) {
        var _this = this;
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.publishedDate = publishedDate;
        this.subscribers = subscribers;
        this.videoInfo = videoInfo;
        this.numberOfComments = numberOfComments;
        this.titleOfRelatedVideos = titleOfRelatedVideos;
        this.channelNameOfRelatedVideos = channelNameOfRelatedVideos;
        this.viewsOfRelatedVideos = viewsOfRelatedVideos;
        this.comment = comment;
        this.commentLikes = commentLikes;
        this.commentDislikes = commentDislikes;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.commentLikes;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDisLikes = function () {
            return _this.dislikes;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getVideoInfo = function () {
            return _this.videoInfo;
        };
        this.getPublishedDate = function () {
            return _this.publishedDate;
        };
        this.getNumberOfComments = function () {
            return _this.comment;
        };
        this.getTitleOfRelatedVideos = function () {
            return _this.titleOfRelatedVideos;
        };
        this.getChannelNameOfRelatedVideos = function () {
            return _this.channelNameOfRelatedVideos;
        };
        this.getViewsOfRelatedVideos = function () {
            return _this.viewsOfRelatedVideos;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCommentLikes = function () {
            return _this.commentLikes;
        };
        this.getCommentDisLikes = function () {
            return _this.commentDislikes;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.publishedDate = publishedDate;
        this.subscribers = subscribers;
        this.videoInfo = videoInfo;
        this.numberOfComments = numberOfComments;
        this.titleOfRelatedVideos = titleOfRelatedVideos;
        this.channelNameOfRelatedVideos = channelNameOfRelatedVideos;
        this.viewsOfRelatedVideos = viewsOfRelatedVideos;
        this.comment = comment;
        this.commentLikes = commentLikes;
        this.commentDislikes = commentDislikes;
    }
    return YoutubeVideo;
}());
var videos = new YoutubeVideo("Alia in Aap ki adaalat", 45000, 6500, 2500, "Aap ki adaalat", "12 May 2018", 6100000, "Watch India TV chairman & Editor-in-Chief Rajat Sharma questioning Bollywood actress Alia Bhatt in Aap Ki Adalat", 5060, "Akshay kumar in aap ki adaalat", "AAP ki Adaalat", 9400000, "very nice interview", 6500000, 750000);
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
