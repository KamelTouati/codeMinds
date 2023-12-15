// status is boolean
// message will be in ar or en later
// data will be null if didn'nt passed to MyResponse
class MyResponse {
  constructor(status, message, data) {
    this.status = status;
    this.message = message || null;
    this.data = data || null;
  }
}

module.exports = MyResponse;
