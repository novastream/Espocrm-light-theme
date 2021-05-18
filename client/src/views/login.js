define('custom:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        template: 'custom:login',

        data: function () {
            return{
              logoSrc: this.getLogoSrc(),
              showForgotPassword: this.getConfig().get('passwordRecoveryEnabled')
           };
        }
    });
});
