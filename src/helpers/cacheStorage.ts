import { window } from 'browser-monads';

/**
 * @description Handle some specific temporary storing actions
 * @author Janden Ma
 * @version 06/23/2021
 */
function CacheStorage() {
  // #region private functions
  /**
   * get stored data from storage
   * @param {{key:string, position:'LOCAL'|'SESSION'}} args
   * @returns {any}
   */
  function getFromStorage({ key, position = 'LOCAL' }) {
    try {
      // Get from storage by key
      const item =
        position === 'LOCAL'
          ? window.localStorage.getItem(key)
          : window.sessionStorage.getItem(key);
      if (!item) {
        // if none return null
        return null;
      }
      try {
        // Parse stored json
        const parsedItem = JSON.parse(item);
        return parsedItem;
      } catch {
        return item;
      }
    } catch (error) {
      // If error also return null
      console.error(error);
      return null;
    }
  }

  /**
   * store data to storage
   * @param {{key:string, position:'LOCAL'|'SESSION', data:any}} args
   * @returns {void}
   */
  function setToStorage({ key, position = 'LOCAL', data }) {
    try {
      const value = typeof data === 'string' ? data : JSON.stringify(data);
      // Save to storage
      if (position === 'LOCAL') {
        window.localStorage.setItem(key, value);
      } else {
        window.sessionStorage.setItem(key, value);
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  }

  /**
   * remove stored data from storage
   * @param {{key:string, position:'LOCAL'|'SESSION'}} args
   * @returns {void}
   */
  function removeFromStorage({ key, position = 'LOCAL' }) {
    try {
      if (position === 'LOCAL') {
        window.localStorage.removeItem(key);
      } else {
        window.sessionStorage.removeItem(key);
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  }
  // #endregion
  // #region Closure (Make sure inner functions are private)
  function Core() {
    this.chosenAddOnsKey = '^OcxsPD&'; // specific key for chosen add ons cache
  }

  // public functions
  Core.prototype = {
    /**
     * set Chosen Add Ons data to storage
     */
    setChosenAddOnsCache({ data }) {
      setToStorage({ data, key: this.chosenAddOnsKey });
    },
    /**
     * get chosen Add Ons data from storage
     */
    getChosenAddOnsCache() {
      const data = getFromStorage({ key: this.chosenAddOnsKey });
      return data ?? null;
    },
    /**
     * clear Chosen Add Ons Cache
     */
    clearChosenAddOnsCache() {
      const data = getFromStorage({ key: this.chosenAddOnsKey });
      if (data) {
        removeFromStorage({ key: this.chosenAddOnsKey });
      }
    },
  };

  return Core;
}

// use proxy to prevent tampering private properties and functions
export default new Proxy(CacheStorage(), {
  defineProperty() {
    // NOT ALLOW TO SET VALUE TO INNER PROPERTIES
    return false;
  },
});
