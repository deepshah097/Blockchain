const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(239909, '0POYASUHJH', '90UIUOOA');

bitcoin.createNewTransaction(100, 'ALEXSKDJFH098', 'JENSOIFUOSIU099')

bitcoin.createNewBlock(123123, '98098789UHJH', '90U089098IUOOA');

bitcoin.createNewTransaction(50, 'ALEXSKDJFH098', 'JENSOIFUOSIU099')
bitcoin.createNewTransaction(300, 'ALEXSKDJFH098', 'JENSOIFUOSIU099')
bitcoin.createNewTransaction(2000, 'ALEXSKDJFH098', 'JENSOIFUOSIU099')

bitcoin.createNewBlock(123989, 'TUQWQWERR9UHJH', 'POIWEOURI9098IUOOA');


console.log(bitcoin.chain[2]);