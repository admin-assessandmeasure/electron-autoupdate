const updateOnlineStatus = () => {
 if(navigator.onLine){

 }
 else{
  window.location.reload()

 }
  

  }
  
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
  
  updateOnlineStatus()