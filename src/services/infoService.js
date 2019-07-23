export default class InfoService {
    _apiBase = 'http://localhost:3000';  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, error: ${res.status}`);
      }
      return await res.json();
    }
    
    getAllClients = async () => {
       return await this.getResourse('/clients/')
       
      }
    } 