// "I am a <species>. <toString()>"

function extendProrotype(classToExtend) {
    classToExtend.prtotype.species = 'Human';
    classToExtend.prtotype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString().call(null)}`;
    }
}
