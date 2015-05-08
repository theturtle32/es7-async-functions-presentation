"use strict";

import faker from 'faker'
import debug from 'debug'
import Promise from 'promise';

var log = debug('user');

export default class User {
  
  constructor(data) {
    Object.assign(this, data);
  }
  
  static buildFakeUser() {
    var name = faker.name.findName();
    var email = faker.internet.email();
    return new User({ name, email });
  }
  
  static buildFakeInterests() {
    var result = [];
    for (var i=0; i < 5; i++) {
      result.push(faker.company.bsBuzz());
    }
    return result;
  }
  
  static loadFakeUser(callback) {
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        try { resolve(User.buildFakeUser()); }
        catch(e) { reject(e); }
      }, 1000);
    });
    
    return p.nodeify(callback);
  }
  
  static findByEmail(email, callback) {
    log(`Finding user with email: ${email}`);
    var p = User.loadFakeUser()
      .then(user => {
        // Pretend the fake user has the email we passed in
        user.email = email;
        
        log(`Loaded. Name: ${user.name}`);
        return user;
      });
    
    return p.nodeify(callback);
  }
  
  loadFriends(callback) {
    log(`Loading friends for user ${this.name}`);
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        try { resolve(this.friends()); }
        catch(e) { reject(e); }
      }, 1000);
    });
    return p.nodeify(callback);
  }

  *friends(count = 10) {
    for (let i=0; i < count; i ++) {
      yield User.buildFakeUser();
    }
  }
  
  loadInterests(callback) {
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.interests = User.buildFakeInterests();
          resolve(this.interests);
        }
        catch(e) { reject(e); }
      }, 1000);
    });
    
    return p.nodeify(callback);
  }
  
  loadCompany(callback) {
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.company = faker.company.companyName();
          resolve(this.company);
        }
        catch(e) { reject(e); }
      }, 1000);
    });
    
    return p.nodeify(callback);
  }
}
