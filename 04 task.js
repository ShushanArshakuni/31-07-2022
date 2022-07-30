function ProfileInfo() {
  this.setUsername = function (username) {
    this.userName = username;
  };
  this.getUsername = function () {
    return this.userName;
  };
  this.setEmail = function (email) {
    this.email = email;
  };
  this.getEmail = function () {
    return this.email;
  };
  this.setAddress = function (address) {
    this.address = address;
  };
  this.getEmail = function () {
    return this.email;
  };
}
const profileInfo = new ProfileInfo();
profileInfo.setUsername("username");
profileInfo.getUsername();
profileInfo.setEmail("abc@example.com");
profileInfo.getEmail("abc@example.com");
profileInfo.setAddress("The user address");
profileInfo.getEmail();
console.log(profileInfo);

function User() {
  this.setName = function (name) {
    this.name = name;
  };
  this.getName = function () {
    return this.name;
  };
  this.setAge = function (age) {
    this.age = age;
  };
  this.getAge = function () {
    return this.age;
  };
  this.setProfileInfo = function (profileInfo) {
    this.profileInfo = profileInfo;
  };
  this.getProfileInfo = function () {
    return this.profileInfo;
  };
}
const user = new User();
user.setName("John");
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(new ProfileInfo());
user.getProfileInfo();
console.log(user);
