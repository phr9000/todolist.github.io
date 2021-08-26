const common = {};

common.install = function (Vue) {
    Vue.prototype.getImage = function (imageURL) {
        return require(`@/assets/images/${imageURL}`);
    }

}

export default common; 