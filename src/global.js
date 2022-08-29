exports.install = function (Vue) {
    Vue.prototype.t = function (wordKey){
        return this.$t("m." + wordKey)
    };

    Vue.prototype.ti = function (wordKey, index){
        return this.$t("m." + wordKey + "[" + index + "]")
    };
};