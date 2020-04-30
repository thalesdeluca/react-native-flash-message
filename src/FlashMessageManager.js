/**
 * Non-public global class to handle the "default" FlashMessage instance to global use
 */
class FlashMessageManager {
  _defaultFlashMessage = [];

  register(_ref) {
    if (!this._defaultFlashMessage.includes(_ref) && "_id" in _ref) {
      this._defaultFlashMessage.push(_ref);
    }
  }
  unregister(_ref) {
    const index = this._defaultFlashMessage.findIndex(item => item._id === _ref._id);

    if (this._defaultFlashMessage.includes(_ref) && index !== -1) {
      this._defaultFlashMessage.splice(index, 1);
    }
  }

  getDefault() {
    return this._defaultFlashMessage[this._defaultFlashMessage.length - 1];
  }
}

export default new FlashMessageManager();
