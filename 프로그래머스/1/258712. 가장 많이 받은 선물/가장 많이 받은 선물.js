function solution(friends, gifts) {
    let receivedGifts = {};
    let sentGifts = {};
    let interactions = {};
    
    friends.forEach(friend => {
        receivedGifts[friend] = 0;
        sentGifts[friend] = 0;
        interactions[friend] = {};
        friends.forEach(f => {
            if (f !== friend) interactions[friend][f] = 0;
        });
    });
    
    gifts.forEach(gift => {
        let [giver, receiver] = gift.split(' ');
        sentGifts[giver]++;
        receivedGifts[receiver]++;
        interactions[giver][receiver]++;
    });
    
    let giftIndex = {};
    friends.forEach(friend => {
        giftIndex[friend] = sentGifts[friend] - receivedGifts[friend];
    });
    
    let nextGiftCount = {};
    friends.forEach(friend => {
        nextGiftCount[friend] = 0;
    });
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let friend1 = friends[i];
            let friend2 = friends[j];
            let friend1ToFriend2 = interactions[friend1][friend2];
            let friend2ToFriend1 = interactions[friend2][friend1];
            
            if (friend1ToFriend2 > friend2ToFriend1) {
                nextGiftCount[friend1]++;
            } else if (friend1ToFriend2 < friend2ToFriend1) {
                nextGiftCount[friend2]++;
            } else {
                if (giftIndex[friend1] > giftIndex[friend2]) {
                    nextGiftCount[friend1]++;
                } else if (giftIndex[friend1] < giftIndex[friend2]) {
                    nextGiftCount[friend2]++;
                }
            }
        }
    }
    
    console.log(sentGifts)
    console.log(receivedGifts)
    console.log(nextGiftCount);
    console.log(interactions)
    
    let maxGifts = Math.max(...Object.values(nextGiftCount));
    return maxGifts;
}