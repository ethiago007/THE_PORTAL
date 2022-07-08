export function Verification() {
    this.details = {};
    this.currentId = 0;
  }
  
  Verification.prototype.addDetail = function (detail) {
    detail.id = this.assignId();
    this.details[detail.id] = detail;
  };
  
  Verification.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  };
  
  Verification.prototype.findDetail = function (id) {
    if (this.details[id] != undefined) {
      return this.details[id];
    }
    return false;
  };
  
  export function Detail(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  
  Detail.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  
  