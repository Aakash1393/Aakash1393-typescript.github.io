var SocialProfile = /** @class */ (function () {
    function SocialProfile(works, studied, lives, mobile, birthday) {
        var _this = this;
        this.works = works;
        this.studied = studied;
        this.lives = lives;
        this.mobile = mobile;
        this.birthday = birthday;
        this.getWorks = function () {
            return _this.works;
        };
        this.getStudied = function () {
            return _this.studied;
        };
        this.getLives = function () {
            return _this.lives;
        };
        this.getMobile = function () {
            return _this.mobile;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.works = works;
        this.studied = studied;
        this.lives = lives;
        this.mobile = mobile;
        this.birthday = birthday;
    }
    return SocialProfile;
}());
var details = new SocialProfile("Delhi University", "IGNOU", "New Delhi", 250089671, "13 January 1993");
console.log(details.getWorks());
console.log(details.getStudied());
console.log(details.getLives());
console.log(details.getMobile());
console.log(details.getBirthday());
