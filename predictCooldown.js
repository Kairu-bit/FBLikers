
import fs from "fs";

// XXX: PLEASE DO NOT MODIFY

const cooldownFile = 'cooldown.json';

export function addCooldown(email) {
  let cooldownData = {};
  
  try {  
    cooldownData = JSON.parse(fs.readFileSync(cooldownFile));
  }
  catch (err) {
    return {
      errorMsg: `Function (addCooldown) Error: ${err.message}`
    }
  }

  if (!(email in cooldownData) || isCooldownExpired(cooldownData[email])) {
    cooldownData[email] = Date.now();
    fs.writeFileSync(cooldownFile, JSON.stringify(cooldownData, null, 2));
    
    const nextSubmitTimestamp = cooldownData[email] + (31 * 60 * 1000);
    const nextSubmitDate = new Date(nextSubmitTimestamp);
    const nextSubmitTime = nextSubmitDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
    return {
      hr: nextSubmitTime,
      added: true
    };
  }
  else {
    return checkCooldown(email);
  }
}

export function checkCooldown(email) {
  let cooldownData = {};
  
  try {  
    cooldownData = JSON.parse(fs.readFileSync(cooldownFile));
  }
  catch (err) {
    return {
      errorMsg: `Function (checkCooldown) Error: ${err.message}`
    }
  }
  
  if (email in cooldownData) {
    const nextSubmitTimestamp = cooldownData[email] + (31 * 60 * 1000);
    const nextSubmitDate = new Date(nextSubmitTimestamp);
    const nextSubmitTime = nextSubmitDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
    return {
      min: getCooldown(email) === 0 ? deleteCooldown(email) : getCooldown(email) + "min",
      hr: nextSubmitTime
    };
  } 
  else {
    return {
      errorMsg: `Function (checkCooldown) Error: Can't Find Cooldown for ${email}`
    }
  }
}

function deleteCooldown(email) {
  let cooldownData = {};

  try {
    cooldownData = JSON.parse(fs.readFileSync(cooldownFile));
  }
  catch (err) {
    return {
      errorMsg: `Function (deleteCooldown) Error: ${err.message}`
    }
  }

  if (email in cooldownData) {
    delete cooldownData[email];
    fs.writeFileSync(cooldownFile, JSON.stringify(cooldownData, null, 2));
    //console.log(`Deleted cooldown for ${email}`);
    return true
  } 
  else {
    return {
      errorMsg: `Function (deleteCooldown) Error: Can't Find Cooldown for ${email}`
    }
  }
}

function getCooldown(email) {
  const cooldownData = JSON.parse(fs.readFileSync(cooldownFile));
  if (email in cooldownData) {  
    const timestamp = cooldownData[email];
    const now = Date.now();
    const cooldownDuration = 31 * 60 * 1000; // 30 minutes in milliseconds
    const remainingTime = cooldownDuration - (now - timestamp);
    const remainingMinutes = Math.floor(remainingTime / (60 * 1000));
    return remainingMinutes;
  }
  else {
    return null;
  }
}

function isCooldownExpired(timestamp) {
  const now = Date.now();
  const cooldownDuration = 31 * 60 * 1000;
  return now - timestamp >= cooldownDuration;
}

//console.log(addCooldown("kyle"))

