
function setItemWithExpiry(key:string, value:string, expiryTime:number) {
    const now = new Date();
    const item ={
      value: value,
      expiry: now.getTime() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

function getItemWithExpiry(key:string) {
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

export {setItemWithExpiry, getItemWithExpiry};