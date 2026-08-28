const getInstallApp=()=>{
    const data = localStorage.getItem('installed');
    if(data){
        const getApp = JSON.parse(data);
        return getApp;
    }
    else{
        return [];
    }
}
const storeInDB = (appId) =>{
    const dataa = getInstallApp();
    if(dataa.includes(appId)){
        alert('App already Installed!');
    }
    else{
        dataa.push(appId);
        const dt = JSON.stringify(dataa);
        localStorage.setItem('installed',dt);
        alert('App Installed successfully!')
    }
}
const removeFromDB = (appId) =>{
    const dataa = getInstallApp();
    const remainingApps = dataa.filter(id=>parseInt(id)!== parseInt(appId));
    localStorage.setItem('installed',JSON.stringify(remainingApps));
    alert('App Uninstalled successfully')
}

export {getInstallApp,storeInDB,removeFromDB};