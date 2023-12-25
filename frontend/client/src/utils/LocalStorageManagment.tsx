
function setUserWithExpiry(key:string, value:string, expiryTime:number) {
    const now = new Date();
    const item ={
      value: value,
      expiry: now.getTime() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
    const user = typeof value === 'string' ? JSON.parse(value) : value;
    return user;
};

function getUserWithExpiry(key:string) {
    const itemString = localStorage.getItem(key);
    if(!itemString){return null;}
    const item = JSON.parse(itemString);
    const now = new Date().getTime();
    if(now >= item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

export {setUserWithExpiry, getUserWithExpiry};