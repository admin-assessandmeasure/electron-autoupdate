const updateOnlineStatus = () => {
    if(navigator.onLine){
   
    }
    else{
        setTimeout(() => {window.location.reload() }, 1000);
    }
     
   
     }
     
     window.addEventListener('online', updateOnlineStatus)
     window.addEventListener('offline', updateOnlineStatus)
    
    
     
    
     updateOnlineStatus()