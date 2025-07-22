import * as moment from "moment";
import "moment-timezone";

export const config = {
  apiUrl: 'http://ui-lib-demo-api.herokuapp.com',
  authRoles: {
    // sa: ['SA'], // Only Super Admin has access
    // admin: ['SA', 'Admin'], // Only SA & Admin has access
    // editor: ['SA', 'Admin', 'Editor'], // Only SA & Admin & Editor has access
    // user: ['SA', 'Admin', 'Editor', 'User'], // Only SA & Admin & Editor & User has access
    // guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access
    admin: ['Admin'],
    operator: ['Admin','Department'],
    observer:['Admin','Observer'],
    subcontractor: ['Admin','Department','Observer','Subcontractor'],
    
  },

  
  Denmarktz: 
    moment
      .tz(new Date(), "UTC")
      .tz("Europe/Copenhagen")
      .format("YYYY-MM-DD HH:mm:ss"),

  // Denmark time functions
  getDenmarkTime: {
    // Returns full datetime string
    full: () => moment().tz("Europe/Copenhagen").format("YYYY-MM-DD HH:mm:ss"),
    
    // Returns just the date part
    date: () => moment().tz("Europe/Copenhagen").format("YYYY-MM-DD"),
    
    // Returns just the time part
    time: () => moment().tz("Europe/Copenhagen").format("HH:mm:ss"),
    
    // Returns date and time as separate values
    split: () => {
      const dt = moment().tz("Europe/Copenhagen");
      return {
        date: dt.format("YYYY-MM-DD"),
        time: dt.format("HH:mm:ss")
      };
    }
  }
}